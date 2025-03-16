
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogGrid from '@/components/BlogGrid';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import { Loader2 } from 'lucide-react';

type BlogPost = Tables<'blog_posts'>;

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Fetch all posts
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .order('published_at', { ascending: false });
        
        if (error) throw error;
        
        if (data && data.length > 0) {
          setPosts(data);
          // Set the most recent post as featured
          setFeaturedPost(data[0]);
        }
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Không thể tải bài viết. Vui lòng thử lại sau.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog - Virtual Assistant Pro</title>
        <meta name="description" content="Khám phá những bài viết hữu ích về nghề trợ lý ảo, phát triển kỹ năng chuyên môn và cập nhật xu hướng mới nhất trong ngành." />
      </Helmet>
      
      <div className="min-h-screen bg-warmWhite relative overflow-hidden">
        <Navbar />
        
        {/* Floating Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-sunflower/10 animate-spin-slow"></div>
          <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-sunflower/15 animate-float"></div>
          <div className="absolute bottom-1/3 -right-16 w-48 h-48 rounded-full bg-sunflower/10 animate-spin-slow"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-sunflower/5 animate-float"></div>
        </div>

        <div className="relative z-10 pt-32">
          {/* Header Section */}
          <div className="container mx-auto px-4 text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-navy">Blog & Kiến Thức</h1>
            <p className="text-lg text-navy/70 max-w-3xl mx-auto">
              Khám phá những bài viết hữu ích về nghề trợ lý ảo, phát triển kỹ năng 
              chuyên môn và cập nhật xu hướng mới nhất trong ngành.
            </p>
          </div>
          
          {/* Blog Content */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-sunflower" />
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-500">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-4 btn-primary"
              >
                Thử lại
              </button>
            </div>
          ) : (
            <BlogGrid posts={posts} featuredPost={featuredPost} />
          )}
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
