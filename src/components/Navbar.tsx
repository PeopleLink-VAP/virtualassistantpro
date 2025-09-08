
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User, ChevronDown, Home, Users, BookOpen, Briefcase, Mail, Globe, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-warmWhite/70 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        {/* Decorative sunflower elements */}
        <div className="absolute -top-10 right-10 w-16 h-16 bg-sunflower/20 rounded-full animate-spin-slow opacity-70"></div>
        <div className="absolute -bottom-10 left-20 w-12 h-12 bg-sunflower/30 rounded-full animate-spin-slow opacity-60"></div>
        <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-6 h-6 bg-sunflower/20 rounded-full animate-pulse opacity-40"></div>
        
        <div className="flex justify-between items-center">
          <Logo size={48} />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList className="space-x-0.5">
                <NavigationMenuIndicator />
                <NavigationMenuItem>
                  <Link to="/" className="flex items-center gap-0.5 text-navy hover:text-sunflower transition-colors px-2 py-1.5 font-condensed text-sm">
                    <Home size={16} />
                    Homepage
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/blog" className="flex items-center gap-0.5 text-navy hover:text-sunflower transition-colors px-2 py-1.5 font-condensed text-sm">
                    <BookOpen size={16} />
                    Blog
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center gap-0.5 text-navy hover:text-sunflower transition-colors px-2 py-1.5 font-condensed text-sm">
                    <Users size={16} />
                    Khóa học VAP
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/vap-course" className="flex items-center gap-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <BookOpen size={16} />
                            <div className="text-sm font-medium leading-none">Thông tin khóa học VAP</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/free-resources" className="flex items-center gap-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <BookOpen size={16} />
                            <div className="text-sm font-medium leading-none">Tài Liệu & Công Cụ Miễn Phí</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/career-opportunities" className="flex items-center gap-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <Briefcase size={16} />
                            <div className="text-sm font-medium leading-none">Cơ hội nghề nghiệp</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/success-stories" className="flex items-center gap-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <Users size={16} />
                            <div className="text-sm font-medium leading-none">Câu Chuyện Thành Công</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center gap-0.5 text-navy hover:text-sunflower transition-colors px-2 py-1.5 font-condensed text-sm">
                    <User size={16} />
                    Giới thiệu
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/about" className="flex items-center gap-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <User size={16} />
                            <div className="text-sm font-medium leading-none">Vài nét về Duyên</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/team" className="flex items-center gap-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <Users size={16} />
                            <div className="text-sm font-medium leading-none">Đội Ngũ Đào Tạo</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/free-resources">
              <Button className="btn-primary backdrop-blur-sm hover:scale-105 transition-all font-condensed text-sm px-4 py-2">Tài liệu VA</Button>
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
            <Link to="/" className="block py-2 text-navy hover:text-sunflower transition-colors flex items-center gap-1 font-condensed">
              <Home size={16} /> Homepage
            </Link>

            <Link to="/blog" className="block py-2 text-navy hover:text-sunflower transition-colors flex items-center gap-1 font-condensed">
              <BookOpen size={16} /> Blog
            </Link>

            <details className="group">
              <summary className="flex items-center justify-between py-2 text-navy hover:text-sunflower transition-colors font-condensed cursor-pointer">
                <span className="flex items-center gap-1"><Users size={16} /> Khóa học VAP</span>
                <ChevronDown size={16} className="transform transition-transform group-open:rotate-180" />
              </summary>
              <div className="pl-4 space-y-2">
                <Link to="/vap-course" className="block py-2 text-navy hover:text-sunflower transition-colors flex items-center gap-1 font-condensed">
                  <BookOpen size={16} /> Thông tin khóa học VAP
                </Link>
                <Link to="/free-resources" className="block py-2 text-navy hover:text-sunflower transition-colors flex items-center gap-1 font-condensed">
                  <BookOpen size={16} /> Tài Liệu & Công Cụ Miễn Phí
                </Link>
                <Link to="/career-opportunities" className="block py-2 text-navy hover:text-sunflower transition-colors flex items-center gap-1 font-condensed">
                  <Briefcase size={16} /> Cơ hội nghề nghiệp
                </Link>
                <Link to="/success-stories" className="block py-2 text-navy hover:text-sunflower transition-colors flex items-center gap-1 font-condensed">
                  <Users size={16} /> Câu Chuyện Thành Công
                </Link>
              </div>
            </details>
            
            <details className="group">
              <summary className="flex items-center justify-between py-2 text-navy hover:text-sunflower transition-colors font-condensed cursor-pointer">
                <span className="flex items-center gap-1"><User size={16} /> Giới thiệu</span>
                <ChevronDown size={16} className="transform transition-transform group-open:rotate-180" />
              </summary>
              <div className="pl-4 space-y-2">
                <Link to="/about" className="block py-2 text-navy hover:text-sunflower transition-colors flex items-center gap-1 font-condensed">
                  <User size={16} /> DVài nét về Duyên
                </Link>
                <Link to="/team" className="block py-2 text-navy hover:text-sunflower transition-colors flex items-center gap-1 font-condensed">
                  <Users size={16} /> Đội Ngũ Đào Tạo
                </Link>
              </div>
            </details>
            
            <div className="flex flex-col gap-3 pt-2">
              <Link to="/free-resources" className="w-full">
                <Button className="w-full btn-primary font-condensed">Tài liệu VA</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
