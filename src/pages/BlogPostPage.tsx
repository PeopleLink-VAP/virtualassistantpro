
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import { ArrowLeft, Calendar, User, Loader2, Clock, Printer, BookOpen } from 'lucide-react';
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
    
  const handlePrint = () => {
    window.print();
  };
  
  const activateReaderMode = () => {
    // This is a simplified approach - actual reader mode depends on browser support
    document.body.classList.toggle('reader-mode');
  };

  return (
    <>
      <Helmet>
        <title>{post?.title || 'Đang tải...'} - Virtual Assistant Pro</title>
        <meta name="description" content={post?.excerpt || 'Bài viết từ Virtual Assistant Pro'} />
      </Helmet>
      
      <div className="min-h-screen bg-warmWhite relative overflow-hidden">
        {/* Navigation - hidden in print view */}
        <div className="print:hidden">
          <Navbar />
        </div>
        
        <div className="relative z-10 pt-32 pb-16 print:pt-8 print:pb-8">
          {/* Back button - hidden in print view */}
          <div className="container mx-auto px-4 mb-6 print:hidden">
            <Link to="/blog" className="inline-flex items-center text-navy/70 hover:text-sunflower transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại Blog
            </Link>
            
            {/* Print and Reader mode buttons */}
            <div className="float-right space-x-2">
              <button 
                onClick={handlePrint}
                className="inline-flex items-center text-navy/70 hover:text-sunflower transition-colors px-3 py-1 rounded-md border border-navy/20"
              >
                <Printer className="w-4 h-4 mr-2" />
                In bài viết
              </button>
              <button 
                onClick={activateReaderMode}
                className="inline-flex items-center text-navy/70 hover:text-sunflower transition-colors px-3 py-1 rounded-md border border-navy/20"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Chế độ đọc
              </button>
            </div>
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
                  className="paper-note"
                >
                  {/* Paper Note Container */}
                  <div className="bg-[#FFFDF6] p-8 rounded-md shadow-md border border-gray-200 relative overflow-hidden print:shadow-none print:border-none">
                    {/* Paper texture overlay */}
                    <div className="absolute inset-0 bg-[url('/lovable-uploads/e74bad6a-525f-42b8-84c6-c59308b94dea.png')] opacity-5 pointer-events-none"></div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-sunflower/10 rounded-br-full -z-1"></div>
                    <div className="absolute top-4 right-4 w-20 h-20 bg-leafGreen/5 rounded-full -z-1"></div>
                    
                    {/* Small sunflower logo */}
                    <div className="flex justify-center mb-4 print:mb-2">
                      <img 
                        src="/images/sunflower.png" 
                        alt="Virtual Assistant Pro" 
                        className="h-10 w-10 print:h-8 print:w-8"
                      />
                    </div>
                    
                    {/* Paper tape effect at the top */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-sunflower/30 rounded print:hidden"></div>
                    
                    {/* Featured Image */}
                    {post.featured_image && (
                      <div className="rounded-xl overflow-hidden mb-8 shadow-sm max-h-[400px] print:max-h-[300px]">
                        <img 
                          src={post.featured_image}
                          alt={post.title}
                          className="w-full object-cover"
                        />
                      </div>
                    )}
                    
                    {/* Post Header */}
                    <div className="mb-8 print:mb-6">
                      <h1 className="text-3xl md:text-4xl font-condensed font-bold mb-4 text-navy text-center print:text-2xl">{post.title}</h1>
                      
                      <div className="flex flex-wrap items-center justify-center text-navy/60 mb-6 print:mb-4 text-sm print:text-xs">
                        <div className="flex items-center mx-3 mb-2">
                          <User className="w-4 h-4 mr-2" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center mx-3 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center mx-3 mb-2">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{estimatedReadingTime} phút đọc</span>
                        </div>
                      </div>
                      
                      <p className="text-xl text-navy/80 italic text-center border-b border-t border-navy/10 py-4 px-6 mx-auto max-w-2xl print:text-base print:py-3">{post.excerpt}</p>
                    </div>
                    
                    {/* Post Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-navy prose-headings:font-condensed prose-p:text-navy/80 mb-8 prose-img:rounded-md prose-img:shadow-sm print:prose-base print:prose-p:leading-relaxed">
                      <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                    
                    {/* Author signature */}
                    <div className="mt-12 text-right italic text-navy/70 border-t border-navy/10 pt-4 print:mt-8">
                      <p className="mb-1">Chia sẻ từ đội ngũ Virtual Assistant Pro,</p>
                      <p className="font-bold">{post.author}</p>
                    </div>
                    
                    {/* Paper tear effect at the bottom */}
                    <div className="relative h-4 mt-10 overflow-hidden print:hidden">
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#FFFDF6]" style={{ 
                        clipPath: 'polygon(0% 0%, 5% 60%, 10% 0%, 15% 60%, 20% 0%, 25% 60%, 30% 0%, 35% 60%, 40% 0%, 45% 60%, 50% 0%, 55% 60%, 60% 0%, 65% 60%, 70% 0%, 75% 60%, 80% 0%, 85% 60%, 90% 0%, 95% 60%, 100% 0%, 100% 100%, 0% 100%)'
                      }}></div>
                    </div>
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
        
        {/* Footer - hidden in print view */}
        <div className="print:hidden">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
