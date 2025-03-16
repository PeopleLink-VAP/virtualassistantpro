
import { Sun, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy text-warmWhite py-12 relative overflow-hidden">
      {/* Decorative sunflower elements */}
      <div className="absolute top-0 right-20 w-36 h-36 bg-sunflower/10 rounded-full animate-spin-slow"></div>
      <div className="absolute -bottom-20 left-20 w-48 h-48 bg-sunflower/5 rounded-full animate-spin-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Sun className="text-sunflower w-8 h-8" />
              <span className="font-bold text-xl">VAP-Hub</span>
            </div>
            <p className="text-warmWhite/80 mb-6">
              Đào tạo và phát triển kỹ năng chuyên nghiệp cho các Trợ Lý Ảo tại Việt Nam.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-warmWhite/10 rounded-full flex items-center justify-center hover:bg-sunflower hover:text-navy transition-colors hover:scale-110">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-warmWhite/10 rounded-full flex items-center justify-center hover:bg-sunflower hover:text-navy transition-colors hover:scale-110">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-warmWhite/10 rounded-full flex items-center justify-center hover:bg-sunflower hover:text-navy transition-colors hover:scale-110">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-warmWhite/10 rounded-full flex items-center justify-center hover:bg-sunflower hover:text-navy transition-colors hover:scale-110">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-sunflower rounded-full"></span>
              Khóa Học
            </h4>
            <ul className="space-y-2">
              <li><Link to="/courses-view" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Kỹ Năng Hành Chính</Link></li>
              <li><Link to="/courses-view" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Phát Triển Nghề Nghiệp</Link></li>
              <li><Link to="/courses-view" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Quản Lý Khách Hàng</Link></li>
              <li><Link to="/courses-view" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Điều Phối Dự Án</Link></li>
              <li><Link to="/courses-view" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Giải Pháp Cá Nhân Hóa</Link></li>
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-sunflower rounded-full"></span>
              Giới Thiệu
            </h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Về Chúng Tôi</Link></li>
              <li><Link to="/team" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Đội Ngũ Đào Tạo</Link></li>
              <li><Link to="/training-program" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Chương Trình Đào Tạo</Link></li>
              <li><Link to="/career-opportunities" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Cơ Hội Nghề Nghiệp</Link></li>
              <li><Link to="/contact" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Liên Hệ</Link></li>
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-sunflower rounded-full"></span>
              Tài Nguyên
            </h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Blog</Link></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Tài Liệu Học Tập</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Tài Nguyên VA</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Câu Hỏi Thường Gặp</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Chính Sách Bảo Mật</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-warmWhite/20 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-warmWhite/70 text-sm animate-fade-in" style={{ animationDelay: "0.4s" }}>
            © 2025 Virtual Assistant Pro. Tất cả quyền được bảo lưu.
          </div>
          
          {/* Animated sunflower icon */}
          <div className="animate-float">
            <img src="/lovable-uploads/057c4faa-08ca-4b67-88a8-bfc126576f7e.png" alt="Sunflower" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
