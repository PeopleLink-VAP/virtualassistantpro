
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Seo from '@/components/Seo';
import TrainingHero from '@/components/training/TrainingHero';
import CourseFeatures from '@/components/training/CourseFeatures';
import CourseStats from '@/components/training/CourseStats';
import LearningPath from '@/components/training/LearningPath';
import CourseTestimonials from '@/components/training/CourseTestimonials';
import CoursePricing from '@/components/training/CoursePricing';
import CourseFAQ from '@/components/training/CourseFAQ';

const TrainingPage = () => {
  const courseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Khóa Học Virtual Assistant Pro - Đào Tạo VA Chuyên Nghiệp",
    "description": "Khóa học toàn diện từ cơ bản đến nâng cao, giúp bạn trở thành Virtual Assistant chuyên nghiệp với thu nhập ổn định 10-50 triệu/tháng. Học Fiverr, Upwork từ A-Z với mentor giàu kinh nghiệm.",
    "provider": {
      "@type": "Organization",
      "name": "Virtual Assistant Pro",
      "url": "https://virtualassistantpro.vn"
    },
    "courseMode": "online",
    "inLanguage": "vi",
    "teaches": [
      "Virtual Assistant Skills",
      "Fiverr Marketing",
      "Upwork Freelancing",
      "Client Management",
      "Online Business Development"
    ],
    "offers": {
      "@type": "Offer",
      "price": "4500000",
      "priceCurrency": "VND",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "instructor": {
        "@type": "Person",
        "name": "Virtual Assistant Pro Team"
      }
    }
  };

  return (
    <>
      <Seo
        title="Khóa Học Virtual Assistant Pro - Đào Tạo VA Chuyên Nghiệp #1 Việt Nam"
        description="Khóa học Virtual Assistant toàn diện từ A-Z. Học cách kiếm tiền 10-50 triệu/tháng với Fiverr, Upwork. Đào tạo VA chuyên nghiệp với mentor giàu kinh nghiệm. Đăng ký ngay!"
        keywords="khóa học virtual assistant, đào tạo VA chuyên nghiệp, học Fiverr Upwork, kiếm tiền online, freelancer course Vietnam, VA training, trợ lý ảo online"
        canonicalUrl="https://virtualassistantpro.vn/training"
        type="course"
        structuredData={courseStructuredData}
      />
      <Navbar />
      <ScrollToTop />
      <div className="min-h-screen bg-warmWhite">
        <TrainingHero />
        <CourseFeatures />
        <CourseStats />
        <LearningPath />
        
        {/* Video Giới Thiệu Section */}
        <section className="py-20 bg-warmWhite">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-navy mb-12 animate-fade-in">Video Giới Thiệu Khóa Học</h2>
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-xl aspect-video bg-gray-200 flex items-center justify-center group animate-fade-in-up">
              <img 
                src="/images/groups/workshop_2.jpg" 
                alt="Video Thumbnail" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 focus:outline-none focus:ring-4 focus:ring-sunflower/50">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <p className="absolute bottom-4 left-4 text-white text-sm bg-black/50 px-3 py-1 rounded-full">Video sắp ra mắt</p>
            </div>
          </div>
        </section>
        
        {/* Điều gì khiến khóa học khác biệt Section */}
        <section className="py-20 bg-warmWhite">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy text-center mb-12 animate-fade-in">Điều Gì Khiến Khóa Học Khác Biệt?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-100 hover:border-sunflower/30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
                <h3 className="text-xl font-semibold text-navy mb-3">Truyền nghề 10 ngách mới lạ</h3>
                <p className="text-gray-600">Khám phá 10 lĩnh vực ngách độc đáo, không phải ai cũng dạy, mở rộng cơ hội nghề nghiệp.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-100 hover:border-leafGreen/30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-xl font-semibold text-navy mb-3">Phân tích Use Case thực tế</h3>
                <p className="text-gray-600">Học hỏi từ những tình huống thực tế, phân tích chi tiết từ chính tài khoản của Duyên.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-100 hover:border-sunflower/30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-xl font-semibold text-navy mb-3">Học Zoom Live tương tác</h3>
                <p className="text-gray-600">Tham gia các buổi học trực tiếp qua Zoom, không phải video quay sẵn, tăng cường tương tác.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-100 hover:border-leafGreen/30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <h3 className="text-xl font-semibold text-navy mb-3">Xây dựng Portfolio ngay cả khi chưa có kinh nghiệm</h3>
                <p className="text-gray-600">Hướng dẫn cách tạo portfolio chuyên nghiệp, ấn tượng dù bạn chưa có kinh nghiệm viết.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-100 hover:border-sunflower/30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <h3 className="text-xl font-semibold text-navy mb-3">2 buổi Live Coaching 1:1</h3>
                <p className="text-gray-600">Nhận 2 buổi huấn luyện trực tiếp 1:1, giải đáp mọi thắc mắc và định hướng cá nhân.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-100 hover:border-leafGreen/30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <h3 className="text-xl font-semibold text-navy mb-3">Lớp tiếng Anh BONUS</h3>
                <p className="text-gray-600">Tăng cường tự tin phỏng vấn với lớp tiếng Anh bổ trợ đặc biệt dành cho học viên.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Hình ảnh nhóm Section - Flow Gallery */}
        <section className="py-20 bg-warmWhite overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy text-center mb-12 animate-fade-in">Khoảnh Khắc Đáng Nhớ</h2>
          </div>
          <div className="relative w-full overflow-hidden py-8">
            <div className="flex animate-flow-gallery whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={`gallery-${i}`}>
                  <img src="/images/groups/group_1.jpg" alt="Group 1" className="h-64 mx-4 rounded-lg shadow-lg object-cover" />
                  <img src="/images/groups/group_2.jpg" alt="Group 2" className="h-64 mx-4 rounded-lg shadow-lg object-cover" />
                  <img src="/images/groups/group_3.jpg" alt="Group 3" className="h-64 mx-4 rounded-lg shadow-lg object-cover" />
                  <img src="/images/groups/group_4.jpg" alt="Group 4" className="h-64 mx-4 rounded-lg shadow-lg object-cover" />
                  <img src="/images/groups/group_5.jpg" alt="Group 5" className="h-64 mx-4 rounded-lg shadow-lg object-cover" />
                  <img src="/images/groups/group_6.jpg" alt="Group 6" className="h-64 mx-4 rounded-lg shadow-lg object-cover" />
                  <img src="/images/groups/group_7.jpg" alt="Group 7" className="h-64 mx-4 rounded-lg shadow-lg object-cover" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
        
        <CourseTestimonials />
        
        {/* Quyền lợi đặc biệt Section */}
        <section className="py-20 bg-warmWhite">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy text-center mb-12 animate-fade-in">Quyền Lợi Đặc Biệt</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
                <h3 className="text-xl font-semibold text-navy mb-3">Cộng đồng hỗ trợ trọn đời</h3>
                <p className="text-gray-600">Tham gia vào cộng đồng học viên năng động, nhận hỗ trợ và chia sẻ kinh nghiệm không giới hạn.</p>
              </div>
              <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-xl font-semibold text-navy mb-3">Cập nhật kiến thức định kỳ</h3>
                <p className="text-gray-600">Luôn được tiếp cận những kiến thức mới nhất, cập nhật xu hướng thị trường VA.</p>
              </div>
              <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-xl font-semibold text-navy mb-3">Cơ hội việc làm</h3>
                <p className="text-gray-600">Kết nối với các đối tác và khách hàng tiềm năng, mở ra cơ hội việc làm sau khóa học.</p>
              </div>
            </div>
          </div>
        </section>
        
        <CoursePricing />
        <CourseFAQ />
      </div>
      <Footer />
    </>
  );
};

export default TrainingPage;
