
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogGrid from '@/components/BlogGrid';
import BlogHero from '@/components/BlogHero';
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
        
        {/* Blog Hero Section */}
        <BlogHero />

        {/* Blog Content */}
        <div className="container mx-auto px-4 py-12">
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
            <>
              {/* Featured Article Section */}
              {featuredPost && (
                <div className="mb-16">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="md:flex">
                      {/* Featured Image */}
                      <div className="md:w-2/5 relative">
                        <img 
                          src={featuredPost.featured_image || 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800'}
                          alt={featuredPost.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-sunflower text-navy text-xs font-bold px-3 py-1 rounded-full">
                            Nổi Bật
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="md:w-3/5 p-8 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-navy mb-4 leading-tight">
                          {featuredPost.title}
                        </h2>
                        <p className="text-navy/70 text-lg mb-6 line-clamp-3">
                          {featuredPost.excerpt}
                        </p>
                        
                        {/* Meta info */}
                        <div className="flex items-center text-navy/50 text-sm mb-6">
                          <span>{featuredPost.author}</span>
                          <span className="mx-2">•</span>
                          <span>
                            {featuredPost.published_at ? new Intl.DateTimeFormat('vi-VN', { 
                              month: 'long', 
                              year: 'numeric' 
                            }).format(new Date(featuredPost.published_at)) : ''}
                          </span>
                        </div>
                        
                        {/* Read More Button */}
                        <div className="text-center">
                          <Link 
                            to={`/blog/${featuredPost.slug}`}
                            className="inline-block bg-sunflower hover:bg-sunflower/90 text-navy font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                          >
                            Đọc Thêm
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Articles Grid - Masonry Style */}
              {posts.filter(post => post.id !== featuredPost?.id).length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-8 text-center">
                    Bài Viết Gần Đây
                  </h2>
                  
                  <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {posts.filter(post => post.id !== featuredPost?.id).map((post) => (
                      <div key={post.id} className="break-inside-avoid mb-6">
                        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group">
                          {/* Article Image */}
                          <div className="relative overflow-hidden">
                            <img 
                              src={post.featured_image || 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600'}
                              alt={post.title}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-300"></div>
                          </div>
                          
                          {/* Article Content */}
                          <div className="p-6">
                            <h3 className="font-bold text-lg text-navy mb-3 group-hover:text-sunflower transition-colors duration-300 line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-navy/70 text-sm mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                            
                            {/* Meta info */}
                            <div className="flex items-center justify-between text-navy/50 text-xs mb-4">
                              <span>{post.author}</span>
                              <span>
                                {post.published_at ? new Intl.DateTimeFormat('vi-VN', { 
                                  month: 'long', 
                                  year: 'numeric' 
                                }).format(new Date(post.published_at)) : ''}
                              </span>
                            </div>
                            
                            {/* Read More Button */}
                            <div className="text-center">
                              <Link 
                                to={`/blog/${post.slug}`}
                                className="inline-block bg-navy/5 hover:bg-sunflower/20 text-navy hover:text-sunflower font-medium px-6 py-2 rounded-full text-sm transition-all duration-300"
                              >
                                Đọc Thêm
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
