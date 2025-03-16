
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User, ChevronDown, Home, Users, BookOpen, Briefcase, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-warmWhite/70 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        {/* Decorative sunflower elements */}
        <div className="absolute -top-10 right-10 w-16 h-16 bg-sunflower/20 rounded-full animate-spin-slow opacity-70"></div>
        <div className="absolute -bottom-10 left-20 w-12 h-12 bg-sunflower/30 rounded-full animate-spin-slow opacity-60"></div>
        
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
            {/* Sunflower icon */}
            <img src="/lovable-uploads/057c4faa-08ca-4b67-88a8-bfc126576f7e.png" alt="Sunflower" className="w-8 h-8" />
            <span className="font-bold text-xl text-navy">Virtual Assistant PRO</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-navy hover:text-sunflower transition-colors bg-transparent flex items-center gap-1">
                    <Users size={18} />
                    Về Chúng Tôi
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white/90 backdrop-blur-sm p-4 rounded-lg w-72 navy-shadow">
                    <ul className="space-y-2">
                      <li>
                        <Link to="/about" className="block p-2 rounded hover:bg-sunflower/10 text-navy flex items-center gap-2">
                          <Home size={18} />
                          Giới Thiệu
                        </Link>
                      </li>
                      <li>
                        <Link to="/team" className="block p-2 rounded hover:bg-sunflower/10 text-navy flex items-center gap-2">
                          <Users size={18} />
                          Đội Ngũ Đào Tạo
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-navy hover:text-sunflower transition-colors bg-transparent flex items-center gap-1">
                    <BookOpen size={18} />
                    Đào Tạo
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white/90 backdrop-blur-sm p-4 rounded-lg w-72 navy-shadow">
                    <ul className="space-y-2">
                      <li>
                        <Link to="/courses-view" className="block p-2 rounded hover:bg-sunflower/10 text-navy flex items-center gap-2">
                          <BookOpen size={18} />
                          Xem Khóa Học
                        </Link>
                      </li>
                      <li>
                        <Link to="/training-program" className="block p-2 rounded hover:bg-sunflower/10 text-navy flex items-center gap-2">
                          <Globe size={18} />
                          Chương Trình Đào Tạo
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/career-opportunities" className="flex items-center gap-1 text-navy hover:text-sunflower transition-colors px-4 py-2">
                    <Briefcase size={18} />
                    Cơ Hội Nghề Nghiệp
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/contact" className="flex items-center gap-1 text-navy hover:text-sunflower transition-colors px-4 py-2">
                    <Mail size={18} />
                    Liên Hệ
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/blog" className="flex items-center gap-1 text-navy hover:text-sunflower transition-colors px-4 py-2">
                    <BookOpen size={18} />
                    Blog
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/courses-view">
              <Button className="btn-primary backdrop-blur-sm hover:scale-105 transition-all">Xem Khóa Học</Button>
            </Link>
            
            <Link to="/login">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent border border-navy text-navy hover:bg-navy hover:text-warmWhite transition-all backdrop-blur-sm hover:scale-105">
                <User className="h-4 w-4" />
                Đăng Nhập
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3 animate-fade-in bg-warmWhite/90 backdrop-blur-md rounded-lg mt-2 p-4 navy-shadow">
            <div className="border-b border-navy/10 pb-2 mb-2">
              <p className="font-medium text-navy mb-1 flex items-center gap-1"><Users size={16} /> Về Chúng Tôi</p>
              <Link to="/about" className="block py-1 pl-3 text-sm text-navy/80 hover:text-sunflower transition-colors">Giới Thiệu</Link>
              <Link to="/team" className="block py-1 pl-3 text-sm text-navy/80 hover:text-sunflower transition-colors">Đội Ngũ Đào Tạo</Link>
            </div>
            
            <div className="border-b border-navy/10 pb-2 mb-2">
              <p className="font-medium text-navy mb-1 flex items-center gap-1"><BookOpen size={16} /> Đào Tạo</p>
              <Link to="/courses-view" className="block py-1 pl-3 text-sm text-navy/80 hover:text-sunflower transition-colors">Xem Khóa Học</Link>
              <Link to="/training-program" className="block py-1 pl-3 text-sm text-navy/80 hover:text-sunflower transition-colors">Chương Trình Đào Tạo</Link>
            </div>
            
            <Link to="/career-opportunities" className="block py-2 text-navy hover:text-sunflower transition-colors flex items-center gap-1">
              <Briefcase size={16} /> Cơ Hội Nghề Nghiệp
            </Link>
            <Link to="/contact" className="block py-2 text-navy hover:text-sunflower transition-colors flex items-center gap-1">
              <Mail size={16} /> Liên Hệ
            </Link>
            <Link to="/blog" className="block py-2 text-navy hover:text-sunflower transition-colors flex items-center gap-1">
              <BookOpen size={16} /> Blog
            </Link>
            
            <div className="flex flex-col gap-3 pt-2">
              <Link to="/courses-view" className="w-full">
                <Button className="w-full btn-primary">Xem Khóa Học</Button>
              </Link>
              
              <Link to="/login" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-center gap-2 bg-transparent border border-navy text-navy hover:bg-navy hover:text-warmWhite transition-all">
                  <User className="h-4 w-4" />
                  Đăng Nhập
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
