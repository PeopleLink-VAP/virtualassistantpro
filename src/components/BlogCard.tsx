
import { CalendarIcon, User } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      className="block group"
    >
      <div className={`bg-white/70 backdrop-blur-sm rounded-xl navy-shadow transition-all group-hover:shadow-lg group-hover:-translate-y-1 ${featured ? 'lg:flex' : ''}`}>
        <div className={`${featured ? 'lg:w-2/5' : ''} relative rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none overflow-hidden ${featured ? 'h-full min-h-[200px]' : 'h-48'}`}>
          <img 
            src={`https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=500`} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className={`p-6 flex flex-col justify-between h-full ${featured ? 'lg:w-3/5' : ''}`}>
          <div>
            {featured && <span className="inline-block bg-sunflower/20 text-navy text-xs font-semibold px-3 py-1 rounded-full mb-3">Nổi Bật</span>}
            <h3 className="text-xl font-bold mb-2 text-navy group-hover:text-sunflower transition-colors">{title}</h3>
            <p className="text-navy/70 mb-4 line-clamp-3">{excerpt}</p>
          </div>
          
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-navy/10">
            <div className="flex items-center text-navy/50 text-sm">
              <User size={14} className="mr-1" />
              <span>{author}</span>
              <span className="mx-2">•</span>
              <CalendarIcon size={14} className="mr-1" />
              <span>{formattedDate}</span>
            </div>
            
            <span 
              className="text-sm font-medium text-navy group-hover:text-sunflower transition-colors"
            >
              Đọc tiếp
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
