
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
        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={post?.title || 'Virtual Assistant Pro Blog'} />
        <meta property="og:description" content={post?.excerpt || 'Bài viết từ Virtual Assistant Pro'} />
        <meta property="og:image" content={post?.featured_image || '/images/sunflower.png'} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content={post?.title || 'Virtual Assistant Pro Blog'} />
        <meta property="twitter:description" content={post?.excerpt || 'Bài viết từ Virtual Assistant Pro'} />
        <meta property="twitter:image" content={post?.featured_image || '/images/sunflower.png'} />

        {/* JSON-LD Structured Data */}
        {post && (
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": "${post.title}",
                "description": "${post.excerpt}",
                "image": "${post.featured_image || '/images/sunflower.png'}",
                "author": {
                  "@type": "Person",
                  "name": "${post.author}"
                },
                "datePublished": "${post.published_at}",
                "dateModified": "${post.published_at}",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "${window.location.href}"
                }
              }
            `}
          </script>
        )}
      </Helmet>
      
      <div className="min-h-screen bg-warmWhite relative overflow-hidden bg-[url('/images/paper-texture.svg')] bg-repeat bg-opacity-10">
        {/* Navigation - hidden in print view */}
        <div className="print:hidden">
          <Navbar />
        </div>
        
        <div className="relative z-10 pt-32 pb-16">
          {/* Back button - hidden in print view */}
          <div className="w-full px-4 mb-6 md:max-w-[900px] md:mx-auto">
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
            <div className="w-full px-4 md:max-w-[900px] md:mx-auto">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className=""
                >
                  <div className="relative overflow-hidden">

                    
                    {/* Featured Image */}
                    {post.featured_image && (
                      <div className="rounded-xl overflow-hidden mb-8 shadow-sm max-h-[400px]">
                        <img 
                          src={post.featured_image}
                          alt={post.title}
                          className="w-full object-cover"
                        />
                      </div>
                    )}
                    
                    {/* Post Header */}
                    <div className="mb-8">
                      <h1 className="text-3xl md:text-4xl font-condensed font-bold mb-4 text-navy text-center">{post.title}</h1>
                      
                      <div className="flex flex-wrap items-center justify-center text-navy/60 mb-6 text-sm">
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
                      
                      <p className="text-xl text-navy/80 italic text-center border-b border-t border-navy/10 py-4 px-6 mx-auto max-w-2xl">{post.excerpt}</p>
                    </div>
                    
                    {/* Post Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-navy prose-headings:font-condensed prose-p:text-navy/80 mb-8 prose-img:rounded-md prose-img:shadow-sm">
                      <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                    
                    {/* Author signature */}
                    <div className="mt-12 text-right italic text-navy/70 border-t border-navy/10 pt-4">
                      <p className="mb-1">Chia sẻ từ đội ngũ Virtual Assistant Pro,</p>
                      <p className="font-bold">{post.author}</p>
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
