
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import { Loader2, BookOpen, TrendingUp, Users, Zap, Filter, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type BlogPost = Tables<'blog_posts'>;

// Category configuration for creative professionals
const CATEGORIES = {
  'Skills Development': {
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    icon: TrendingUp,
    description: 'Enhance your professional capabilities'
  },
  'Business Growth': {
    color: 'bg-green-100 text-green-800 border-green-200', 
    icon: BookOpen,
    description: 'Scale your freelance business'
  },
  'Client Relations': {
    color: 'bg-purple-100 text-purple-800 border-purple-200',
    icon: Users,
    description: 'Build stronger client relationships'
  },
  'Tech & Tools': {
    color: 'bg-orange-100 text-orange-800 border-orange-200',
    icon: Zap,
    description: 'Latest tools and technologies'
  },
  'General': {
    color: 'bg-gray-100 text-gray-800 border-gray-200',
    icon: BookOpen,
    description: 'General insights and tips'
  }
};

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        
        // Fetch all posts
        const { data: postsData, error: postsError } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('status', 'published')
          .order('published_at', { ascending: false });
        
        if (postsError) throw postsError;
        
        // Fetch unique categories
        const { data: categoriesData, error: categoriesError } = await supabase
          .from('blog_posts')
          .select('category')
          .eq('status', 'published')
          .not('category', 'is', null);
        
        if (categoriesError) throw categoriesError;
        
        if (postsData && postsData.length > 0) {
          setPosts(postsData);
          // Set the most recent post as featured
          setFeaturedPost(postsData[0]);
        }
        
        // Extract unique categories
        if (categoriesData) {
          const uniqueCategories = [...new Set(categoriesData.map(item => item.category).filter(Boolean))] as string[];
          setAvailableCategories(uniqueCategories);
        }
        
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Unable to load blog posts. Please try again later.');
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
          <div className="container mx-auto px-4 text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-navy bg-gradient-to-r from-navy to-navy/80 bg-clip-text">Blog & Insights</h1>
            <p className="text-xl text-navy/70 max-w-4xl mx-auto leading-relaxed">
              Mở ra những góc nhìn mới về nghề VA nói riêng và cộng đồng Freelancer Việt Nam nói chung với những bài viết chất lượng và thực tế.
            </p>
          </div>

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
              {/* Hero Featured Article Section */}
              {featuredPost && (
                <div className="mb-20">
                  <div className="relative bg-gradient-to-r from-navy to-navy/90 rounded-3xl shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative lg:flex lg:items-center lg:min-h-[500px]">
                      {/* Featured Image */}
                      <div className="lg:w-3/5 relative">
                        <img 
                          src={featuredPost.featured_image || 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200'}
                          alt={featuredPost.title}
                          className="w-full h-80 lg:h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-navy via-navy/50 to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <Badge className="bg-sunflower text-navy border-0 font-bold px-4 py-2">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Featured Story
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="lg:w-2/5 p-8 lg:p-12 text-white relative z-10">
                        <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                          {featuredPost.title}
                        </h1>
                        <p className="text-white/80 text-lg mb-8 line-clamp-4">
                          {featuredPost.excerpt}
                        </p>
                        
                        {/* Meta info */}
                        <div className="flex items-center text-white/60 text-sm mb-8">
                          <User className="w-4 h-4 mr-2" />
                          <span>{featuredPost.author}</span>
                          <span className="mx-3">•</span>
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>
                            {featuredPost.published_at ? new Intl.DateTimeFormat('vi-VN', { 
                              month: 'long', 
                              year: 'numeric' 
                            }).format(new Date(featuredPost.published_at)) : ''}
                          </span>
                        </div>
                        
                        {/* Read More Button */}
                        <Link 
                          to={`/blog/${featuredPost.slug}`}
                          className="inline-flex items-center bg-sunflower hover:bg-sunflower/90 text-navy font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          <BookOpen className="w-5 h-5 mr-2" />
                          Đọc thêm
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Category Filter Navigation */}
              <div className="mb-12">
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  <Button 
                    variant={selectedCategory === 'All' ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory('All')}
                    className={`rounded-full px-6 py-2 transition-all duration-300 ${
                      selectedCategory === 'All' 
                        ? 'bg-navy text-white hover:bg-navy/90' 
                        : 'border-navy/20 text-navy hover:border-navy hover:bg-navy/5'
                    }`}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Tất cả ({posts.length})
                  </Button>
                  {availableCategories.map((category) => {
                    const config = CATEGORIES[category as keyof typeof CATEGORIES] || CATEGORIES['General'];
                    const Icon = config.icon;
                    const isActive = selectedCategory === category;
                    const categoryPostCount = posts.filter(post => (post.category || 'General') === category).length;
                    return (
                      <Button 
                        key={category}
                        variant={isActive ? 'default' : 'outline'}
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full px-4 py-2 transition-all duration-300 ${
                          isActive 
                            ? 'bg-navy text-white hover:bg-navy/90' 
                            : 'border-navy/20 text-navy hover:border-navy hover:bg-navy/5'
                        }`}
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {category} ({categoryPostCount})
                      </Button>
                    );
                  })}
                </div>
              </div>
              
              {/* Magazine Grid Layout - Filter and Display Posts */}
              {(() => {
                // Get filtered posts based on selected category
                const filteredPosts = selectedCategory === 'All' 
                  ? posts.filter(post => post.id !== featuredPost?.id)
                  : posts.filter(post => 
                      (post.category || 'General') === selectedCategory && 
                      post.id !== featuredPost?.id
                    );
                
                if (filteredPosts.length === 0) {
                  return (
                    <div className="text-center py-16">
                      <BookOpen className="w-16 h-16 mx-auto text-navy/30 mb-4" />
                      <h3 className="text-xl font-semibold text-navy mb-2">
                        Không tìm thấy bài viết{selectedCategory !== 'All' && ` trong danh mục ${selectedCategory}`}
                      </h3>
                      <p className="text-navy/60">
                        {selectedCategory === 'All' 
                          ? 'Hãy quay lại sau để xem nội dung mới!' 
                          : 'Thử chọn danh mục khác hoặc xem tất cả bài viết.'}
                      </p>
                    </div>
                  );
                }
                
                // Group posts by category for display
                if (selectedCategory === 'All') {
                  // Show all categories with posts
                  const categoriesWithPosts = availableCategories.filter(category => 
                    filteredPosts.some(post => (post.category || 'General') === category)
                  );
                  
                  return categoriesWithPosts.map(categoryName => {
                    const categoryPosts = filteredPosts.filter(post => 
                      (post.category || 'General') === categoryName
                    );
                    const config = CATEGORIES[categoryName as keyof typeof CATEGORIES] || CATEGORIES['General'];
                    const Icon = config.icon;
                    
                    return (
                      <div key={categoryName} className="mb-16">
                        {/* Category Header */}
                        <div className="flex items-center mb-8">
                          <div className="flex items-center gap-3">
                            <div className={`p-3 rounded-xl ${config.color.split(' ')[0]}`}>
                              <Icon className={`w-6 h-6 ${config.color.split(' ')[1]}`} />
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold text-navy">{categoryName}</h2>
                              <p className="text-navy/60 text-sm">{config.description}</p>
                            </div>
                          </div>
                          <div className="flex-1 ml-6 h-px bg-gradient-to-r from-navy/20 to-transparent"></div>
                        </div>
                        
                        {/* Articles Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {categoryPosts.map((post, index) => {
                            const isLarge = index === 0 && categoryPosts.length > 2;
                            return (
                              <article 
                                key={post.id} 
                                className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 ${
                                  isLarge ? 'md:col-span-2 lg:row-span-2' : ''
                                }`}
                              >
                                <Link to={`/blog/${post.slug}`} className="block">
                                  {/* Article Image */}
                                  <div className="relative overflow-hidden">
                                    <img 
                                      src={post.featured_image || 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800'}
                                      alt={post.title}
                                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                                        isLarge ? 'h-64 lg:h-80' : 'h-48'
                                      }`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                      <Badge className={`${config.color} border font-medium`}>
                                        <Icon className="w-3 h-3 mr-1" />
                                        {categoryName}
                                      </Badge>
                                    </div>
                                    
                                    {/* Reading Time */}
                                    <div className="absolute top-4 right-4">
                                      <Badge variant="secondary" className="bg-white/90 text-navy border-0">
                                        5 phút đọc
                                      </Badge>
                                    </div>
                                  </div>
                                  
                                  {/* Article Content */}
                                  <div className={`p-6 ${isLarge ? 'lg:p-8' : ''}`}>
                                    <h3 className={`font-bold text-navy mb-3 group-hover:text-sunflower transition-colors duration-300 line-clamp-2 ${
                                      isLarge ? 'text-xl lg:text-2xl' : 'text-lg'
                                    }`}>
                                      {post.title}
                                    </h3>
                                    <p className={`text-navy/70 mb-4 line-clamp-3 ${
                                      isLarge ? 'text-base lg:text-lg' : 'text-sm'
                                    }`}>
                                      {post.excerpt}
                                    </p>
                                    
                                    {/* Meta info */}
                                    <div className="flex items-center justify-between text-navy/50 text-xs">
                                      <div className="flex items-center">
                                        <User className="w-3 h-3 mr-1" />
                                        <span>{post.author}</span>
                                      </div>
                                      <div className="flex items-center">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        <span>
                                          {post.published_at ? new Intl.DateTimeFormat('en-US', { 
                                            month: 'short', 
                                            day: 'numeric' 
                                          }).format(new Date(post.published_at)) : ''}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </article>
                            );
                          })}
                        </div>
                      </div>
                    );
                  });
                } else {
                  // Show specific category
                  const config = CATEGORIES[selectedCategory as keyof typeof CATEGORIES] || CATEGORIES['General'];
                  const Icon = config.icon;
                  
                  return (
                    <div className="mb-16">
                      {/* Category Header */}
                      <div className="flex items-center mb-8">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-xl ${config.color.split(' ')[0]}`}>
                            <Icon className={`w-6 h-6 ${config.color.split(' ')[1]}`} />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-navy">{selectedCategory}</h2>
                            <p className="text-navy/60 text-sm">{config.description}</p>
                          </div>
                        </div>
                        <div className="flex-1 ml-6 h-px bg-gradient-to-r from-navy/20 to-transparent"></div>
                      </div>
                      
                      {/* Articles Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPosts.map((post, index) => {
                          const isLarge = index === 0 && filteredPosts.length > 2;
                          return (
                            <article 
                              key={post.id} 
                              className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 ${
                                isLarge ? 'md:col-span-2 lg:row-span-2' : ''
                              }`}
                            >
                              <Link to={`/blog/${post.slug}`} className="block">
                                {/* Article Image */}
                                <div className="relative overflow-hidden">
                                  <img 
                                    src={post.featured_image || 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800'}
                                    alt={post.title}
                                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                                      isLarge ? 'h-64 lg:h-80' : 'h-48'
                                    }`}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                  
                                  {/* Category Badge */}
                                  <div className="absolute top-4 left-4">
                                    <Badge className={`${config.color} border font-medium`}>
                                      <Icon className="w-3 h-3 mr-1" />
                                      {selectedCategory}
                                    </Badge>
                                  </div>
                                  
                                  {/* Reading Time */}
                                  <div className="absolute top-4 right-4">
                                    <Badge variant="secondary" className="bg-white/90 text-navy border-0">
                                      5 phút đọc
                                    </Badge>
                                  </div>
                                </div>
                                
                                {/* Article Content */}
                                <div className={`p-6 ${isLarge ? 'lg:p-8' : ''}`}>
                                  <h3 className={`font-bold text-navy mb-3 group-hover:text-sunflower transition-colors duration-300 line-clamp-2 ${
                                    isLarge ? 'text-xl lg:text-2xl' : 'text-lg'
                                  }`}>
                                    {post.title}
                                  </h3>
                                  <p className={`text-navy/70 mb-4 line-clamp-3 ${
                                    isLarge ? 'text-base lg:text-lg' : 'text-sm'
                                  }`}>
                                    {post.excerpt}
                                  </p>
                                  
                                  {/* Meta info */}
                                  <div className="flex items-center justify-between text-navy/50 text-xs">
                                    <div className="flex items-center">
                                      <User className="w-3 h-3 mr-1" />
                                      <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center">
                                      <Calendar className="w-3 h-3 mr-1" />
                                      <span>
                                        {post.published_at ? new Intl.DateTimeFormat('en-US', { 
                                          month: 'short', 
                                          day: 'numeric' 
                                        }).format(new Date(post.published_at)) : ''}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </article>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              })()}
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
