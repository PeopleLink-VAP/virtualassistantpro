
import Navbar from '@/components/Navbar';
import AboutMe from '@/components/AboutMe';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-warmWhite">
      <Navbar />
      <div className="pt-24">
        <AboutMe />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
