import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { blogPostsApi } from '@/utils/adminApi';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { 
  X, Save, Eye, FileText, Calendar, User, Tag, Image, 
  Bold, Italic, Underline, List, ListOrdered, Quote,
  Heading1, Heading2, Heading3, Link, AlignLeft, AlignCenter, AlignRight
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: string;
  status: string;
  category: string;
  meta_title: string;
  meta_description: string;
  tags: string[];
  published_at: string;
  created_at: string;
}

interface PlateEditorProps {
  post: BlogPost;
  onClose: () => void;
  onSave: () => void;
}

export const PlateEditorComponent = ({ post, onClose, onSave }: PlateEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [contentLength, setContentLength] = useState(0);
  const [formData, setFormData] = useState({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt || '',
    content: post.content,
    featured_image: post.featured_image || '',
    author: post.author,
    status: post.status,
    category: post.category || 'General',
    meta_title: post.meta_title || '',
    meta_description: post.meta_description || '',
    tags: post.tags?.join(', ') || '',
  });
  const { toast } = useToast();
  const { user } = useAdminAuth();
  
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = post.content;
      // Initialize content length
      const textLength = editorRef.current.textContent?.length || 0;
      setContentLength(textLength);
    }
  }, [post.content]);

  const executeCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const handleEditorInput = () => {
    if (editorRef.current) {
      // Clean up the content as the user types to prevent complex nesting
      const currentContent = editorRef.current.innerHTML;
      const cleanedContent = currentContent
        .replace(/<div><br><\/div>/g, '<br>') // Clean up empty divs with breaks
        .replace(/<div><\/div>/g, '<br>') // Clean up empty divs
        .replace(/(<br>\s*){3,}/g, '<br><br>'); // Limit consecutive breaks
      
      // Calculate content length for display
      const textLength = editorRef.current.textContent?.length || 0;
      setContentLength(textLength);
      
      if (cleanedContent !== currentContent) {
        // Save cursor position
        const selection = window.getSelection();
        const range = selection?.getRangeAt(0);
        const caretOffset = range?.startOffset;
        
        // Update content
        editorRef.current.innerHTML = cleanedContent;
        
        // Restore cursor position (simplified)
        if (selection && range && editorRef.current.firstChild) {
          try {
            range.setStart(editorRef.current.firstChild, Math.min(caretOffset || 0, editorRef.current.textContent?.length || 0));
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
          } catch (e) {
            // Fallback: move cursor to end
            range.selectNodeContents(editorRef.current);
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
          }
        }
      }
      
      setFormData(prev => ({ ...prev, content: editorRef.current!.innerHTML }));
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const cleanHTMLContent = (htmlContent: string): string => {
    try {
      // Create a temporary div to parse the HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;
      
      // Convert to plain text first, then add simple formatting
      const textContent = tempDiv.textContent || tempDiv.innerText || '';
      
      // If content is too simple, return as plain text
      if (textContent.length < 50) {
        return textContent;
      }
      
      // Create a much simpler HTML structure
      const lines = textContent.split('\n').filter(line => line.trim());
      const simplifiedHTML = lines
        .map(line => {
          const trimmedLine = line.trim();
          if (!trimmedLine) return '';
          
          // Convert to simple paragraph tags
          return `<p>${trimmedLine}</p>`;
        })
        .filter(Boolean)
        .join('');
      
      return simplifiedHTML || textContent;
    } catch (error) {
      console.warn('Error cleaning HTML content, falling back to text:', error);
      // Fallback to plain text
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;
      return tempDiv.textContent || tempDiv.innerText || htmlContent;
    }
  };

  const handleSave = async (forceSimpleText = false) => {
    if (!user) return;
    
    try {
      // Get the current content from the editor
      const rawContent = editorRef.current?.innerHTML || formData.content;
      
      let finalContent;
      if (forceSimpleText) {
        // Force plain text conversion
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = rawContent;
        finalContent = tempDiv.textContent || tempDiv.innerText || rawContent;
      } else {
        // Try cleaned HTML first
        finalContent = cleanHTMLContent(rawContent);
      }
      
      // Limit content length to prevent issues
      const maxContentLength = 30000; // Reduced to 30KB limit
      if (finalContent.length > maxContentLength) {
        finalContent = finalContent.substring(0, maxContentLength) + '...';
      }
      
      const updateData = {
        title: formData.title.trim(),
        slug: (formData.slug || generateSlug(formData.title)).trim(),
        excerpt: formData.excerpt.trim(),
        content: finalContent,
        featured_image: formData.featured_image.trim(),
        author: formData.author.trim(),
        status: formData.status,
        category: formData.category,
        meta_title: formData.meta_title.trim(),
        meta_description: formData.meta_description.trim(),
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean).slice(0, 10), // Reduced to 10 tags
      };

      console.log('Saving post data:', {
        ...updateData,
        content: `${updateData.content.substring(0, 100)}... (${updateData.content.length} chars)`,
        contentType: forceSimpleText ? 'plain text' : 'cleaned HTML'
      });

      const response = await blogPostsApi.update(user.id, post.id, updateData);
      
      if (!response.success) {
        throw new Error(response.error || 'Failed to save post');
      }

      toast({ 
        title: "Success", 
        description: forceSimpleText ? "Post saved as plain text." : "Post saved successfully." 
      });
      
      onSave();
    } catch (error: any) {
      console.error('Error saving post:', error);
      
      if ((error.code === '54001' || error.message?.includes('stack depth')) && !forceSimpleText) {
        // Retry as plain text
        console.log('Retrying save as plain text...');
        toast({
          title: "Converting to plain text",
          description: "Content was too complex, saving as plain text instead.",
        });
        return handleSave(true);
      }
      
      let errorMessage = "Failed to save post.";
      
      if (error.code === '54001' || error.message?.includes('stack depth')) {
        errorMessage = "Content is still too complex even as plain text. Please reduce content length.";
      } else if (error.code === '22001') {
        errorMessage = "Content is too long. Please reduce the content length.";
      } else if (error.message?.includes('network') || error.message?.includes('connection')) {
        errorMessage = "Network error. Please check your connection and try again.";
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const handlePreview = () => {
    window.open(`/blog/${formData.slug}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-[90vw] h-[90vh] bg-background border rounded-lg shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex-shrink-0 border-b bg-background">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="p-2"
                >
                  <X className="w-5 h-5" />
                </Button>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-muted-foreground" />
                  <span className="font-semibold">Edit Post</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Badge variant={formData.status === 'published' ? 'default' : 'secondary'}>
                  {formData.status}
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePreview}
                  className="flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  Preview
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleSave()}
                  className="flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-6 py-8 max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Title */}
              <div className="space-y-2">
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    title: e.target.value,
                    slug: generateSlug(e.target.value)
                  }))}
                  placeholder="Post title..."
                  className="text-4xl font-bold border-none p-0 focus-visible:ring-0 bg-transparent resize-none"
                  style={{ fontSize: '2.25rem', lineHeight: '2.5rem' }}
                />
                <div className="text-sm text-muted-foreground">
                  Slug: /{formData.slug}
                </div>
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-wide text-muted-foreground flex items-center gap-1">
                    <User className="w-3 h-3" />
                    Author
                  </Label>
                  <Input
                    value={formData.author}
                    onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                    className="text-sm"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-wide text-muted-foreground flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    Category
                  </Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                    <SelectTrigger className="text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="General">General</SelectItem>
                      <SelectItem value="Virtual Assistant">Virtual Assistant</SelectItem>
                      <SelectItem value="Freelancing">Freelancing</SelectItem>
                      <SelectItem value="Productivity">Productivity</SelectItem>
                      <SelectItem value="Business Tips">Business Tips</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-wide text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Status
                  </Label>
                  <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}>
                    <SelectTrigger className="text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Featured Image */}
              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Image className="w-4 h-4" />
                  Featured Image URL
                </Label>
                <Input
                  value={formData.featured_image}
                  onChange={(e) => setFormData(prev => ({ ...prev, featured_image: e.target.value }))}
                  placeholder="https://example.com/image.jpg"
                  className="text-sm"
                />
                {formData.featured_image && (
                  <div className="mt-2">
                    <img 
                      src={formData.featured_image} 
                      alt="Featured" 
                      className="max-w-sm h-32 object-cover rounded-lg border"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Excerpt */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Excerpt</Label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="A brief description of your post..."
                  className="w-full p-3 border rounded-md resize-none h-20 text-sm"
                />
              </div>

              {/* Toolbar */}
              <div className="space-y-4">
                <Label className="text-sm font-medium">Content</Label>
                <div className="border rounded-lg overflow-hidden">
                  {/* Editor Toolbar */}
                  <div className="flex items-center justify-between p-2 border-b bg-muted/50">
                    <div className="flex items-center gap-1">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => executeCommand('bold')}
                        title="Bold"
                      >
                        <Bold className="w-4 h-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => executeCommand('italic')}
                        title="Italic"
                      >
                        <Italic className="w-4 h-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => executeCommand('underline')}
                        title="Underline"
                      >
                        <Underline className="w-4 h-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => executeCommand('insertUnorderedList')}
                        title="Bullet List"
                      >
                        <List className="w-4 h-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => executeCommand('insertOrderedList')}
                        title="Numbered List"
                      >
                        <ListOrdered className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      {contentLength} characters
                    </div>
                  </div>
                  
                  {/* Editor Content */}
                  <div 
                    ref={editorRef}
                    contentEditable
                    className="min-h-[400px] p-4 focus:outline-none prose max-w-none"
                    onInput={handleEditorInput}
                    style={{
                      lineHeight: '1.6',
                      fontSize: '16px',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};