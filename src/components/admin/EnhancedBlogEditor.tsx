import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { blogPostsApi } from '@/utils/adminApi';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { 
  X, Save, Eye, FileText, Calendar, User, Tag, Image, 
  Bold, Italic, Underline, List, ListOrdered, Quote,
  Heading1, Heading2, Heading3, Link2, AlignLeft, AlignCenter, AlignRight,
  Code, Strikethrough, Plus, Type, Palette, Settings, Upload
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

interface EnhancedBlogEditorProps {
  post: BlogPost;
  onClose: () => void;
  onSave: () => void;
}

export const EnhancedBlogEditor = ({ post, onClose, onSave }: EnhancedBlogEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('editor');
  const [wordCount, setWordCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
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

  // Calculate word count and reading time
  const updateStats = useCallback(() => {
    if (editorRef.current) {
      const text = editorRef.current.textContent || '';
      const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
      setWordCount(words);
      setReadingTime(Math.ceil(words / 200)); // Average reading speed: 200 words per minute
    }
  }, []);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = formData.content;
      updateStats();
    }
  }, [formData.content, updateStats]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title),
      meta_title: title
    }));
  };

  const execCommand = (command: string, value?: string) => {
    if (!editorRef.current) return;
    
    // Focus the editor first
    editorRef.current.focus();
    
    // Handle special cases for better compatibility
    if (command === 'insertUnorderedList' || command === 'insertOrderedList') {
      // Better list handling
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        document.execCommand(command, false, undefined);
      }
    } else if (command === 'formatBlock' && value === 'blockquote') {
      // Better blockquote handling
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        document.execCommand('formatBlock', false, 'blockquote');
      }
    } else {
      document.execCommand(command, false, value);
    }
    
    // Update content and stats
    setFormData(prev => ({ ...prev, content: editorRef.current!.innerHTML }));
    updateStats();
  };

  const insertHeading = (level: number) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const heading = document.createElement(`h${level}`);
      heading.textContent = selection.toString() || `Heading ${level}`;
      
      try {
        range.deleteContents();
        range.insertNode(heading);
        range.selectNodeContents(heading);
        selection.removeAllRanges();
        selection.addRange(range);
      } catch (e) {
        console.warn('Could not insert heading:', e);
      }
      
      if (editorRef.current) {
        setFormData(prev => ({ ...prev, content: editorRef.current!.innerHTML }));
        updateStats();
      }
    }
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      execCommand('createLink', url);
    }
  };

  const insertImage = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      execCommand('insertImage', url);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    
    try {
      const content = editorRef.current?.innerHTML || formData.content;
      const tagsArray = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      const updateData = {
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: content,
        featured_image: formData.featured_image,
        author: formData.author,
        status: formData.status,
        category: formData.category,
        meta_title: formData.meta_title || formData.title,
        meta_description: formData.meta_description || formData.excerpt,
        tags: tagsArray,
        ...(formData.status === 'published' && !post.published_at && { published_at: new Date().toISOString() })
      };

      let response;
      if (post.id === 'new' || !post.id) {
        // Creating new post
        response = await blogPostsApi.create(user.id, updateData);
      } else {
        // Updating existing post
        response = await blogPostsApi.update(user.id, post.id, updateData);
      }

      if (!response.success) {
        throw new Error(response.error || 'Failed to save post');
      }

      toast({
        title: "Success",
        description: `Blog post ${post.id === 'new' ? 'created' : 'updated'} successfully.`,
      });

      onSave();
    } catch (error) {
      console.error('Error saving post:', error);
      toast({
        title: "Error",
        description: "Failed to save blog post.",
        variant: "destructive",
      });
    }
  };

  const toolbarButtons = [
    { icon: Bold, command: 'bold', tooltip: 'Bold (Ctrl+B)' },
    { icon: Italic, command: 'italic', tooltip: 'Italic (Ctrl+I)' },
    { icon: Underline, command: 'underline', tooltip: 'Underline (Ctrl+U)' },
    { icon: Strikethrough, command: 'strikeThrough', tooltip: 'Strikethrough' },
    { icon: Code, command: 'formatBlock', value: 'pre', tooltip: 'Code Block' },
  ];

  const alignmentButtons = [
    { icon: AlignLeft, command: 'justifyLeft', tooltip: 'Align Left' },
    { icon: AlignCenter, command: 'justifyCenter', tooltip: 'Align Center' },
    { icon: AlignRight, command: 'justifyRight', tooltip: 'Align Right' },
  ];

  const listButtons = [
    { icon: List, command: 'insertUnorderedList', tooltip: 'Bullet List' },
    { icon: ListOrdered, command: 'insertOrderedList', tooltip: 'Numbered List' },
    { icon: Quote, command: 'formatBlock', value: 'blockquote', tooltip: 'Quote' },
  ];

  return (
    <div className={isFullscreen ? 'fixed inset-0 bg-background z-50 flex flex-col p-0' : 'relative flex flex-col'}>
      <div className="flex-1 flex flex-col w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Blog Editor</h2>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="text-sm text-muted-foreground">
              {wordCount} words • {readingTime} min read
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsFullscreen(!isFullscreen)}
            >
              {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            </Button>
            <Button onClick={handleSave} size="sm">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Editor Area */}
          <div className="flex-1 flex flex-col min-h-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
              <TabsList className="grid w-full grid-cols-3 flex-shrink-0">
                <TabsTrigger value="editor">Editor</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="editor" className="flex-1 flex flex-col mt-0 overflow-hidden">
                {/* Toolbar */}
                <div className="border-b p-2 bg-muted/30 flex-shrink-0">
                  <div className="flex flex-wrap items-center gap-1">
                    {/* Heading Buttons */}
                    <div className="flex items-center gap-1 mr-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => insertHeading(1)}
                        title="Heading 1"
                      >
                        <Heading1 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => insertHeading(2)}
                        title="Heading 2"
                      >
                        <Heading2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => insertHeading(3)}
                        title="Heading 3"
                      >
                        <Heading3 className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <Separator orientation="vertical" className="h-6 mx-1" />
                    
                    {/* Format Buttons */}
                    <div className="flex items-center gap-1 mr-2">
                      {toolbarButtons.map(({ icon: Icon, command, value, tooltip }) => (
                        <Button
                          key={command}
                          variant="ghost"
                          size="sm"
                          onClick={() => execCommand(command, value)}
                          title={tooltip}
                        >
                          <Icon className="w-4 h-4" />
                        </Button>
                      ))}
                    </div>
                    
                    <Separator orientation="vertical" className="h-6 mx-1" />
                    
                    {/* Alignment Buttons */}
                    <div className="flex items-center gap-1 mr-2">
                      {alignmentButtons.map(({ icon: Icon, command, tooltip }) => (
                        <Button
                          key={command}
                          variant="ghost"
                          size="sm"
                          onClick={() => execCommand(command)}
                          title={tooltip}
                        >
                          <Icon className="w-4 h-4" />
                        </Button>
                      ))}
                    </div>
                    
                    <Separator orientation="vertical" className="h-6 mx-1" />
                    
                    {/* List Buttons */}
                    <div className="flex items-center gap-1 mr-2">
                      {listButtons.map(({ icon: Icon, command, value, tooltip }) => (
                        <Button
                          key={command}
                          variant="ghost"
                          size="sm"
                          onClick={() => execCommand(command, value)}
                          title={tooltip}
                        >
                          <Icon className="w-4 h-4" />
                        </Button>
                      ))}
                    </div>
                    
                    <Separator orientation="vertical" className="h-6 mx-1" />
                    
                    {/* Insert Buttons */}
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={insertLink}
                        title="Insert Link"
                      >
                        <Link2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={insertImage}
                        title="Insert Image"
                      >
                        <Image className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Title Input */}
                <div className="p-4 border-b flex-shrink-0">
                  <Input
                    value={formData.title}
                    onChange={handleTitleChange}
                    placeholder="Enter your post title..."
                    className="text-2xl font-bold border-none shadow-none p-0 h-auto focus-visible:ring-0"
                  />
                </div>
                
                {/* Content Editor */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-4 min-h-full">
                    <div
                      ref={editorRef}
                      contentEditable
                      className="min-h-[500px] outline-none prose prose-lg max-w-none focus:outline-none"
                      style={{
                        lineHeight: '1.7',
                        fontSize: '18px',
                      }}
                      onInput={() => {
                        if (editorRef.current) {
                          setFormData(prev => ({ ...prev, content: editorRef.current!.innerHTML }));
                          updateStats();
                        }
                      }}
                      data-placeholder="Start writing your story..."
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="preview" className="flex-1 overflow-y-auto">
                <div className="p-4">
                  <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-4">{formData.title}</h1>
                    <div 
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: formData.content }}
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="flex-1 overflow-y-auto">
                <div className="p-4">
                <div className="max-w-2xl mx-auto space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Post Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="slug">URL Slug</Label>
                          <Input
                            id="slug"
                            value={formData.slug}
                            onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label htmlFor="status">Status</Label>
                          <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="draft">Draft</SelectItem>
                              <SelectItem value="published">Published</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="excerpt">Excerpt</Label>
                        <Input
                          id="excerpt"
                          value={formData.excerpt}
                          onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                          placeholder="Brief description of your post..."
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="tags">Tags (comma-separated)</Label>
                        <Input
                          id="tags"
                          value={formData.tags}
                          onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                          placeholder="tag1, tag2, tag3"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="featured_image">Featured Image URL</Label>
                        <Input
                          id="featured_image"
                          value={formData.featured_image}
                          onChange={(e) => setFormData(prev => ({ ...prev, featured_image: e.target.value }))}
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>SEO Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="meta_title">Meta Title</Label>
                        <Input
                          id="meta_title"
                          value={formData.meta_title}
                          onChange={(e) => setFormData(prev => ({ ...prev, meta_title: e.target.value }))}
                          placeholder="SEO title for search engines"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="meta_description">Meta Description</Label>
                        <Input
                          id="meta_description"
                          value={formData.meta_description}
                          onChange={(e) => setFormData(prev => ({ ...prev, meta_description: e.target.value }))}
                          placeholder="SEO description for search engines"
                        />
                      </div>
                    </CardContent>
                  </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};