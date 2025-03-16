
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      {/* Decorative sunflower petals */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-sunflower/20 animate-spin-slow"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-sunflower/10 animate-spin-slow"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-4 animate-fade-in">
              Nurturing Growth Through Professional{' '}
              <span className="text-sunflower">Virtual Assistant</span> Services
            </h1>
            
            <p className="text-lg text-navy/80 mb-8 max-w-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Connecting international businesses with skilled Vietnamese professionals while fostering the growth of aspiring Virtual Assistants.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button className="btn-primary flex items-center gap-2 text-base">
                <Users size={20} />
                Find Your VA
                <ArrowRight size={16} />
              </Button>
              
              <Button className="btn-secondary flex items-center gap-2 text-base">
                <BookOpen size={20} />
                Become a VA
                <ArrowRight size={16} />
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-navy/80 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-sunflower/70 to-leafGreen/70 border-2 border-warmWhite flex items-center justify-center text-xs text-warmWhite font-semibold">
                    VA
                  </div>
                ))}
              </div>
              <p>Trusted by 200+ clients worldwide</p>
            </div>
          </div>
          
          {/* Hero image/illustration */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 z-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-leafGreen/10 rounded-2xl"></div>
              <div className="w-full h-full bg-gradient-to-br from-sunflower/30 to-navy/20 rounded-2xl p-8 relative shadow-lg">
                <div className="bg-warmWhite rounded-xl p-6 shadow-xl">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-sunflower rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    Professional Virtual Assistant Services
                  </h3>
                  <p className="text-navy/70 mb-4">Combining local expertise with international standards</p>
                  
                  <div className="space-y-3">
                    {["Administrative Support", "Business Development", "Client Management", "Project Coordination"].map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-leafGreen/20 text-leafGreen rounded-full flex items-center justify-center text-xs">✓</span>
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Decorative sunflower icon */}
                  <div className="absolute bottom-4 right-4 w-16 h-16 text-sunflower opacity-20">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                      <path d="M100,20 C80,40 60,40 40,20 C40,60 20,80 0,80 C40,100 40,120 20,140 C60,140 80,160 100,180 C120,160 140,140 180,140 C160,120 160,100 200,80 C180,80 160,60 160,20 C140,40 120,40 100,20 Z" />
                      <circle cx="100" cy="100" r="30" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
