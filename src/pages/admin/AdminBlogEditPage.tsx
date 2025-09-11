import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPostsApi } from '@/utils/adminApi';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { Button } from '@/components/ui/button';

import { TiptapBlogEditor } from '@/components/admin/TiptapBlogEditor';
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
  const { user } = useAdminAuth();
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
    if (!user) return;
    
    try {
      setIsLoading(true);
      const response = await blogPostsApi.getById(user.id, postId);
      
      if (!response.success) {
        toast({
          title: 'Post Not Found',
          description: 'The blog post you are looking for does not exist.',
          variant: 'destructive'
        });
        navigate('/admin/blog');
        return;
      }

      setPost(response.data);
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
    <TiptapBlogEditor
      post={post}
      onClose={handleClose}
      onSave={handleSave}
    />
  );
};

export default AdminBlogEditPage;