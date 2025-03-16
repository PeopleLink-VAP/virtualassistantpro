
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

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

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setIsLoading(true);
        
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .single();
          
        if (error) {
          console.error('Error fetching blog post:', error);
          setError('Không thể tìm thấy bài viết này');
          return;
        }
        
        setPost(data);
      } catch (error) {
        console.error('Failed to fetch blog post:', error);
        setError('Đã xảy ra lỗi khi tải bài viết');
      } finally {
        setIsLoading(false);
      }
    };
    
    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('vi-VN', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }).format(date);
  };
  
  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };
  
  return (
    <>
      {post && (
        <Helmet>
          <title>{post.title} - Virtual Assistant Pro</title>
          <meta name="description" content={post.excerpt} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={`https://virtualassistantpro.vn/blog/${post.slug}`} />
        </Helmet>
      )}
      
      <div className="min-h-screen bg-warmWhite">
        <Navbar />
        
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sunflower"></div>
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-navy mb-4">{error}</h2>
                <Link to="/blog" className="text-sunflower hover:underline flex items-center justify-center gap-2">
                  <ArrowLeft size={16} />
                  Quay lại blog
                </Link>
              </div>
            ) : post ? (
              <div className="max-w-3xl mx-auto">
                <Link to="/blog" className="inline-flex items-center text-navy hover:text-sunflower mb-6 transition-colors">
                  <ArrowLeft size={18} className="mr-2" />
                  Quay lại blog
                </Link>
                
                <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">{post.title}</h1>
                
                <div className="flex flex-wrap items-center gap-4 mb-8 text-navy/60 text-sm">
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {formatDate(post.published_at)}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    {estimateReadingTime(post.content)} phút đọc
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden mb-10 bg-navy/5">
                  <img 
                    src={post.featured_image || "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2000"} 
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                <div className="prose prose-lg max-w-none prose-headings:text-navy prose-p:text-navy/80 prose-strong:text-navy prose-a:text-sunflower">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-navy/70">Không tìm thấy bài viết</p>
                <Link to="/blog" className="text-sunflower hover:underline mt-4 inline-block">
                  Quay lại blog
                </Link>
              </div>
            )}
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;
