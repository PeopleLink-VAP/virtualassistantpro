import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Seo from '@/components/Seo';
import { ChevronRight, BriefcaseIcon, Clock, Sparkles, Rocket, Users, TrendingUp } from 'lucide-react';

const CareerOpportunitiesPage = () => {
  return <>
      <Seo title="Cơ Hội Nghề Nghiệp - Virtual Assistant Pro" description="Sắp ra mắt - Nền tảng kết nối việc làm Virtual Assistant toàn diện nhất Việt Nam. Khám phá cơ hội nghề nghiệp đầy hứa hẹn trong lĩnh vực VA." />
      <Navbar />
      <ScrollToTop />
      <div className="relative bg-warmWhite py-20 pt-40">
        <div className="container mx-auto px-4">
          <nav className="mb-8 text-sm text-gray-500" aria-label="breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to="/" className="text-navy hover:underline">Homepage</Link>
                <ChevronRight className="h-4 w-4 mx-2" />
              </li>
              <li className="flex items-center">
                <span className="text-sunflower">Cơ Hội Nghề Nghiệp</span>
              </li>
            </ol>
          </nav>
          
          {/* Coming Soon Hero */}
          <div className="text-center mb-20">
            <div className="relative inline-block mb-6">
              <h1 className="text-6xl font-bold text-navy font-condensed mb-4">
                Cơ Hội Nghề Nghiệp
                <span className="block text-sunflower">Virtual Assistant</span>
              </h1>
              <Sparkles className="absolute -top-4 -right-4 h-8 w-8 text-sunflower animate-pulse" />
            </div>
            
            <div className="bg-gradient-to-r from-sunflower/20 via-navy/10 to-sunflower/20 p-8 rounded-2xl border-2 border-sunflower/30 mb-12 max-w-4xl mx-auto">
              <Rocket className="h-16 w-16 text-sunflower mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-navy mb-4">Sắp Ra Mắt!</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nền tảng kết nối việc làm Virtual Assistant toàn diện nhất Việt Nam đang được xây dựng! 
                Đây sẽ là nơi các doanh nghiệp đăng tin tuyển dụng và VA tìm kiếm cơ hội việc làm phù hợp.
              </p>
              <div className="bg-white/50 p-4 rounded-lg mb-6">
                <p className="text-navy font-semibold">🚀 Đang hoàn thiện để mang đến trải nghiệm tốt nhất cho bạn!</p>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-sunflower hover:transform hover:scale-105 transition-all duration-300">
              <BriefcaseIcon className="h-12 w-12 text-sunflower mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">Việc Làm Chất Lượng</h3>
              <p className="text-gray-600">
                Kết nối với các cơ hội việc làm VA từ các doanh nghiệp uy tín trong và ngoài nước. 
                Thu nhập hấp dẫn từ $1,500 - $5,000/tháng.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-navy hover:transform hover:scale-105 transition-all duration-300">
              <Users className="h-12 w-12 text-navy mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">Cộng Đồng Hỗ Trợ</h3>
              <p className="text-gray-600">
                Tham gia cộng đồng VA Việt Nam, chia sẻ kinh nghiệm, học hỏi từ những chuyên gia 
                và phát triển sự nghiệp cùng nhau.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-sunflower hover:transform hover:scale-105 transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-sunflower mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">Phát Triển Sự Nghiệp</h3>
              <p className="text-gray-600">
                Được hướng dẫn phát triển kỹ năng, xây dựng portfolio chuyên nghiệp 
                và định hướng lộ trình sự nghiệp rõ ràng.
              </p>
            </div>
          </div>

          {/* Coming Soon Features */}
          <div className="bg-gradient-to-r from-navy/5 to-sunflower/5 p-8 rounded-2xl border border-navy/20">
            <h2 className="text-3xl font-bold text-navy text-center mb-8 font-condensed">Tính Năng Sắp Ra Mắt</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-sunflower rounded-full"></div>
                  <span className="text-gray-700">💼 Bảng tin việc làm VA cập nhật 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-sunflower rounded-full"></div>
                  <span className="text-gray-700">🎯 Hệ thống matching thông minh</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-sunflower rounded-full"></div>
                  <span className="text-gray-700">📊 Dashboard theo dõi ứng tuyển</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-sunflower rounded-full"></div>
                  <span className="text-gray-700">⭐ Hệ thống đánh giá và review</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-navy rounded-full"></div>
                  <span className="text-gray-700">💬 Chat trực tiếp với nhà tuyển dụng</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-navy rounded-full"></div>
                  <span className="text-gray-700">📚 Thư viện khóa học nâng cao kỹ năng</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-navy rounded-full"></div>
                  <span className="text-gray-700">🏆 Chương trình certification VA Pro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-navy rounded-full"></div>
                  <span className="text-gray-700">🌟 Cộng đồng networking chuyên nghiệp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto border-2 border-sunflower/20">
              <Clock className="h-12 w-12 text-sunflower mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy mb-4">Đừng Bỏ Lỡ Cơ Hội!</h3>
              <p className="text-gray-600 mb-6">
                Hãy đăng ký khóa học Virtual Assistant Pro ngay hôm nay để được ưu tiên 
                truy cập sớm khi nền tảng việc làm chính thức ra mắt!
              </p>
              <Link 
                to="/training" 
                className="inline-flex items-center bg-gradient-to-r from-sunflower to-sunflower/80 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                Đăng Ký Khóa Học Ngay
                <Sparkles className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>;
};
export default CareerOpportunitiesPage;