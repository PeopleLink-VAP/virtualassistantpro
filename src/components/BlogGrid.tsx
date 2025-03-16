
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { Tables } from '@/integrations/supabase/types';

// Define a type for BlogPost based on our Supabase schema
type BlogPost = Tables<'blog_posts'>;

interface BlogGridProps {
  posts: BlogPost[];
  featuredPost?: BlogPost | null;
}

const BlogGrid = ({ posts, featuredPost }: BlogGridProps) => {
  // Use a grid layout that will automatically create a responsive masonry-like effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Creates a staggered effect for children
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center">
            <span className="mr-2">✨</span>
            Bài Viết Nổi Bật
          </h2>
          <BlogCard 
            id={featuredPost.id}
            title={featuredPost.title}
            excerpt={featuredPost.excerpt}
            slug={featuredPost.slug}
            author={featuredPost.author}
            publishedAt={featuredPost.published_at || ''}
            featured={true}
            featuredImage={featuredPost.featured_image}
          />
        </div>
      )}
      
      {/* Recent Posts */}
      <h2 className="text-2xl font-bold text-navy mb-6 flex items-center">
        <span className="mr-2">📚</span>
        Bài Viết Gần Đây
      </h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {posts.filter(post => !featuredPost || post.id !== featuredPost.id).map((post, index) => (
          <BlogCard
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            slug={post.slug}
            author={post.author}
            publishedAt={post.published_at || ''}
            featuredImage={post.featured_image}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BlogGrid;
