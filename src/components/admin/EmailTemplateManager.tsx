import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { emailTemplatesApi } from '@/utils/adminApi';
import { 
  Plus, Edit, Trash2, Eye, Copy, Mail, Code, Settings, 
  Search, Filter, Save, X, AlertCircle, CheckCircle 
} from 'lucide-react';

interface EmailTemplate {
  id: string;
  name: string;
  description: string;
  subject: string;
  html_content: string;
  text_content: string;
  template_type: string;
  is_active: boolean;
  variables: string[] | null;
  created_at: string;
  updated_at: string;
}

interface TemplateVariable {
  id: string;
  template_id: string;
  variable_name: string;
  variable_type: string;
  default_value: string;
  description: string;
  is_required: boolean;
}

const TEMPLATE_TYPES = [
  { value: 'newsletter_signup', label: 'Newsletter Signup' },
  { value: 'welcome', label: 'Welcome Email' },
  { value: 'general', label: 'General' },
  { value: 'notification', label: 'Notification' },
  { value: 'campaign', label: 'Campaign' }
];

const VARIABLE_TYPES = [
  { value: 'text', label: 'Text' },
  { value: 'url', label: 'URL' },
  { value: 'date', label: 'Date' },
  { value: 'number', label: 'Number' }
];

export const EmailTemplateManager = () => {
  const { user, isAdminAuthenticated } = useAdminAuth();
  const [templates, setTemplates] = useState<EmailTemplate[]>([]);
  const [variables, setVariables] = useState<TemplateVariable[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<EmailTemplate | null>(null);
  const [previewTemplate, setPreviewTemplate] = useState<EmailTemplate | null>(null);
  const [activeTab, setActiveTab] = useState('list');
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    subject: '',
    html_content: '',
    text_content: '',
    template_type: 'general',
    is_active: true,
    variables: [] as string[]
  });
  const { toast } = useToast();

  useEffect(() => {
    if (isAdminAuthenticated) {
      fetchTemplates();
    }
  }, [isAdminAuthenticated]);

  const fetchTemplates = async () => {
    if (!user?.id) return;
    
    try {
      setIsLoading(true);
      const response = await emailTemplatesApi.getAll(user.id);

      if (!response.success) {
        console.error('Error fetching templates:', response.error);
        toast({
          title: 'Error',
          description: response.error || 'Failed to fetch email templates',
          variant: 'destructive'
        });
        return;
      }
      
      const processedData = (response.data || []).map(template => ({
        ...template,
        variables: (() => {
          if (Array.isArray(template.variables)) {
            return template.variables.filter(v => typeof v === 'string') as string[];
          }
          if (typeof template.variables === 'string') {
            return [template.variables];
          }
          return [];
        })()
      }));
      setTemplates(processedData);
    } catch (error) {
      console.error('Error fetching templates:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch email templates',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTemplateVariables = async (templateId: string) => {
    // Template variables functionality will be implemented with the API
    // For now, we'll use the variables stored in the template itself
    const template = templates.find(t => t.id === templateId);
    if (template?.variables) {
      const templateVars = template.variables.map((varName, index) => ({
        id: `${templateId}-${index}`,
        template_id: templateId,
        variable_name: varName,
        variable_type: 'text',
        default_value: '',
        description: '',
        is_required: false
      }));
      setVariables(templateVars);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user?.id) return;
    
    try {
      const templateData = {
        name: formData.name,
        description: formData.description,
        subject: formData.subject,
        html_content: formData.html_content,
        text_content: formData.text_content,
        template_type: formData.template_type,
        is_active: formData.is_active,
        variables: formData.variables,
        created_by: user.id
      };

      if (editingTemplate) {
        const response = await emailTemplatesApi.update(user.id, editingTemplate.id, templateData);
        
        if (!response.success) {
          throw new Error(response.error || 'Failed to update template');
        }
        toast({
          title: 'Success',
          description: 'Email template updated successfully'
        });
      } else {
        const response = await emailTemplatesApi.create(user.id, templateData);
        
        if (!response.success) {
          throw new Error(response.error || 'Failed to create template');
        }
        toast({
          title: 'Success',
          description: 'Email template created successfully'
        });
      }

      setIsDialogOpen(false);
      resetForm();
      fetchTemplates();
    } catch (error: any) {
      console.error('Error saving template:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to save email template',
        variant: 'destructive'
      });
    }
  };

  const handleEdit = (template: EmailTemplate) => {
    setEditingTemplate(template);
    setFormData({
      name: template.name,
      description: template.description || '',
      subject: template.subject,
      html_content: template.html_content,
      text_content: template.text_content || '',
      template_type: template.template_type,
      is_active: template.is_active,
      variables: template.variables || []
    });
    setIsDialogOpen(true);
    fetchTemplateVariables(template.id);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this email template?')) return;
    if (!user?.id) return;

    try {
      const response = await emailTemplatesApi.delete(user.id, id);

      if (!response.success) {
        throw new Error(response.error || 'Failed to delete template');
      }
      
      toast({
        title: 'Success',
        description: 'Email template deleted successfully'
      });
      
      fetchTemplates();
    } catch (error: any) {
      console.error('Error deleting template:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to delete email template',
        variant: 'destructive'
      });
    }
  };

  const handleDuplicate = async (template: EmailTemplate) => {
    if (!user?.id) return;
    
    try {
      const duplicateData = {
        name: `${template.name} (Copy)`,
        description: template.description,
        subject: template.subject,
        html_content: template.html_content,
        text_content: template.text_content,
        template_type: template.template_type,
        is_active: false,
        variables: template.variables || [],
        created_by: user.id
      };

      const response = await emailTemplatesApi.create(user.id, duplicateData);

      if (!response.success) {
        throw new Error(response.error || 'Failed to duplicate template');
      }
      
      toast({
        title: 'Success',
        description: 'Email template duplicated successfully'
      });
      
      fetchTemplates();
    } catch (error: any) {
      console.error('Error duplicating template:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to duplicate email template',
        variant: 'destructive'
      });
    }
  };

  const handleToggleActive = async (id: string, isActive: boolean) => {
    if (!user?.id) return;
    
    try {
      const response = await emailTemplatesApi.update(user.id, id, { is_active: isActive });

      if (!response.success) {
        throw new Error(response.error || 'Failed to update template status');
      }
      
      fetchTemplates();
    } catch (error: any) {
      console.error('Error updating template status:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to update template status',
        variant: 'destructive'
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      subject: '',
      html_content: '',
      text_content: '',
      template_type: 'general',
      is_active: true,
      variables: []
    });
    setEditingTemplate(null);
    setVariables([]);
  };

  const handlePreview = (template: EmailTemplate) => {
    setPreviewTemplate(template);
    setIsPreviewOpen(true);
  };

  const extractVariablesFromContent = (content: string): string[] => {
    const variableRegex = /\{\{([^}]+)\}\}/g;
    const matches = content.match(variableRegex) || [];
    return [...new Set(matches.map(match => match.replace(/[{}]/g, '')))];
  };

  const updateVariablesFromContent = () => {
    const htmlVariables = extractVariablesFromContent(formData.html_content);
    const textVariables = extractVariablesFromContent(formData.text_content);
    const subjectVariables = extractVariablesFromContent(formData.subject);
    
    const allVariables = [...new Set([...htmlVariables, ...textVariables, ...subjectVariables])];
    setFormData(prev => ({ ...prev, variables: allVariables }));
  };

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || template.template_type === filterType;
    return matchesSearch && matchesFilter;
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-8 bg-muted rounded w-48 animate-pulse" />
          <div className="h-10 bg-muted rounded w-32 animate-pulse" />
        </div>
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-16 bg-muted rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="list" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Templates
            </TabsTrigger>
            <TabsTrigger value="usage" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Usage Analytics
            </TabsTrigger>
          </TabsList>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm} className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Create Template
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingTemplate ? 'Edit Email Template' : 'Create New Email Template'}
                </DialogTitle>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Template Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter template name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="template_type">Template Type</Label>
                    <Select
                      value={formData.template_type}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, template_type: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {TEMPLATE_TYPES.map(type => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Brief description of the template"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Email Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    placeholder="Email subject line (use {{variable}} for dynamic content)"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="html_content">HTML Content *</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={updateVariablesFromContent}
                    >
                      <Code className="w-4 h-4 mr-2" />
                      Extract Variables
                    </Button>
                  </div>
                  <Textarea
                    id="html_content"
                    value={formData.html_content}
                    onChange={(e) => setFormData(prev => ({ ...prev, html_content: e.target.value }))}
                    placeholder="HTML email content (use {{variable}} for dynamic content)"
                    className="min-h-[200px] font-mono text-sm"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="text_content">Plain Text Content</Label>
                  <Textarea
                    id="text_content"
                    value={formData.text_content}
                    onChange={(e) => setFormData(prev => ({ ...prev, text_content: e.target.value }))}
                    placeholder="Plain text version (fallback for email clients that don't support HTML)"
                    className="min-h-[100px]"
                  />
                </div>

                {formData.variables.length > 0 && (
                  <div className="space-y-2">
                    <Label>Detected Variables</Label>
                    <div className="flex flex-wrap gap-2">
                      {formData.variables.map(variable => (
                        <Badge key={variable} variant="secondary">
                          {variable}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-2">
                  <Switch
                    id="is_active"
                    checked={formData.is_active}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_active: checked }))}
                  />
                  <Label htmlFor="is_active">Active Template</Label>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">
                    <Save className="w-4 h-4 mr-2" />
                    {editingTemplate ? 'Update Template' : 'Create Template'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <TabsContent value="list" className="space-y-4">
          <div className="flex gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {TEMPLATE_TYPES.map(type => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Email Templates ({filteredTemplates.length})</CardTitle>
              <CardDescription>
                Manage your email templates for newsletters, notifications, and campaigns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Variables</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTemplates.map((template) => (
                    <TableRow key={template.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{template.name}</div>
                          {template.description && (
                            <div className="text-sm text-muted-foreground">
                              {template.description}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {TEMPLATE_TYPES.find(t => t.value === template.template_type)?.label || template.template_type}
                        </Badge>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">
                        {template.subject}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Switch
                            checked={template.is_active}
                            onCheckedChange={(checked) => handleToggleActive(template.id, checked)}
                          />
                          <span className="text-sm">
                            {template.is_active ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {template.variables?.slice(0, 3).map(variable => (
                            <Badge key={variable} variant="secondary" className="text-xs">
                              {variable}
                            </Badge>
                          ))}
                          {template.variables && template.variables.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{template.variables.length - 3}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        {new Date(template.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handlePreview(template)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(template)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDuplicate(template)}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(template.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              {filteredTemplates.length === 0 && (
                <div className="text-center py-8">
                  <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No email templates found</h3>
                  <p className="text-muted-foreground mb-4">
                    {searchTerm || filterType !== 'all' 
                      ? 'Try adjusting your search or filter criteria'
                      : 'Create your first email template to get started'
                    }
                  </p>
                  {!searchTerm && filterType === 'all' && (
                    <Button onClick={() => setIsDialogOpen(true)}>
                      <Plus className="w-4 h-4 mr-2" />
                      Create Template
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Template Usage Analytics</CardTitle>
              <CardDescription>
                Track how your email templates are being used
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Settings className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Usage Analytics Coming Soon</h3>
                <p className="text-muted-foreground">
                  Template usage statistics and analytics will be available in a future update.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Preview Dialog */}
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Preview: {previewTemplate?.name}
            </DialogTitle>
          </DialogHeader>
          
          {previewTemplate && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Type:</strong> {TEMPLATE_TYPES.find(t => t.value === previewTemplate.template_type)?.label}
                </div>
                <div>
                  <strong>Status:</strong> {previewTemplate.is_active ? 'Active' : 'Inactive'}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Subject Line</Label>
                <div className="p-3 bg-muted rounded border">
                  {previewTemplate.subject}
                </div>
              </div>
              
              <Tabs defaultValue="html">
                <TabsList>
                  <TabsTrigger value="html">HTML Preview</TabsTrigger>
                  <TabsTrigger value="text">Plain Text</TabsTrigger>
                  <TabsTrigger value="variables">Variables</TabsTrigger>
                </TabsList>
                
                <TabsContent value="html" className="space-y-2">
                  <Label>HTML Content</Label>
                  <div className="border rounded p-4 bg-white max-h-96 overflow-y-auto">
                    <div dangerouslySetInnerHTML={{ __html: previewTemplate.html_content }} />
                  </div>
                </TabsContent>
                
                <TabsContent value="text" className="space-y-2">
                  <Label>Plain Text Content</Label>
                  <div className="p-4 bg-muted rounded border max-h-96 overflow-y-auto whitespace-pre-wrap font-mono text-sm">
                    {previewTemplate.text_content || 'No plain text version available'}
                  </div>
                </TabsContent>
                
                <TabsContent value="variables" className="space-y-2">
                  <Label>Template Variables</Label>
                  <div className="space-y-2">
                    {previewTemplate.variables && previewTemplate.variables.length > 0 ? (
                      <div className="grid gap-2">
                        {previewTemplate.variables.map(variable => (
                          <div key={variable} className="flex items-center gap-2 p-2 bg-muted rounded">
                            <Badge variant="secondary">{variable}</Badge>
                            <span className="text-sm text-muted-foreground">
                              Used in template content
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No variables defined for this template</p>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};