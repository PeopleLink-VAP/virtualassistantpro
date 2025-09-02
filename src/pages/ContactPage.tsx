
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const ContactPage = () => {
  return (
    <>
      <Seo
        title="Liên Hệ - Virtual Assistant Pro | Tư Vấn Miễn Phí"
        description="Liên hệ với Virtual Assistant Pro để được tư vấn miễn phí về khóa học VA. Hotline: 0123-456-789. Email: info@virtualassistantpro.vn. Hỗ trợ 24/7."
        keywords="liên hệ virtual assistant pro, tư vấn khóa học VA, hotline VA course, email support, đăng ký học VA"
        canonicalUrl="https://virtualassistantpro.vn/contact"
        type="website"
      />
      <div className="min-h-screen bg-warmWhite">
        <Navbar />
        <div className="pt-24">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
