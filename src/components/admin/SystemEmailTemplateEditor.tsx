import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { 
  X, Save, Eye, RefreshCw, Code, Type, Settings, 
  Bold, Italic, Underline, Link2, AlignLeft, AlignCenter, AlignRight,
  Plus, Palette, Upload, RotateCcw
} from 'lucide-react';

// Supabase email template variables
const SUPABASE_VARIABLES = [
  { key: 'ConfirmationURL', label: 'Confirmation URL', description: 'Link for email confirmation' },
  { key: 'Token', label: 'OTP Token', description: '6-digit verification code' },
  { key: 'TokenHash', label: 'Token Hash', description: 'Hashed version of the token' },
  { key: 'SiteURL', label: 'Site URL', description: 'Your application site URL' },
  { key: 'RedirectTo', label: 'Redirect URL', description: 'Redirect URL after action' },
  { key: 'Email', label: 'Current Email', description: 'User\'s current email address' },
  { key: 'NewEmail', label: 'New Email', description: 'User\'s new email address' },
  { key: 'Data', label: 'User Data', description: 'User metadata from auth.users.user_metadata' }
];

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

interface SystemEmailTemplateEditorProps {
  template: SystemEmailTemplate;
  onClose: () => void;
  onSave: (updates: { subject: string; html_content: string }) => Promise<void>;
  onReset: () => Promise<void>;
}

export const SystemEmailTemplateEditor = ({ 
  template, 
  onClose, 
  onSave, 
  onReset 
}: SystemEmailTemplateEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('editor');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [formData, setFormData] = useState({
    subject: template.subject,
    html_content: template.html_content
  });
  const { toast } = useToast();

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = convertVariablesToPills(formData.html_content);
    }
  }, [formData.html_content]);

  // Convert Supabase variables to visual pill tags
  const convertVariablesToPills = (content: string) => {
    let processedContent = content;
    
    SUPABASE_VARIABLES.forEach(variable => {
      const regex = new RegExp(`\\{\\{\\s*\\.${variable.key}\\s*\\}\\}`, 'g');
      processedContent = processedContent.replace(
        regex,
        `<span class="variable-pill" data-variable="${variable.key}" contenteditable="false" style="
          background-color: #fbbf24; 
          color: #1e3a8a; 
          padding: 2px 8px; 
          border-radius: 12px; 
          font-size: 12px; 
          font-weight: 600; 
          margin: 0 2px;
          display: inline-block;
          cursor: pointer;
        ">
          {{ .${variable.key} }}
        </span>`
      );
    });
    
    return processedContent;
  };

  // Convert pill tags back to Supabase variables
  const convertPillsToVariables = (content: string) => {
    let processedContent = content;
    
    // Replace pill spans with actual Supabase variable syntax
    const pillRegex = /<span[^>]*data-variable="([^"]+)"[^>]*>.*?<\/span>/g;
    processedContent = processedContent.replace(pillRegex, (match, variableKey) => {
      return `{{ .${variableKey} }}`;
    });
    
    return processedContent;
  };

  const handleContentChange = () => {
    if (editorRef.current) {
      const rawContent = editorRef.current.innerHTML;
      const cleanContent = convertPillsToVariables(rawContent);
      setFormData(prev => ({ ...prev, html_content: cleanContent }));
    }
  };

  const insertVariable = (variable: typeof SUPABASE_VARIABLES[0]) => {
    if (!editorRef.current) return;
    
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      
      // Create pill element
      const pill = document.createElement('span');
      pill.className = 'variable-pill';
      pill.setAttribute('data-variable', variable.key);
      pill.setAttribute('contenteditable', 'false');
      pill.style.cssText = `
        background-color: #fbbf24; 
        color: #1e3a8a; 
        padding: 2px 8px; 
        border-radius: 12px; 
        font-size: 12px; 
        font-weight: 600; 
        margin: 0 2px;
        display: inline-block;
        cursor: pointer;
      `;
      pill.textContent = `{{ .${variable.key} }}`;
      
      range.deleteContents();
      range.insertNode(pill);
      
      // Move cursor after the pill
      range.setStartAfter(pill);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
      
      handleContentChange();
    }
  };

  const execCommand = (command: string, value?: string) => {
    if (!editorRef.current) return;
    
    editorRef.current.focus();
    document.execCommand(command, false, value);
    handleContentChange();
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave({
        subject: formData.subject,
        html_content: formData.html_content
      });
      toast({
        title: "Success",
        description: "Email template updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save template.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = async () => {
    setIsResetting(true);
    try {
      await onReset();
      setFormData({
        subject: template.default_subject,
        html_content: template.default_html_content
      });
      toast({
        title: "Success",
        description: "Template reset to default successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to reset template.",
        variant: "destructive",
      });
    } finally {
      setIsResetting(false);
    }
  };

  const previewContent = () => {
    // Create a preview with sample data
    let preview = formData.html_content;
    
    // Replace variables with sample data for preview
    const sampleData = {
      ConfirmationURL: 'https://example.com/confirm?token=abc123',
      Token: '123456',
      TokenHash: 'abc123def456',
      SiteURL: 'https://virtualassistantpro.vn',
      RedirectTo: 'https://virtualassistantpro.vn/dashboard',
      Email: 'user@example.com',
      NewEmail: 'newuser@example.com',
      Data: 'User metadata'
    };
    
    Object.entries(sampleData).forEach(([key, value]) => {
      const regex = new RegExp(`\\{\\{\\s*\\.${key}\\s*\\}\\}`, 'g');
      preview = preview.replace(regex, value);
    });
    
    return preview;
  };

  return (
    <div className={`fixed inset-0 bg-background z-50 ${isFullscreen ? '' : 'p-4'}`}>
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
            <div>
              <h2 className="text-lg font-semibold">{template.name}</h2>
              <p className="text-sm text-muted-foreground">{template.description}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleReset}
              disabled={isResetting}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              {isResetting ? 'Resetting...' : 'Reset to Default'}
            </Button>
            <Button 
              size="sm" 
              onClick={handleSave}
              disabled={isSaving}
            >
              <Save className="w-4 h-4 mr-2" />
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Main Editor */}
          <div className="flex-1 flex flex-col">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="editor">Editor</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">HTML Code</TabsTrigger>
              </TabsList>
              
              <TabsContent value="editor" className="flex-1 flex flex-col mt-0">
                {/* Subject Line */}
                <div className="p-4 border-b">
                  <Label htmlFor="subject">Email Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    placeholder="Enter email subject..."
                    className="mt-1"
                  />
                </div>
                
                {/* Toolbar */}
                <div className="flex items-center gap-1 p-2 border-b bg-muted/50">
                  <Button variant="ghost" size="sm" onClick={() => execCommand('bold')}>
                    <Bold className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => execCommand('italic')}>
                    <Italic className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => execCommand('underline')}>
                    <Underline className="w-4 h-4" />
                  </Button>
                  <Separator orientation="vertical" className="h-6 mx-1" />
                  <Button variant="ghost" size="sm" onClick={() => execCommand('justifyLeft')}>
                    <AlignLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => execCommand('justifyCenter')}>
                    <AlignCenter className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => execCommand('justifyRight')}>
                    <AlignRight className="w-4 h-4" />
                  </Button>
                  <Separator orientation="vertical" className="h-6 mx-1" />
                  <Button variant="ghost" size="sm" onClick={() => execCommand('createLink', prompt('Enter URL:') || '')}>
                    <Link2 className="w-4 h-4" />
                  </Button>
                </div>
                
                {/* Editor */}
                <div className="flex-1 p-4">
                  <div
                    ref={editorRef}
                    contentEditable
                    onInput={handleContentChange}
                    className="min-h-[400px] p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    style={{ lineHeight: '1.6' }}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="preview" className="flex-1 mt-0">
                <div className="h-full p-4">
                  <div className="bg-white border rounded-lg h-full overflow-auto">
                    <div className="p-4 border-b bg-muted/50">
                      <strong>Subject:</strong> {formData.subject}
                    </div>
                    <div 
                      className="p-4"
                      dangerouslySetInnerHTML={{ __html: previewContent() }}
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="code" className="flex-1 mt-0">
                <div className="h-full p-4">
                  <textarea
                    value={formData.html_content}
                    onChange={(e) => setFormData(prev => ({ ...prev, html_content: e.target.value }))}
                    className="w-full h-full p-4 font-mono text-sm border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="HTML content..."
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Variables Sidebar */}
          <div className="w-80 border-l bg-muted/30">
            <div className="p-4">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Code className="w-4 h-4" />
                Supabase Variables
              </h3>
              
              <div className="space-y-2">
                {SUPABASE_VARIABLES.map((variable) => (
                  <div key={variable.key} className="group">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-left h-auto p-3"
                      onClick={() => insertVariable(variable)}
                    >
                      <div className="flex-1">
                        <div className="font-medium text-sm">{variable.label}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {variable.description}
                        </div>
                        <Badge variant="secondary" className="mt-2 text-xs">
                          {`{{ .${variable.key} }}`}
                        </Badge>
                      </div>
                      <Plus className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Template Info</h4>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div><strong>Type:</strong> {template.template_key}</div>
                  <div><strong>System Template:</strong> {template.is_system ? 'Yes' : 'No'}</div>
                  <div><strong>Active:</strong> {template.is_active ? 'Yes' : 'No'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};