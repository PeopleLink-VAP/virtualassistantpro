
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
              Professional Vietnamese Virtual Assistant services combining local expertise with international standards.
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
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Administrative Support</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Business Development</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Client Management</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Project Coordination</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Custom Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-warmWhite/80 hover:text-sunflower transition-colors">About Us</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Our Team</a></li>
              <li><a href="#training" className="text-warmWhite/80 hover:text-sunflower transition-colors">VA Training</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-warmWhite/80 hover:text-sunflower transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Blog</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Client Resources</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">VA Resources</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">FAQs</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-warmWhite/20 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-warmWhite/70 text-sm">
            © 2023 VAP-Hub. All rights reserved.
          </div>
          
          <div className="flex items-center">
            <span className="mr-2 text-sm text-warmWhite/70">Language:</span>
            <select className="bg-navy border border-warmWhite/30 rounded text-warmWhite/90 text-sm px-2 py-1 focus:outline-none focus:border-sunflower">
              <option value="en">English</option>
              <option value="vi">Tiếng Việt</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
