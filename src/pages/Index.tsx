
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Training from '@/components/Training';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-warmWhite">
      <Navbar />
      <Hero />
      <Services />
      <Training />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
