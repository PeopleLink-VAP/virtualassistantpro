
import { CalendarIcon, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  author: string;
  publishedAt: string;
  featured?: boolean;
}

const BlogCard = ({ title, excerpt, slug, author, publishedAt, featured = false }: BlogCardProps) => {
  const publishedDate = new Date(publishedAt);
  const formattedDate = new Intl.DateTimeFormat('vi-VN', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  }).format(publishedDate);

  return (
    <Link 
      to={`/blog/${slug}`}
      className="block group h-full"
    >
      <div className={`bg-white/60 backdrop-blur-lg rounded-xl navy-shadow transition-all h-full
        group-hover:bg-white/80 border border-white/30 ${featured ? 'lg:flex' : ''}`}>
        <div className={`${featured ? 'lg:w-2/5' : ''} relative rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none overflow-hidden ${featured ? 'h-full min-h-[200px]' : 'h-48'}`}>
          <img 
            src={`https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=500`} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-300"></div>
        </div>
        <div className={`p-6 flex flex-col justify-between h-full ${featured ? 'lg:w-3/5' : ''}`}>
          <div>
            {featured && (
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="inline-block bg-sunflower/20 text-navy text-xs font-semibold px-3 py-1 rounded-full mb-3"
              >
                Nổi Bật
              </motion.span>
            )}
            <h3 className="text-xl font-bold mb-2 text-navy group-hover:text-sunflower transition-colors duration-300">{title}</h3>
            <p className="text-navy/70 mb-4 line-clamp-3 group-hover:text-navy/90 transition-colors duration-300">{excerpt}</p>
          </div>
          
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-navy/10 group-hover:border-navy/20 transition-colors duration-300">
            <div className="flex items-center text-navy/50 text-sm group-hover:text-navy/70 transition-colors duration-300">
              <User size={14} className="mr-1" />
              <span>{author}</span>
              <span className="mx-2">•</span>
              <CalendarIcon size={14} className="mr-1" />
              <span>{formattedDate}</span>
            </div>
            
            <span 
              className="text-sm font-medium text-navy group-hover:text-sunflower transition-colors duration-300 relative overflow-hidden"
            >
              Đọc tiếp
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-sunflower group-hover:w-full transition-all duration-300"></span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
