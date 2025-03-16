
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { supabase } from '@/integrations/supabase/client';
import { Helmet } from 'react-helmet';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  published_at: string;
  featured_image?: string;
}

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .order('published_at', { ascending: false });
          
        if (error) {
          console.error('Error fetching blog posts:', error);
          return;
        }
        
        setBlogPosts(data || []);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBlogPosts();
    
    // Subscribe to realtime changes
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'blog_posts'
        },
        (payload) => {
          console.log('Realtime update:', payload);
          fetchBlogPosts();
        }
      )
      .subscribe();
      
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Blog - Virtual Assistant Pro</title>
        <meta name="description" content="Khám phá những bài viết mới nhất về nghề Trợ Lý Ảo, xu hướng và cơ hội việc làm." />
      </Helmet>
      
      <div className="min-h-screen bg-warmWhite">
        <Navbar />
        
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-navy mb-4">Blog</h1>
              <p className="text-navy/70 max-w-2xl mx-auto">
                Khám phá những bài viết mới nhất về nghề Trợ Lý Ảo, xu hướng và cơ hội việc làm trong thị trường Việt Nam
              </p>
            </div>
            
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sunflower"></div>
              </div>
            ) : (
              <div className="max-w-[1600px] mx-auto">
                {blogPosts.length > 0 && (
                  <div className="mb-16">
                    <BlogCard 
                      id={blogPosts[0].id}
                      title={blogPosts[0].title}
                      excerpt={blogPosts[0].excerpt}
                      slug={blogPosts[0].slug}
                      author={blogPosts[0].author}
                      publishedAt={blogPosts[0].published_at}
                      featured={true}
                    />
                  </div>
                )}
                
                <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                  {blogPosts.slice(1).map((post) => (
                    <div key={post.id} className="break-inside-avoid">
                      <BlogCard
                        id={post.id}
                        title={post.title}
                        excerpt={post.excerpt}
                        slug={post.slug}
                        author={post.author}
                        publishedAt={post.published_at}
                      />
                    </div>
                  ))}
                </div>
                
                {blogPosts.length === 0 && (
                  <div className="text-center py-20">
                    <p className="text-navy/70">Chưa có bài viết nào. Hãy quay lại sau nhé!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
