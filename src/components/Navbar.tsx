
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'en', name: 'English' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'es', name: 'Spanish' },
  { code: 'de', name: 'German' },
  { code: 'ru', name: 'Russian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'zh', name: 'Mandarin' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translatePage = (languageCode: string) => {
    if (languageCode === 'en') {
      // Reset to original language
      window.location.reload();
      return;
    }

    // This simulates using Google Translate
    // In a real implementation, you would integrate with Google Translate API
    console.log(`Translating page to ${languageCode}`);
    toast.success(`Page translated to ${languages.find(lang => lang.code === languageCode)?.name}`);
  };

  return (
    <nav className="fixed w-full bg-warmWhite/70 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Sun className="text-sunflower w-8 h-8" />
            <span className="font-bold text-xl text-navy">VAP-Hub</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/services" className="text-navy hover:text-sunflower transition-colors">Services</Link>
            <Link to="/training" className="text-navy hover:text-sunflower transition-colors">Training</Link>
            <Link to="/about" className="text-navy hover:text-sunflower transition-colors">About Us</Link>
            <Link to="/contact" className="text-navy hover:text-sunflower transition-colors">Contact</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-transparent border border-navy text-navy hover:bg-navy hover:text-warmWhite transition-all backdrop-blur-sm">
                  <Globe className="mr-2 h-4 w-4" />
                  Language
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-warmWhite/90 backdrop-blur-md border-sunflower">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code} 
                    className="hover:bg-sunflower/20 focus:bg-sunflower/20 cursor-pointer"
                    onClick={() => translatePage(lang.code)}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/book-meeting">
              <Button className="btn-primary backdrop-blur-sm">Book A Meeting</Button>
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
            <Link to="/services" className="block py-2 text-navy hover:text-sunflower transition-colors">Services</Link>
            <Link to="/training" className="block py-2 text-navy hover:text-sunflower transition-colors">Training</Link>
            <Link to="/about" className="block py-2 text-navy hover:text-sunflower transition-colors">About Us</Link>
            <Link to="/contact" className="block py-2 text-navy hover:text-sunflower transition-colors">Contact</Link>
            
            <div className="flex flex-col gap-3 pt-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="w-full bg-transparent border border-navy text-navy hover:bg-navy hover:text-warmWhite transition-all">
                    <Globe className="mr-2 h-4 w-4" />
                    Language
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-warmWhite/90 backdrop-blur-md border-sunflower">
                  {languages.map((lang) => (
                    <DropdownMenuItem 
                      key={lang.code} 
                      className="hover:bg-sunflower/20 focus:bg-sunflower/20 cursor-pointer"
                      onClick={() => translatePage(lang.code)}
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link to="/book-meeting" className="w-full">
                <Button className="w-full btn-primary">Book A Meeting</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
