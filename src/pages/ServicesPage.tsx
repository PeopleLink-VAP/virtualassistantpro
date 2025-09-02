
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import ClientTestimonials from '@/components/ClientTestimonials';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const ServicesPage = () => {
  return (
    <>
      <Seo
        title="Dịch Vụ Virtual Assistant - Giải Pháp Tối Ưu Cho Doanh Nghiệp"
        description="Dịch vụ Virtual Assistant chuyên nghiệp: quản lý admin, hỗ trợ khách hàng, marketing online, data entry. Tiết kiệm 70% chi phí nhân sự với VA chất lượng cao."
        keywords="dịch vụ virtual assistant, thuê VA, trợ lý ảo doanh nghiệp, outsourcing admin, hỗ trợ khách hàng online, marketing assistant, data entry service"
        canonicalUrl="https://virtualassistantpro.vn/services"
        type="website"
      />
      <div className="min-h-screen bg-warmWhite">
        <Navbar />
        <div className="pt-24">
          <Services />
          <ClientTestimonials />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
