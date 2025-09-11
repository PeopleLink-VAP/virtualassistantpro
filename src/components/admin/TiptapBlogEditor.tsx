import { useState, useEffect, useCallback } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Typography from '@tiptap/extension-typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import {
  X, Save, Eye, Settings, Maximize, Minimize, 
  Bold, Italic, List, ListOrdered, Quote, Heading1, Heading2, Heading3,
  Undo, Redo, Type, Image, Link, Code, Strikethrough, Hash, FileText
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

interface TiptapBlogEditorProps {
  post: BlogPost;
  onClose: () => void;
  onSave: () => void;
}

export const TiptapBlogEditor = ({ post, onClose, onSave }: TiptapBlogEditorProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
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

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Placeholder.configure({
        placeholder: 'Start writing your story...',
        considerAnyAsEmpty: true,
      }),
      Typography,
    ],
    content: formData.content,
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none',
        style: 'padding: 2rem 0; line-height: 1.6; font-size: 18px;',
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setFormData(prev => ({ ...prev, content: html }));
      updateStats(editor.getText());
    },
  });

  const updateStats = useCallback((text: string) => {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    setWordCount(words);
    setReadingTime(Math.ceil(words / 200));
  }, []);

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

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);

      const tagsArray = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      const updateData = {
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        featured_image: formData.featured_image,
        author: formData.author,
        status: formData.status,
        category: formData.category,
        meta_title: formData.meta_title,
        meta_description: formData.meta_description,
        tags: tagsArray,
        updated_at: new Date().toISOString(),
      };

      let error;
      if (post.id) {
        const result = await supabase
          .from('blog_posts')
          .update(updateData)
          .eq('id', post.id);
        error = result.error;
      } else {
        const result = await supabase
          .from('blog_posts')
          .insert([{ ...updateData, id: crypto.randomUUID() }]);
        error = result.error;
      }

      if (error) throw error;

      toast({
        title: 'Success',
        description: `Post ${post.id ? 'updated' : 'created'} successfully`,
      });
      
      onSave();
    } catch (error: any) {
      console.error('Error saving post:', error);
      toast({
        title: 'Error',
        description: error?.message || 'Failed to save post',
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (!editor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50' : 'min-h-screen'} bg-background flex flex-col`}>
      {/* Header Bar */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="w-4 h-4" />
                <span>{wordCount} words</span>
                <span>•</span>
                <span>{readingTime} min read</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(!showSettings)}
              >
                <Settings className="w-4 h-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleFullscreen}
              >
                {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </Button>

              <Button
                onClick={handleSave}
                disabled={isSaving}
                className="bg-primary hover:bg-primary/90"
              >
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? 'Saving...' : 'Save'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Main Editor */}
        <div className="flex-1 flex flex-col">
          {/* Title Input */}
          <div className="max-w-4xl mx-auto px-6 py-8 w-full">
            <input
              type="text"
              value={formData.title}
              onChange={handleTitleChange}
              placeholder="Post title..."
              className="w-full text-4xl font-bold border-none outline-none bg-transparent placeholder:text-muted-foreground resize-none"
              style={{ lineHeight: '1.2' }}
            />
          </div>

          {/* Toolbar */}
          <div className="max-w-4xl mx-auto px-6 mb-4 w-full">
            <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg border">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'bg-primary text-primary-foreground' : ''}
              >
                <Bold className="w-4 h-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'bg-primary text-primary-foreground' : ''}
              >
                <Italic className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'bg-primary text-primary-foreground' : ''}
              >
                <Strikethrough className="w-4 h-4" />
              </Button>

              <Separator orientation="vertical" className="mx-1 h-6" />

              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'bg-primary text-primary-foreground' : ''}
              >
                <Heading1 className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'bg-primary text-primary-foreground' : ''}
              >
                <Heading2 className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? 'bg-primary text-primary-foreground' : ''}
              >
                <Heading3 className="w-4 h-4" />
              </Button>

              <Separator orientation="vertical" className="mx-1 h-6" />

              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'bg-primary text-primary-foreground' : ''}
              >
                <List className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'bg-primary text-primary-foreground' : ''}
              >
                <ListOrdered className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'bg-primary text-primary-foreground' : ''}
              >
                <Quote className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'bg-primary text-primary-foreground' : ''}
              >
                <Code className="w-4 h-4" />
              </Button>

              <Separator orientation="vertical" className="mx-1 h-6" />

              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().undo()}
              >
                <Undo className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().redo()}
              >
                <Redo className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Editor Content */}
          <div className="flex-1 max-w-4xl mx-auto px-6 pb-20 w-full">
            <EditorContent 
              editor={editor}
              className="tiptap-editor"
            />
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="w-80 border-l bg-muted/50 overflow-y-auto">
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Post Settings</h3>
              </div>

              <div className="space-y-4">
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
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                    placeholder="Brief description..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="tags">Tags (comma separated)</Label>
                  <Input
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                    placeholder="tag1, tag2, tag3"
                  />
                  {formData.tags && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {formData.tags.split(',').map((tag, index) => (
                        tag.trim() && (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag.trim()}
                          </Badge>
                        )
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="featured_image">Featured Image URL</Label>
                  <Input
                    id="featured_image"
                    value={formData.featured_image}
                    onChange={(e) => setFormData(prev => ({ ...prev, featured_image: e.target.value }))}
                    placeholder="https://..."
                  />
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3">SEO Settings</h4>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="meta_title">Meta Title</Label>
                      <Input
                        id="meta_title"
                        value={formData.meta_title}
                        onChange={(e) => setFormData(prev => ({ ...prev, meta_title: e.target.value }))}
                        maxLength={60}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        {formData.meta_title.length}/60 characters
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="meta_description">Meta Description</Label>
                      <Textarea
                        id="meta_description"
                        value={formData.meta_description}
                        onChange={(e) => setFormData(prev => ({ ...prev, meta_description: e.target.value }))}
                        maxLength={160}
                        rows={3}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        {formData.meta_description.length}/160 characters
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};