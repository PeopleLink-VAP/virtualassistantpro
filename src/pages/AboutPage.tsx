
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-warmWhite">
      <Navbar />
      <div className="pt-24">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
