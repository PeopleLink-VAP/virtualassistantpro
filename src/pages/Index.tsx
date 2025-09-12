
import Navbar from '@/components/Navbar';
import HeroLanding from '@/components/HeroLanding';
import AboutDuyen from '@/components/AboutDuyen';
import VAIndustryInfo from '@/components/VAIndustryInfo';
import CoursesSection from '@/components/CoursesSection';
import RealLifeResults from '@/components/RealLifeResults';
import ContactNewsletter from '@/components/ContactNewsletter';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Virtual Assistant Pro",
    "description": "Khóa học đào tạo Virtual Assistant chuyên nghiệp tại Việt Nam. Học từ A-Z để trở thành VA với thu nhập ổn định từ Fiverr, Upwork và các nền tảng freelance.",
    "url": "https://virtualassistantpro.vn",
    "logo": "https://virtualassistantpro.vn/favicon.svg",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "VN",
      "addressRegion": "Vietnam"
    },
    "offers": {
      "@type": "Course",
      "name": "Khóa Học Virtual Assistant Pro",
      "description": "Khóa học toàn diện từ cơ bản đến nâng cao, giúp bạn trở thành Virtual Assistant chuyên nghiệp với thu nhập ổn định.",
      "provider": {
        "@type": "Organization",
        "name": "Virtual Assistant Pro"
      },
      "courseMode": "online",
      "inLanguage": "vi",
      "offers": {
        "@type": "Offer",
        "price": "4500000",
        "priceCurrency": "VND",
        "availability": "https://schema.org/InStock"
      }
    }
  };

  return (
    <>
      <Seo
        title="Virtual Assistant Pro - Khóa Học VA Chuyên Nghiệp #1 Việt Nam"
        description="Khóa học Virtual Assistant toàn diện từ A-Z. Học cách kiếm tiền online với Fiverr, Upwork. Đào tạo VA chuyên nghiệp với thu nhập ổn định 10-50 triệu/tháng. Đăng ký ngay!"
        keywords="khóa học virtual assistant, học VA online, đào tạo trợ lý ảo, kiếm tiền Fiverr, Upwork Vietnam, freelancer course, làm việc online, thu nhập passive, virtual assistant pro"
        canonicalUrl="https://virtualassistantpro.vn/"
        image="https://virtualassistantpro.vn/images/og-image.jpg"
        type="website"
        structuredData={structuredData}
      />
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
    </>
  );
};

export default Index;
