
import Navbar from '@/components/Navbar';
import AboutMe from '@/components/AboutMe';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const AboutPage = () => {
  return (
    <>
      <Seo
        title="Về Chúng Tôi - Virtual Assistant Pro | Giảng Viên Chuyên Nghiệp"
        description="Tìm hiểu về đội ngũ giảng viên giàu kinh nghiệm tại Virtual Assistant Pro. Với hơn 5 năm kinh nghiệm trong ngành VA và đã đào tạo hàng nghìn học viên thành công."
        keywords="giảng viên virtual assistant, mentor VA chuyên nghiệp, đào tạo VA uy tín, kinh nghiệm Fiverr, chuyên gia freelance Vietnam"
        canonicalUrl="https://virtualassistantpro.vn/about"
        type="website"
      />
      <div className="min-h-screen bg-warmWhite">
        <Navbar />
        <div className="pt-24">
          <AboutMe />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
