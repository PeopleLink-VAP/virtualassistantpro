
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import { ArrowLeft, Calendar, User, Loader2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

type BlogPost = Tables<'blog_posts'>;

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        
        if (!slug) {
          throw new Error('Không tìm thấy bài viết');
        }
        
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .single();
        
        if (error) throw error;
        
        setPost(data);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Không thể tải bài viết. Vui lòng thử lại sau.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const formattedDate = post?.published_at 
    ? new Intl.DateTimeFormat('vi-VN', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      }).format(new Date(post.published_at))
    : '';

  const estimatedReadingTime = post?.content 
    ? Math.ceil(post.content.split(' ').length / 200) // Assuming average reading speed of 200 words per minute
    : 0;

  return (
    <>
      <Helmet>
        <title>{post?.title || 'Đang tải...'} - Virtual Assistant Pro</title>
        <meta name="description" content={post?.excerpt || 'Bài viết từ Virtual Assistant Pro'} />
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

        <div className="relative z-10 pt-32 pb-16">
          {/* Back button */}
          <div className="container mx-auto px-4 mb-6">
            <Link to="/blog" className="inline-flex items-center text-navy/70 hover:text-sunflower transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại Blog
            </Link>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-sunflower" />
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-500">{error}</p>
              <Link to="/blog" className="mt-4 inline-block btn-primary">
                Quay lại Blog
              </Link>
            </div>
          ) : post ? (
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Featured Image */}
                  {post.featured_image && (
                    <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
                      <img 
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-[400px] object-cover"
                      />
                    </div>
                  )}
                  
                  {/* Post Header */}
                  <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-navy">{post.title}</h1>
                    
                    <div className="flex flex-wrap items-center text-navy/60 mb-6">
                      <div className="flex items-center mr-6 mb-2">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center mr-6 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{formattedDate}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{estimatedReadingTime} phút đọc</span>
                      </div>
                    </div>
                    
                    <p className="text-xl text-navy/80 italic">{post.excerpt}</p>
                  </div>
                  
                  {/* Post Content */}
                  <div className="prose prose-lg max-w-none prose-headings:text-navy prose-p:text-navy/80 mb-8">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                  </div>
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-navy/70">Không tìm thấy bài viết.</p>
              <Link to="/blog" className="mt-4 inline-block btn-primary">
                Quay lại Blog
              </Link>
            </div>
          )}
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;
