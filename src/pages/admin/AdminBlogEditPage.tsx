import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';

import { EnhancedBlogEditor } from '@/components/admin/EnhancedBlogEditor';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, FileText, Loader2 } from 'lucide-react';

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

const AdminBlogEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isNewPost, setIsNewPost] = useState(false);

  useEffect(() => {
    if (id === 'new') {
      // Create new post
      setIsNewPost(true);
      setPost({
        id: '',
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        featured_image: '',
        author: 'Virtual Assistant Pro',
        status: 'draft',
        category: 'General',
        meta_title: '',
        meta_description: '',
        tags: [],
        published_at: '',
        created_at: new Date().toISOString()
      });
      setIsLoading(false);
    } else if (id) {
      fetchPost(id);
    } else {
      navigate('/admin/blog');
    }
  }, [id, navigate]);

  const fetchPost = async (postId: string) => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', postId)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          toast({
            title: 'Post Not Found',
            description: 'The blog post you are looking for does not exist.',
            variant: 'destructive'
          });
          navigate('/admin/blog');
          return;
        }
        throw error;
      }

      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
      toast({
        title: 'Error',
        description: 'Failed to load blog post',
        variant: 'destructive'
      });
      navigate('/admin/blog');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    // Check if this page was opened in a new tab/window
    if (window.history.length <= 1 || document.referrer === '') {
      // If opened in new tab, close the tab
      window.close();
    } else {
      // If navigated within same tab, go back to blog management
      navigate('/admin/blog');
    }
  };

  const handleSave = () => {
    // Refresh the post data after save
    if (post && !isNewPost) {
      fetchPost(post.id);
    }
    toast({
      title: 'Success',
      description: `Blog post ${isNewPost ? 'created' : 'updated'} successfully`
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <FileText className="w-12 h-12 text-muted-foreground mx-auto" />
          <h2 className="text-xl font-semibold">Post Not Found</h2>
          <p className="text-muted-foreground">The blog post you are looking for does not exist.</p>
          <Button onClick={() => navigate('/admin/blog')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog Management
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Button>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-muted-foreground" />
                <h1 className="text-lg font-semibold">
                  {isNewPost ? 'Create New Blog Post' : `Edit: ${post.title || 'Untitled Post'}`}
                </h1>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="text-sm text-muted-foreground">
                {isNewPost ? 'New Draft' : `Status: ${post.status}`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editor Content */}
      <div className="flex-1 flex flex-col">
        <EnhancedBlogEditor
          post={post}
          onClose={handleClose}
          onSave={handleSave}
        />
      </div>
    </div>
  );
};

export default AdminBlogEditPage;