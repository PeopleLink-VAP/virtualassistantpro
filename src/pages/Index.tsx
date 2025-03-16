
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-warmWhite relative overflow-hidden">
      {/* Additional decorative sunflowers */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-sunflower/10 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-1/3 right-10 w-24 h-24 bg-sunflower/15 rounded-full animate-spin-slow"></div>
      <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-sunflower/20 rounded-full animate-float"></div>
      
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
