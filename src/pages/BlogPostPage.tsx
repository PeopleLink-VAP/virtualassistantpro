
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import { ArrowLeft, Calendar, User, Loader2, Clock, Heart } from 'lucide-react';
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

  // Tiny paperclip decoration component
  const Paperclip = () => (
    <div className="absolute -top-3 -right-3 w-8 h-16 bg-[#C8C8C9] rounded-sm rotate-45 z-20"></div>
  );

  return (
    <>
      <Helmet>
        <title>{post?.title || 'Đang tải...'} - Virtual Assistant Pro</title>
        <meta name="description" content={post?.excerpt || 'Bài viết từ Virtual Assistant Pro'} />
      </Helmet>
      
      <div className="min-h-screen bg-warmWhite relative overflow-hidden">
        <Navbar />
        
        {/* Subtle background decorations */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-5 w-32 h-32 rounded-full bg-sunflower/5 animate-float"></div>
          <div className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-sunflower/10 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 left-5 w-16 h-16 rounded-full bg-navy/5 animate-float" style={{ animationDelay: '2s' }}></div>
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
              <motion.div 
                initial={{ opacity: 0, y: 20, rotate: -1 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto paper-note rounded-lg animate-slight-rotate overflow-hidden relative"
              >
                {/* Decorative paperclip in corner */}
                <Paperclip />
                
                <div className="paper-note-content">
                  {/* Featured Image */}
                  {post.featured_image && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="rounded-lg overflow-hidden mb-8 shadow-md border border-navy/10 relative"
                    >
                      <img 
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-[300px] md:h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#FEF7CD]/50 to-transparent"></div>
                    </motion.div>
                  )}
                  
                  {/* Post Header */}
                  <div className="mb-8">
                    <motion.h1 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.7 }}
                      className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-navy handwritten-heading relative"
                    >
                      {post.title}
                      <div className="h-1 w-full bg-sunflower/50 mt-2 animate-pen-write"></div>
                    </motion.h1>
                    
                    <div className="flex flex-wrap items-center text-navy/60 mb-6 italic">
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
                    
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="text-xl text-navy/80 italic border-l-2 border-sunflower pl-4 py-1"
                    >
                      {post.excerpt}
                    </motion.p>
                  </div>
                  
                  {/* Post Content */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="prose prose-lg max-w-none prose-headings:text-navy prose-p:text-navy/80"
                  >
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                  </motion.div>
                  
                  {/* Signature footer */}
                  <div className="paper-note-footer">
                    <p className="flex items-center justify-end">
                      <span>Với yêu thương,</span>
                      <Heart className="w-4 h-4 mx-2 text-sunflower fill-sunflower" />
                    </p>
                    <p className="text-xl font-bold text-navy mt-2">Duyen</p>
                  </div>
                </div>
              </motion.div>
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
