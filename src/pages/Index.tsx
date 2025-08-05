
import Navbar from '@/components/Navbar';
import HeroLanding from '@/components/HeroLanding';
import AboutDuyen from '@/components/AboutDuyen';
import VAIndustryInfo from '@/components/VAIndustryInfo';
import CoursesSection from '@/components/CoursesSection';
import RealLifeResults from '@/components/RealLifeResults';
import ContactNewsletter from '@/components/ContactNewsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-warmWhite relative overflow-hidden">
      <Navbar />
      <HeroLanding />
      <AboutDuyen />
      <VAIndustryInfo />
      <CoursesSection />
      <RealLifeResults />
      <ContactNewsletter />
      <Footer />
    </div>
  );
};

export default Index;
