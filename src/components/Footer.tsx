
import { Sun, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-warmWhite py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="text-sunflower w-8 h-8" />
              <span className="font-bold text-xl">VAP-Hub</span>
            </div>
            <p className="text-warmWhite/80 mb-6">
              Đào tạo và phát triển kỹ năng chuyên nghiệp cho các Trợ Lý Ảo tại Việt Nam.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-warmWhite/10 rounded-full flex items-center justify-center hover:bg-sunflower hover:text-navy transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-warmWhite/10 rounded-full flex items-center justify-center hover:bg-sunflower hover:text-navy transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-warmWhite/10 rounded-full flex items-center justify-center hover:bg-sunflower hover:text-navy transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-warmWhite/10 rounded-full flex items-center justify-center hover:bg-sunflower hover:text-navy transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Khóa Học</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Kỹ Năng Hành Chính</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Phát Triển Nghề Nghiệp</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Quản Lý Khách Hàng</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Điều Phối Dự Án</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Giải Pháp Cá Nhân Hóa</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Giới Thiệu</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-warmWhite/80 hover:text-sunflower transition-colors">Về Chúng Tôi</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Đội Ngũ Đào Tạo</a></li>
              <li><a href="#training" className="text-warmWhite/80 hover:text-sunflower transition-colors">Chương Trình Đào Tạo</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Cơ Hội Nghề Nghiệp</a></li>
              <li><a href="#contact" className="text-warmWhite/80 hover:text-sunflower transition-colors">Liên Hệ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Tài Nguyên</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Blog</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Tài Liệu Học Tập</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Tài Nguyên VA</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Câu Hỏi Thường Gặp</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Chính Sách Bảo Mật</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-warmWhite/20 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-warmWhite/70 text-sm">
            © 2023 Virtual Assistant Pro. Tất cả quyền được bảo lưu.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
