import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroLanding = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      {/* Decorative sunflower petals */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-sunflower/20 animate-spin-slow"></div>
      <div className="absolute top-40 left-10 w-16 h-16 rounded-full bg-sunflower/30 animate-float"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-sunflower/10 animate-spin-slow"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-sunflower/20 animate-float"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Roboto_Condensed'] text-navy leading-tight mb-6 animate-fade-in">
            Build Your Dream Career as a
            <span className="text-sunflower font-['Big_Shoulders_Stencil'] block">Virtual Assistant</span>
          </h1>
          
          <p className="text-xl text-navy/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Learn. Launch. Land Clients — with Confidence.
          </p>
          
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Link to="/vap-course">
              <Button className="btn-primary backdrop-blur-sm flex items-center gap-2 text-lg px-8 py-3 hover:scale-105 transition-all mx-auto">
                <BookOpen size={20} />
                Tìm hiểu thêm
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="text-sunflower" size={24} />
                <span className="text-3xl font-bold text-navy">150+</span>
              </div>
              <p className="text-navy/80 font-medium">Trained VAs</p>
              <p className="text-sm text-navy/60">Thriving across the globe</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="text-sunflower" size={24} />
                <span className="text-3xl font-bold text-navy">10+</span>
              </div>
              <p className="text-navy/80 font-medium">Years of Experience</p>
              <p className="text-sm text-navy/60">In VA training & coaching</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;