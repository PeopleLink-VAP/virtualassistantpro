
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import ClientTestimonials from '@/components/ClientTestimonials';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-warmWhite">
      <Navbar />
      <div className="pt-24">
        <Services />
        <ClientTestimonials />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
