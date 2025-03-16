
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, BriefcaseIcon, TrendingUpIcon, UsersIcon, GlobeIcon, Clock, Calendar, BookOpen, Check, MessageSquare, Heart, GraduationCap } from 'lucide-react';
import { Helmet } from 'react-helmet';

const CareerOpportunitiesPage = () => {
  const parallaxRef1 = useRef<HTMLDivElement>(null);
  const parallaxRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef1.current && parallaxRef2.current) {
        const scrolled = window.scrollY;
        parallaxRef1.current.style.transform = `translateY(${scrolled * 0.15}px)`;
        parallaxRef2.current.style.transform = `translateY(${scrolled * 0.25}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cơ Hội Nghề Nghiệp - Virtual Assistant Pro</title>
        <meta name="description" content="Khám phá cơ hội nghề nghiệp đầy hứa hẹn trong lĩnh vực Trợ Lý Ảo với Virtual Assistant Pro. Thu nhập hấp dẫn và cơ hội phát triển không giới hạn." />
      </Helmet>
      
      <div className="min-h-screen bg-warmWhite relative overflow-hidden">
        <Navbar />

        {/* Floating Sunflower Animations */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-sunflower/10 animate-spin-slow"></div>
          <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-sunflower/15 animate-float"></div>
          <div className="absolute bottom-1/3 -right-16 w-48 h-48 rounded-full bg-sunflower/10 animate-spin-slow"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-sunflower/5 animate-float"></div>
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 pt-32 pb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-navy">Cơ Hội Nghề Nghiệp</h1>
            <p className="text-lg text-navy/70 text-center max-w-3xl mx-auto mb-16">
              Khám phá những cơ hội nghề nghiệp đầy hứa hẹn trong lĩnh vực Trợ Lý Ảo, nơi công nghệ và kỹ năng chuyên môn hội tụ để tạo nên những giá trị mới.
            </p>

            {/* Parallax Image Section 1 */}
            <div className="relative h-[400px] mb-16 overflow-hidden rounded-2xl">
              <div ref={parallaxRef1} className="absolute inset-0">
                <img
                  src="/images/groups/group_4.jpg"
                  alt="VA Workshop Session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/70 to-transparent flex items-center">
                  <div className="text-white p-8 md:p-12 max-w-2xl">
                    <h2 className="text-3xl font-bold mb-4">Tương Lai Rộng Mở</h2>
                    <p className="text-lg mb-6">
                      Thị trường Trợ Lý Ảo dự kiến tăng trưởng 27% mỗi năm từ 2025-2030, mở ra cơ hội việc làm và phát triển sự nghiệp cho hàng ngàn chuyên gia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Prospects Section */}
            <section className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-16">
              <h2 className="text-2xl font-bold text-navy mb-8">Triển Vọng Nghề Nghiệp Trợ Lý Ảo 2025</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sunflower/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUpIcon className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Tăng Trưởng Thu Nhập</h3>
                      <p className="text-navy/70">Thu nhập trung bình của VA chuyên nghiệp từ $2,000 - $5,000/tháng, với khả năng tăng theo kinh nghiệm và kỹ năng.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sunflower/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <GlobeIcon className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Cơ Hội Toàn Cầu</h3>
                      <p className="text-navy/70">Làm việc với khách hàng từ Mỹ, Úc, Singapore và các thị trường phát triển khác.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sunflower/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BriefcaseIcon className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Tự Do Nghề Nghiệp</h3>
                      <p className="text-navy/70">Linh hoạt về thời gian và địa điểm làm việc, tự xây dựng thương hiệu cá nhân.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sunflower/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <UsersIcon className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Mạng Lưới Rộng Lớn</h3>
                      <p className="text-navy/70">Kết nối với cộng đồng VA toàn cầu và các doanh nghiệp đối tác.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Parallax Image Section 2 */}
            <div className="relative h-[400px] mb-16 overflow-hidden rounded-2xl">
              <div ref={parallaxRef2} className="absolute inset-0">
                <img
                  src="/images/groups/workshop_3.jpg"
                  alt="VA Success Stories"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-navy/70 to-transparent flex items-center justify-end">
                  <div className="text-white p-8 md:p-12 max-w-2xl text-right">
                    <h2 className="text-3xl font-bold mb-4">Câu Chuyện Thành Công</h2>
                    <p className="text-lg mb-6">
                      Hơn 200 học viên đã thành công xây dựng sự nghiệp VA, với nhiều người đạt thu nhập trên $3,000/tháng sau 6 tháng tốt nghiệp.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Positions Section */}
            <section className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-16">
              <h2 className="text-2xl font-bold text-navy mb-8">Vị Trí Công Việc Hiện Có</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-navy/5 p-6 rounded-xl hover:scale-105 transition-transform">
                  <h3 className="text-xl font-semibold mb-4">Trợ Lý Ảo Hành Chính</h3>
                  <ul className="space-y-3 text-navy/70">
                    <li>• Quản lý lịch trình và email cho các CEO, doanh nhân</li>
                    <li>• Xử lý tài liệu, báo cáo và thủ tục hành chính</li>
                    <li>• Thu nhập: $1,500 - $3,000/tháng</li>
                    <li>• Yêu cầu: Tiếng Anh tốt, kỹ năng tổ chức cao</li>
                  </ul>
                </div>
                <div className="bg-navy/5 p-6 rounded-xl hover:scale-105 transition-transform">
                  <h3 className="text-xl font-semibold mb-4">Trợ Lý Ảo Marketing</h3>
                  <ul className="space-y-3 text-navy/70">
                    <li>• Quản lý mạng xã hội và chiến dịch marketing</li>
                    <li>• Tạo nội dung và phân tích dữ liệu</li>
                    <li>• Thu nhập: $2,000 - $4,000/tháng</li>
                    <li>• Yêu cầu: Kiến thức marketing, kỹ năng sáng tạo</li>
                  </ul>
                </div>
                <div className="bg-navy/5 p-6 rounded-xl hover:scale-105 transition-transform">
                  <h3 className="text-xl font-semibold mb-4">Trợ Lý Ảo Dịch Vụ Khách Hàng</h3>
                  <ul className="space-y-3 text-navy/70">
                    <li>• Hỗ trợ khách hàng qua email, chat và điện thoại</li>
                    <li>• Xử lý khiếu nại và giải quyết vấn đề</li>
                    <li>• Thu nhập: $1,800 - $3,500/tháng</li>
                    <li>• Yêu cầu: Kỹ năng giao tiếp tốt, kiên nhẫn cao</li>
                  </ul>
                </div>
                <div className="bg-navy/5 p-6 rounded-xl hover:scale-105 transition-transform">
                  <h3 className="text-xl font-semibold mb-4">Trợ Lý Ảo Chuyên Ngành</h3>
                  <ul className="space-y-3 text-navy/70">
                    <li>• Hỗ trợ trong lĩnh vực y tế, luật, bất động sản</li>
                    <li>• Nghiên cứu và phân tích chuyên sâu</li>
                    <li>• Thu nhập: $2,500 - $5,000/tháng</li>
                    <li>• Yêu cầu: Kiến thức chuyên ngành, chứng chỉ liên quan</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Registration Form Section */}
            <section className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-navy mb-6">Đăng Ký Thông Tin</h2>
              <p className="text-navy/70 mb-8">
                Để nhận thông tin về các cơ hội việc làm mới nhất và được ưu tiên giới thiệu đến đối tác của chúng tôi, 
                vui lòng điền thông tin của bạn vào mẫu dưới đây:
              </p>
              <form className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Họ và tên</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sunflower bg-white/50" 
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sunflower bg-white/50"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">Số điện thoại</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sunflower bg-white/50"
                    placeholder="+84 xxx xxx xxx"
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block mb-2 font-medium">Kinh nghiệm VA</label>
                  <select 
                    id="experience" 
                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sunflower bg-white/50"
                  >
                    <option value="">Chọn mức kinh nghiệm</option>
                    <option value="beginner">Mới bắt đầu</option>
                    <option value="intermediate">1-2 năm kinh nghiệm</option>
                    <option value="advanced">Trên 2 năm kinh nghiệm</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="portfolio" className="block mb-2 font-medium">Link Portfolio/LinkedIn</label>
                  <input 
                    type="url" 
                    id="portfolio" 
                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sunflower bg-white/50"
                    placeholder="https://"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block mb-2 font-medium">Mô tả kinh nghiệm của bạn</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sunflower bg-white/50"
                    placeholder="Chia sẻ về kinh nghiệm và mong muốn của bạn..."
                  ></textarea>
                </div>
                <div className="md:col-span-2 flex justify-center">
                  <button 
                    type="submit" 
                    className="bg-sunflower text-navy font-semibold px-8 py-3 rounded-xl hover:bg-sunflower/80 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-5 w-5" />
                    Gửi Thông Tin
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CareerOpportunitiesPage;
