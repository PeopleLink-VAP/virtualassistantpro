
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Globe } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-warmWhite/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <Sun className="text-sunflower w-8 h-8" />
            <span className="font-bold text-xl text-navy">VAP-Hub</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-navy hover:text-sunflower transition-colors">Services</a>
            <a href="#training" className="text-navy hover:text-sunflower transition-colors">Training</a>
            <a href="#about" className="text-navy hover:text-sunflower transition-colors">About Us</a>
            <a href="#contact" className="text-navy hover:text-sunflower transition-colors">Contact</a>
            
            <Button className="bg-transparent border border-navy text-navy hover:bg-navy hover:text-warmWhite transition-all">
              <Globe className="mr-2 h-4 w-4" />
              EN/VN
            </Button>
            
            <Button className="btn-primary">Get Started</Button>
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
          <div className="md:hidden pt-4 pb-3 space-y-3 animate-fade-in">
            <a href="#services" className="block py-2 text-navy hover:text-sunflower transition-colors">Services</a>
            <a href="#training" className="block py-2 text-navy hover:text-sunflower transition-colors">Training</a>
            <a href="#about" className="block py-2 text-navy hover:text-sunflower transition-colors">About Us</a>
            <a href="#contact" className="block py-2 text-navy hover:text-sunflower transition-colors">Contact</a>
            
            <div className="flex gap-3 pt-2">
              <Button className="flex-1 bg-transparent border border-navy text-navy hover:bg-navy hover:text-warmWhite transition-all">
                <Globe className="mr-2 h-4 w-4" />
                EN/VN
              </Button>
              <Button className="flex-1 btn-primary">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
