import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { systemEmailTemplatesApi } from '@/utils/adminApi';
import { SystemEmailTemplateEditor } from './SystemEmailTemplateEditor';
import { 
  Mail, Edit, Eye, RefreshCw, Settings, Search, 
  CheckCircle, AlertCircle, Code, RotateCcw, ArrowUpDown
} from 'lucide-react';

interface SystemEmailTemplate {
  id: string;
  template_key: string;
  name: string;
  description: string | null;
  subject: string;
  html_content: string;
  template_type: string;
  is_active: boolean;
  is_system: boolean;
  variables: string[];
  default_subject: string;
  default_html_content: string;
  created_at: string;
  updated_at: string;
}

export const SystemEmailTemplatesManager = () => {
  const { user, isAdminAuthenticated } = useAdminAuth();
  const [templates, setTemplates] = useState<SystemEmailTemplate[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [editingTemplate, setEditingTemplate] = useState<SystemEmailTemplate | null>(null);
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
      const response = await systemEmailTemplatesApi.getAll(user.id);

      if (!response.success) {
        console.error('Error fetching system templates:', response.error);
        toast({
          title: 'Error',
          description: response.error || 'Failed to fetch system email templates',
          variant: 'destructive'
        });
        return;
      }
      
      setTemplates(response.data || []);
    } catch (error) {
      console.error('Error fetching system templates:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch system email templates',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateTemplate = async (updates: { subject: string; html_content: string }) => {
    if (!editingTemplate || !user?.id) return;
    
    try {
      const response = await systemEmailTemplatesApi.update(
        user.id, 
        editingTemplate.id, 
        updates
      );
      
      if (!response.success) {
        throw new Error(response.error || 'Failed to update template');
      }
      
      // Update local state
      setTemplates(prev => prev.map(t => 
        t.id === editingTemplate.id 
          ? { ...t, ...updates }
          : t
      ));
      
      setEditingTemplate(null);
    } catch (error) {
      throw error; // Re-throw to be handled by the editor
    }
  };

  const handleResetTemplate = async () => {
    if (!editingTemplate || !user?.id) return;
    
    try {
      const response = await systemEmailTemplatesApi.resetToDefault(
        user.id, 
        editingTemplate.id
      );
      
      if (!response.success) {
        throw new Error(response.error || 'Failed to reset template');
      }
      
      // Update local state
      setTemplates(prev => prev.map(t => 
        t.id === editingTemplate.id 
          ? response.data!
          : t
      ));
      
      // Update editing template with new data
      setEditingTemplate(response.data!);
    } catch (error) {
      throw error; // Re-throw to be handled by the editor
    }
  };

  const handleToggleActive = async (template: SystemEmailTemplate) => {
    if (!user?.id) return;
    
    try {
      const response = await systemEmailTemplatesApi.update(
        user.id,
        template.id,
        { is_active: !template.is_active }
      );
      
      if (!response.success) {
        throw new Error(response.error || 'Failed to update template status');
      }
      
      setTemplates(prev => prev.map(t => 
        t.id === template.id 
          ? { ...t, is_active: !t.is_active }
          : t
      ));
      
      toast({
        title: 'Success',
        description: `Template ${!template.is_active ? 'activated' : 'deactivated'} successfully`
      });
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to update template status',
        variant: 'destructive'
      });
    }
  };

  const handleSyncToSupabase = async (template: SystemEmailTemplate) => {
    if (!user?.id) return;
    
    try {
      const response = await systemEmailTemplatesApi.syncToSupabase(
        user.id,
        template.template_key
      );
      
      if (!response.success) {
        throw new Error(response.error || 'Failed to sync template');
      }
      
      toast({
        title: 'Success',
        description: 'Template synced to Supabase auth configuration successfully'
      });
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to sync template',
        variant: 'destructive'
      });
    }
  };

  const filteredTemplates = templates.filter(template => 
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.template_key.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTemplateStatusIcon = (template: SystemEmailTemplate) => {
    if (!template.is_active) {
      return <AlertCircle className="w-4 h-4 text-orange-500" />;
    }
    return <CheckCircle className="w-4 h-4 text-green-500" />;
  };

  const getTemplateTypeLabel = (templateKey: string) => {
    const labels: Record<string, string> = {
      confirmation: 'Email Confirmation',
      recovery: 'Password Recovery',
      magic_link: 'Magic Link Login',
      email_change: 'Email Change',
      invite: 'User Invitation',
      reauthentication: 'Re-authentication'
    };
    return labels[templateKey] || templateKey;
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-8 bg-muted rounded w-48 animate-pulse" />
          <div className="h-10 bg-muted rounded w-32 animate-pulse" />
        </div>
        <div className="space-y-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-16 bg-muted rounded animate-pulse" />
          ))}}
        </div>
      </div>
    );
  }

  if (editingTemplate) {
    return (
      <SystemEmailTemplateEditor
        template={editingTemplate}
        onClose={() => setEditingTemplate(null)}
        onSave={handleUpdateTemplate}
        onReset={handleResetTemplate}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">System Email Templates</h2>
          <p className="text-muted-foreground">
            Manage Supabase authentication email templates with visual editor
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Email Templates ({filteredTemplates.length})
          </CardTitle>
          <CardDescription>
            These are system email templates used by Supabase authentication. 
            Changes here will affect the actual emails sent to users.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredTemplates.length === 0 ? (
            <div className="text-center py-8">
              <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No templates found</h3>
              <p className="text-muted-foreground">
                {searchTerm 
                  ? 'Try adjusting your search criteria'
                  : 'No system email templates available'
                }
              </p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Template</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Variables</TableHead>
                  <TableHead>Last Updated</TableHead>
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
                        {getTemplateTypeLabel(template.template_key)}
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <div className="truncate" title={template.subject}>
                        {template.subject}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getTemplateStatusIcon(template)}
                        <Switch
                          checked={template.is_active}
                          onCheckedChange={() => handleToggleActive(template)}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {template.variables.slice(0, 2).map((variable) => (
                          <Badge key={variable} variant="secondary" className="text-xs">
                            {variable}
                          </Badge>
                        ))}
                        {template.variables.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{template.variables.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-muted-foreground">
                        {new Date(template.updated_at).toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setEditingTemplate(template)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleSyncToSupabase(template)}
                          title="Sync to Supabase Auth"
                        >
                          <ArrowUpDown className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            How It Works
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2">
                <Code className="w-4 h-4" />
                Visual Editor
              </h4>
              <p className="text-sm text-muted-foreground">
                Use the visual editor to modify email templates. Supabase variables like{' '}
                <code className="bg-muted px-1 rounded">{`{{ .ConfirmationURL }}`}</code>{' '}appear as 
                interactive pill tags for easy editing.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Reset to Default
              </h4>
              <p className="text-sm text-muted-foreground">
                If you make a mistake, you can always reset any template back to its 
                default Vietnamese version using the reset button.
              </p>
            </div>
          </div>
          
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">⚠️ Important Notes</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Changes to these templates affect actual emails sent to users</li>
              <li>• System templates cannot be deleted, only modified</li>
              <li>• Use the sync button to apply changes to Supabase auth configuration</li>
              <li>• Test your changes carefully before deploying to production</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};