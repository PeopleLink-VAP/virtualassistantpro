import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
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

  const { toast } = useToast();

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
  
  const convertToMarkdown = (htmlContent: string): string => {
    try {
      // Simple HTML to Markdown conversion
      let markdown = htmlContent
        // Headers
        .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n')
        .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n')
        .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n')
        // Bold and italic
        .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
        .replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
        .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
        .replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*')
        // Lists
        .replace(/<ul[^>]*>/gi, '')
        .replace(/<\/ul>/gi, '\n')
        .replace(/<ol[^>]*>/gi, '')
        .replace(/<\/ol>/gi, '\n')
        .replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')
        // Paragraphs and breaks
        .replace(/<p[^>]*>/gi, '')
        .replace(/<\/p>/gi, '\n\n')
        .replace(/<br[^>]*>/gi, '\n')
        // Blockquotes
        .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, '> $1\n\n')
        // Links
        .replace(/<a[^>]*href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gi, '[$2]($1)')
        // Remove remaining HTML tags
        .replace(/<[^>]*>/g, '')
        // Clean up whitespace
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        .replace(/^\s+|\s+$/g, '')
        .trim();
        
      return markdown;
    } catch (error) {
      console.warn('Error converting to markdown:', error);
      return htmlContent.replace(/<[^>]*>/g, '').trim();
    }
  };

  const handleSave = async (forceSimpleText = false) => {
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
      
      const postData = {
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
        ...postData,
        content: `${postData.content.substring(0, 100)}... (${postData.content.length} chars)`,
        contentType: forceSimpleText ? 'plain text' : 'cleaned HTML'
      });

      const { error } = await supabase
        .from('blog_posts')
        .update(postData)
        .eq('id', post.id);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
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
                
                <div className="w-px h-6 bg-border mx-1" />
                
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => executeCommand('formatBlock', 'h1')}
                  title="Heading 1"
                >
                  <Heading1 className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => executeCommand('formatBlock', 'h2')}
                  title="Heading 2"
                >
                  <Heading2 className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => executeCommand('formatBlock', 'h3')}
                  title="Heading 3"
                >
                  <Heading3 className="w-4 h-4" />
                </Button>
                
                <div className="w-px h-6 bg-border mx-1" />
                
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
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => executeCommand('formatBlock', 'blockquote')}
                  title="Quote"
                >
                  <Quote className="w-4 h-4" />
                </Button>
                
                <div className="w-px h-6 bg-border mx-1" />
                
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => executeCommand('justifyLeft')}
                  title="Align Left"
                >
                  <AlignLeft className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => executeCommand('justifyCenter')}
                  title="Align Center"
                >
                  <AlignCenter className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => executeCommand('justifyRight')}
                  title="Align Right"
                >
                  <AlignRight className="w-4 h-4" />
                </Button>
                
                <div className="w-px h-6 bg-border mx-1" />
                
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => {
                    const url = prompt('Enter URL:');
                    if (url) executeCommand('createLink', url);
                  }}
                  title="Link"
                >
                  <Link className="w-4 h-4" />
                </Button>
                </div>
                
                {/* Content Length Indicator */}
                <div className="text-xs text-muted-foreground flex items-center gap-2">
                  <span className={`${contentLength > 25000 ? 'text-red-500 font-semibold' : contentLength > 20000 ? 'text-yellow-600' : 'text-muted-foreground'}`}>
                    {contentLength.toLocaleString()}
                  </span>
                  <span>/</span>
                  <span>30,000 chars</span>
                  {contentLength > 25000 && (
                    <span className="text-red-500 text-xs font-medium">⚠ Content may be too long</span>
                  )}
                </div>
              </div>
              
              {/* Rich Text Editor */}
              <div
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning
                onInput={handleEditorInput}
                className="min-h-[400px] p-6 focus:outline-none prose prose-sm max-w-none"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.7',
                }}
                data-placeholder="Start writing your blog post..."
                onFocus={(e) => {
                  if (e.target.innerHTML === '') {
                    e.target.innerHTML = '';
                  }
                }}
                onBlur={(e) => {
                  if (e.target.innerHTML === '') {
                    e.target.setAttribute('data-empty', 'true');
                  } else {
                    e.target.removeAttribute('data-empty');
                  }
                }}
              />
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Tags (comma-separated)</Label>
            <Input
              value={formData.tags}
              onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
              placeholder="virtual assistant, freelancing, tips"
              className="text-sm"
            />
          </div>

          {/* SEO Meta */}
          <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
            <h3 className="font-semibold text-sm">SEO Settings</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm">Meta Title</Label>
                <Input
                  value={formData.meta_title}
                  onChange={(e) => setFormData(prev => ({ ...prev, meta_title: e.target.value }))}
                  placeholder="SEO title for search engines"
                  className="text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm">Meta Description</Label>
                <textarea
                  value={formData.meta_description}
                  onChange={(e) => setFormData(prev => ({ ...prev, meta_description: e.target.value }))}
                  placeholder="Brief description for search results"
                  className="w-full p-3 border rounded-md resize-none h-16 text-sm"
                />
              </div>
            </div>
          </div>
            </div>

            {/* Bottom padding for scroll */}
            <div className="h-32" />
          </div>
        </div>
      </div>
    </div>
  );
};
