
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
    <div className={`bg-white/70 backdrop-blur-sm rounded-xl navy-shadow transition-all hover:shadow-lg ${featured ? 'lg:flex' : ''}`}>
      <div className={`${featured ? 'lg:w-2/5' : ''} relative rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none overflow-hidden h-48`}>
        <img 
          src={`https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=500`} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`p-6 ${featured ? 'lg:w-3/5' : ''}`}>
        {featured && <span className="inline-block bg-sunflower/20 text-navy text-xs font-semibold px-3 py-1 rounded-full mb-3">Nổi Bật</span>}
        <h3 className="text-xl font-bold mb-2 text-navy">{title}</h3>
        <p className="text-navy/70 mb-4 line-clamp-2">{excerpt}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-navy/50 text-sm">
            <User size={14} className="mr-1" />
            <span>{author}</span>
            <span className="mx-2">•</span>
            <CalendarIcon size={14} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
          
          <Link 
            to={`/blog/${slug}`}
            className="text-sm font-medium text-navy hover:text-sunflower transition-colors"
          >
            Đọc tiếp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
