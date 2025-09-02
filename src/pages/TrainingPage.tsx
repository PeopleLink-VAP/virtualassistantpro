
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Clock, Check, Users, BookOpen, ArrowRight, 
  Video, FileText, MessageSquare, Award, Calendar, Hourglass, Star, ChevronDown
} from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Khóa Học Fiverr từ A-Z",
    description: "Hướng dẫn chi tiết để thành công trên nền tảng freelance Fiverr",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    level: "Cơ Bản đến Trung Cấp",
    duration: "4 tuần",
    students: 150,
    price: "1,900,000 VNĐ",
    features: [
      "Tối ưu hóa hồ sơ Fiverr",
      "Tạo gói dịch vụ hấp dẫn",
      "Chiến lược marketing",
      "Kỹ thuật tăng xếp hạng"
    ]
  }
];

const TrainingPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  const faqData = [
    {
      question: "Khóa học này phù hợp với ai?",
      answer: "Khóa học phù hợp với những người muốn bắt đầu sự nghiệp Virtual Assistant, những người muốn tối ưu hóa và phát triển công việc trên Fiverr, hoặc bất kỳ ai muốn tìm hiểu về các ngách mới trong ngành VA."
    },
    {
      question: "Tôi có cần kinh nghiệm trước không?",
      answer: "Không, khóa học được thiết kế từ cơ bản đến nâng cao, phù hợp cho cả người mới bắt đầu và những người đã có kinh nghiệm nhưng muốn nâng cao kỹ năng."
    },
    {
      question: "Làm thế nào để đăng ký khóa học?",
      answer: "Bạn có thể đăng ký trực tiếp trên trang web này bằng cách nhấn vào nút 'Đăng Ký Ngay' hoặc liên hệ với chúng tôi để được tư vấn chi tiết."
    },
    {
      question: "Học phí có bao gồm tài liệu học tập không?",
      answer: "Có, học phí đã bao gồm toàn bộ tài liệu học tập, công cụ hỗ trợ, và quyền truy cập vào cộng đồng học viên trọn đời."
    },
    {
      question: "Tôi có thể học online hoàn toàn không?",
      answer: "Có, khóa học được tổ chức 100% online qua Zoom với lịch học linh hoạt. Bạn cũng sẽ có quyền truy cập vào các buổi học đã ghi lại."
    },
    {
      question: "Sau khóa học tôi có được hỗ trợ tìm việc không?",
      answer: "Có, chúng tôi có mạng lưới đối tác và sẽ giới thiệu cơ hội việc làm phù hợp. Ngoài ra, bạn sẽ được hỗ trợ xây dựng hồ sơ và chuẩn bị phỏng vấn."
    }
  ];

  return (
    <div className="min-h-screen bg-warmWhite">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-warmWhite via-lightYellow/50 to-sunflower/20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-sunflower/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-leafGreen/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-lightBlue/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          
          {/* Floating Icons */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
              <BookOpen className="h-6 w-6 text-sunflower" />
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-float animation-delay-1000">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
              <Award className="h-8 w-8 text-leafGreen" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-float animation-delay-2000">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
              <Users className="h-7 w-7 text-navy" />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            {/* Enhanced Title with Gradient Text */}
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-navy via-navy to-sunflower bg-clip-text text-transparent animate-gradient-x">
                  Khóa học
                </span>
                <br />
                <span className="bg-gradient-to-r from-sunflower via-leafGreen to-sunflower bg-clip-text text-transparent animate-gradient-x animation-delay-500">
                  Virtual Assistant Pro
                </span>
              </h1>
            </div>
            
            {/* Enhanced Description with Typewriter Effect */}
            <div className="animate-fade-in-up animation-delay-300">
              <p className="text-navy/80 text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed">
                Trở thành Virtual Assistant chuyên nghiệp và 
                <span className="font-bold text-sunflower animate-pulse">bứt phá thu nhập</span> 
                với khóa học độc quyền từ A-Z về Fiverr.
              </p>
            </div>
            
            {/* Interactive Course Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              <div className="group bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30 transform hover:scale-105 hover:rotate-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-sunflower to-leafGreen rounded-full flex items-center justify-center shadow-lg group-hover:animate-bounce">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-navy mb-2">Khai Giảng</h3>
                <p className="text-navy/70">Cuối tháng 9/2025</p>
              </div>
              
              <div className="group bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-leafGreen to-lightBlue rounded-full flex items-center justify-center shadow-lg group-hover:animate-bounce">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-navy mb-2">Lịch Học</h3>
                <p className="text-navy/70">Thứ 3 & Thứ 5<br />(19:45-21:15)</p>
              </div>
              
              <div className="group bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30 transform hover:scale-105 hover:rotate-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-lightBlue to-sunflower rounded-full flex items-center justify-center shadow-lg group-hover:animate-bounce">
                    <Hourglass className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-navy mb-2">Thời Lượng</h3>
                <p className="text-navy/70 text-sm">7 buổi VA + 3 buổi tiếng Anh + 2 buổi coaching 1:1</p>
              </div>
            </div>
            
            {/* Enhanced CTA Button */}
            <div className="animate-fade-in-up animation-delay-700">
              <Link to="/register">
                <Button className="group relative bg-gradient-to-r from-sunflower to-leafGreen hover:from-leafGreen hover:to-sunflower text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-110 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    <Star className="h-6 w-6 group-hover:animate-spin" />
                    Đăng Ký Ngay - Ưu Đãi Đặc Biệt
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className={`absolute w-2 h-2 bg-sunflower/30 rounded-full animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Enhanced Course Features Showcase */}
      <section className="py-20 bg-gradient-to-b from-warmWhite to-lightYellow/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-sunflower/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-leafGreen/15 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-lightBlue/20 rounded-full animate-float animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-navy mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-navy to-sunflower bg-clip-text text-transparent">
                Điểm Nổi Bật Khóa Học
              </span>
            </h2>
            <p className="text-xl text-navy/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Khám phá những tính năng độc đáo và giá trị vượt trội mà khóa học mang lại
            </p>
          </div>
          
          {/* Interactive Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Enhanced */}
            <div className="group relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 transform hover:scale-105 hover:-rotate-1 transition-all duration-500 animate-fade-in-up overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sunflower/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-sunflower to-leafGreen rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:animate-bounce group-hover:shadow-2xl transition-all duration-300">
                  <Star className="h-10 w-10 text-white group-hover:animate-spin" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-sunflower transition-colors duration-300">Hướng dẫn Fiverr từ A-Z</h3>
                <p className="text-navy/70 leading-relaxed group-hover:text-navy/90 transition-colors duration-300">Học cách thiết lập, tối ưu và phát triển sự nghiệp trên nền tảng freelance Fiverr một cách bài bản và chuyên nghiệp.</p>
                <div className="mt-6 flex items-center text-sm text-sunflower font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Tìm hiểu thêm
                </div>
              </div>
            </div>
            
            {/* Feature 2 - Enhanced */}
            <div className="group relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 transform hover:scale-105 hover:rotate-1 transition-all duration-500 animate-fade-in-up overflow-hidden" style={{ animationDelay: "0.1s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-leafGreen/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-leafGreen to-lightBlue rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:animate-bounce group-hover:shadow-2xl transition-all duration-300">
                  <BookOpen className="h-10 w-10 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-leafGreen transition-colors duration-300">10 Ngách Nghề VA Đa Dạng</h3>
                <p className="text-navy/70 leading-relaxed group-hover:text-navy/90 transition-colors duration-300">Khám phá 10 lĩnh vực chuyên môn khác nhau với ví dụ thực tế và tình huống ứng dụng cụ thể, giúp bạn chọn đúng hướng đi.</p>
                <div className="mt-6 flex items-center text-sm text-leafGreen font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Khám phá ngay
                </div>
              </div>
            </div>
            
            {/* Feature 3 - Enhanced */}
            <div className="group relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 transform hover:scale-105 hover:-rotate-1 transition-all duration-500 animate-fade-in-up overflow-hidden" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-lightBlue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-lightBlue to-sunflower rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:animate-bounce group-hover:shadow-2xl transition-all duration-300">
                  <FileText className="h-10 w-10 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-lightBlue transition-colors duration-300">Portfolio Chuẩn Chỉnh</h3>
                <p className="text-navy/70 leading-relaxed group-hover:text-navy/90 transition-colors duration-300">"Cầm tay chỉ việc" hướng dẫn bạn tạo dựng portfolio chuyên nghiệp, gây ấn tượng mạnh với khách hàng.</p>
                <div className="mt-6 flex items-center text-sm text-lightBlue font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Xem mẫu
                </div>
              </div>
            </div>
            
            {/* Feature 4 - Enhanced */}
            <div className="group relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 transform hover:scale-105 hover:rotate-1 transition-all duration-500 animate-fade-in-up overflow-hidden" style={{ animationDelay: "0.3s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-sunflower/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-sunflower to-leafGreen rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:animate-bounce group-hover:shadow-2xl transition-all duration-300">
                  <Video className="h-10 w-10 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-sunflower transition-colors duration-300">Thực Hành Tài Khoản Thật</h3>
                <p className="text-navy/70 leading-relaxed group-hover:text-navy/90 transition-colors duration-300">Trải nghiệm học tập trực tiếp trên tài khoản thật của giảng viên với các tình huống thực tế.</p>
                <div className="mt-6 flex items-center text-sm text-sunflower font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Trải nghiệm
                </div>
              </div>
            </div>
            
            {/* Feature 5 - Enhanced */}
            <div className="group relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 transform hover:scale-105 hover:-rotate-1 transition-all duration-500 animate-fade-in-up overflow-hidden" style={{ animationDelay: "0.4s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-leafGreen/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-leafGreen to-lightBlue rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:animate-bounce group-hover:shadow-2xl transition-all duration-300">
                  <Users className="h-10 w-10 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-leafGreen transition-colors duration-300">Lớp Học Nhỏ Thân Mật</h3>
                <p className="text-navy/70 leading-relaxed group-hover:text-navy/90 transition-colors duration-300">Môi trường học tập lý tưởng với lớp học nhỏ từ 10-15 thành viên, tăng cường tương tác và hỗ trợ cá nhân.</p>
                <div className="mt-6 flex items-center text-sm text-leafGreen font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Tham gia ngay
                </div>
              </div>
            </div>
            
            {/* Feature 6 - Enhanced */}
            <div className="group relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 transform hover:scale-105 hover:rotate-1 transition-all duration-500 animate-fade-in-up overflow-hidden" style={{ animationDelay: "0.5s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-lightBlue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-lightBlue to-sunflower rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:animate-bounce group-hover:shadow-2xl transition-all duration-300">
                  <MessageSquare className="h-10 w-10 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-lightBlue transition-colors duration-300">Tư Vấn Không Giới Hạn</h3>
                <p className="text-navy/70 leading-relaxed group-hover:text-navy/90 transition-colors duration-300">Nhận sự hỗ trợ và tư vấn trực tiếp từ giảng viên trong suốt quá trình học và sau khóa học.</p>
                <div className="mt-6 flex items-center text-sm text-lightBlue font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Liên hệ ngay
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up animation-delay-700">
            <div className="bg-gradient-to-r from-sunflower/20 to-leafGreen/20 rounded-2xl p-8 backdrop-blur-sm border border-white/30 shadow-xl">
              <h3 className="text-3xl font-bold text-navy mb-4">Sẵn sàng bắt đầu hành trình?</h3>
              <p className="text-navy/80 mb-6 max-w-2xl mx-auto">Đừng bỏ lỡ cơ hội trở thành Virtual Assistant chuyên nghiệp với mức thu nhập ổn định</p>
              <Link to="/register">
              <Button className="group bg-gradient-to-r from-sunflower to-leafGreen hover:from-leafGreen hover:to-sunflower text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-110 transition-all duration-300">
                <span className="flex items-center gap-3">
                  <Award className="h-6 w-6 group-hover:animate-spin" />
                  Đăng Ký Khóa Học Ngay
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Statistics Counter Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy/90 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-sunflower/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-leafGreen/10 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-lightBlue/10 rounded-full animate-float animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-sunflower to-leafGreen bg-clip-text text-transparent">
                Thành Tựu Ấn Tượng
              </span>
            </h2>
            <p className="text-white/80 text-xl max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Những con số biết nói về chất lượng và hiệu quả của khóa học VAP
            </p>
          </div>
          
          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="group text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-sunflower to-leafGreen rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-sunflower mb-2 group-hover:animate-pulse">
                  500+
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Học Viên</h3>
                <p className="text-white/70 text-sm">Đã tham gia và hoàn thành khóa học thành công</p>
              </div>
            </div>
            
            {/* Stat 2 */}
            <div className="group text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-leafGreen to-lightBlue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-leafGreen mb-2 group-hover:animate-pulse">
                  95%
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Tỷ Lệ Thành Công</h3>
                <p className="text-white/70 text-sm">Học viên tìm được việc làm VA sau khóa học</p>
              </div>
            </div>
            
            {/* Stat 3 */}
            <div className="group text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-lightBlue to-sunflower rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-lightBlue mb-2 group-hover:animate-pulse">
                  4.9/5
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Đánh Giá</h3>
                <p className="text-white/70 text-sm">Điểm đánh giá trung bình từ học viên</p>
              </div>
            </div>
            
            {/* Stat 4 */}
            <div className="group text-center animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-sunflower to-leafGreen rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-sunflower mb-2 group-hover:animate-pulse">
                  15+
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Khóa Học</h3>
                <p className="text-white/70 text-sm">Đã được tổ chức với chất lượng cao</p>
              </div>
            </div>
          </div>
          
          {/* Success Stories Preview */}
          <div className="mt-16 text-center animate-fade-in-up animation-delay-700">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">💼 Thu Nhập Trung Bình Của Học Viên</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sunflower mb-2">$500-800</div>
                  <p className="text-white/70">Tháng đầu tiên</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-leafGreen mb-2">$1000-1500</div>
                  <p className="text-white/70">Sau 3 tháng</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-lightBlue mb-2">$2000+</div>
                  <p className="text-white/70">Sau 6 tháng</p>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-4 italic">*Dựa trên khảo sát thực tế từ học viên đã hoàn thành khóa học</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Course Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-warmWhite to-lightYellow/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-28 h-28 bg-sunflower/10 rounded-full animate-float"></div>
          <div className="absolute bottom-40 right-20 w-36 h-36 bg-leafGreen/10 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute top-1/2 right-10 w-20 h-20 bg-lightBlue/15 rounded-full animate-float animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-navy mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-navy to-sunflower bg-clip-text text-transparent">
                Lộ Trình Học Tập
              </span>
            </h2>
            <p className="text-xl text-navy/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Hành trình từ người mới bắt đầu đến Virtual Assistant chuyên nghiệp
            </p>
          </div>
          
          {/* Course Overview Card */}
          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30 mb-16 animate-fade-in-up animation-delay-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Khóa học Virtual Assistant Pro" 
                  className="w-full h-80 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent rounded-2xl flex items-end p-6">
                  <div className="text-white">
                    <span className="bg-gradient-to-r from-sunflower to-leafGreen text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                      Cơ Bản đến Trung Cấp
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-navy mb-4">Khóa học Virtual Assistant Pro</h3>
                  <p className="text-navy/80 text-lg leading-relaxed mb-4">
                    Virtual Assistant Pro không chỉ là một khóa học nghề - đây là nơi bạn được trang bị kiến thức thực tế, 
                    thực hành trực tiếp, và tiếp cận những câu chuyện thật từ khách hàng và học viên đi trước.
                  </p>
                </div>
                
                {/* Key Benefits */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-sunflower to-leafGreen rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-navy/80">Bước vào thế giới freelancer toàn cầu</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-leafGreen to-lightBlue rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-navy/80">Xây dựng sự nghiệp ổn định và lâu dài</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-lightBlue to-sunflower rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-navy/80">Có mentor đồng hành không đi một mình</span>
                  </div>
                </div>
                
                {/* Course Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-navy/10">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-sunflower" />
                      <span className="font-bold text-navy">4 tuần</span>
                    </div>
                    <p className="text-sm text-navy/70">Thời lượng</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-leafGreen" />
                      <span className="font-bold text-navy">10-15</span>
                    </div>
                    <p className="text-sm text-navy/70">Học viên</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-lightBlue" />
                      <span className="font-bold text-navy">100%</span>
                    </div>
                    <p className="text-sm text-navy/70">Chứng chỉ</p>
                  </div>
                </div>
                
                {/* Price and CTA */}
                <div className="bg-gradient-to-r from-sunflower/10 to-leafGreen/10 rounded-2xl p-6 mt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-navy/70 mb-1">Học phí trọn gói</p>
                      <p className="text-3xl font-bold text-navy">8,000,000 VNĐ</p>
                    </div>
                    <Link to="/register">
                  <Button className="group bg-gradient-to-r from-sunflower to-leafGreen hover:from-leafGreen hover:to-sunflower text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Đăng Ký Ngay
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interactive Learning Timeline */}
          <div className="relative">
            <h3 className="text-3xl font-bold text-navy text-center mb-12 animate-fade-in">Chi Tiết Chương Trình Học</h3>
            
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sunflower via-leafGreen to-lightBlue rounded-full opacity-30"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {/* Week 1 */}
              <div className="relative animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-r from-sunflower to-leafGreen w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                  <div className="lg:text-right">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <h4 className="text-xl font-bold text-navy mb-3">Tuần 1: Nền Tảng VA</h4>
                      <ul className="text-navy/70 space-y-2">
                        <li>• Tổng quan ngành VA và xu hướng thị trường</li>
                        <li>• Xác định thế mạnh cá nhân</li>
                        <li>• Thiết lập môi trường làm việc chuyên nghiệp</li>
                        <li>• Kỹ năng giao tiếp qua email & chat</li>
                      </ul>
                    </div>
                  </div>
                  <div className="lg:pl-8">
                    <div className="text-navy/60 italic">
                      "Xây dựng nền tảng vững chắc cho sự nghiệp VA của bạn"
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Week 2 */}
              <div className="relative animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-r from-leafGreen to-lightBlue w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                  <div className="lg:pr-8 order-2 lg:order-1">
                    <div className="text-navy/60 italic">
                      "Thành thạo các công cụ thiết yếu của VA chuyên nghiệp"
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <h4 className="text-xl font-bold text-navy mb-3">Tuần 2: Kỹ Năng & Công Cụ</h4>
                      <ul className="text-navy/70 space-y-2">
                        <li>• Google Workspace: Drive, Docs, Sheets, Slides</li>
                        <li>• Quản lý lịch và cuộc hẹn chuyên nghiệp</li>
                        <li>• Công cụ quản lý dự án: Trello, Asana, ClickUp</li>
                        <li>• Tự động hóa với Zapier</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Week 3 */}
              <div className="relative animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-r from-lightBlue to-sunflower w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                  <div className="lg:text-right">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <h4 className="text-xl font-bold text-navy mb-3">Tuần 3: Marketing & Thương Hiệu</h4>
                      <ul className="text-navy/70 space-y-2">
                        <li>• Xây dựng portfolio VA chuyên nghiệp</li>
                        <li>• Thiết kế hồ sơ Fiverr/Upwork thu hút</li>
                        <li>• Chiến lược định giá dịch vụ hiệu quả</li>
                        <li>• Tối ưu LinkedIn để thu hút khách hàng</li>
                      </ul>
                    </div>
                  </div>
                  <div className="lg:pl-8">
                    <div className="text-navy/60 italic">
                      "Tạo dựng thương hiệu cá nhân nổi bật và thu hút khách hàng"
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Week 4 */}
              <div className="relative animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-r from-sunflower to-leafGreen w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                  <div className="lg:pr-8 order-2 lg:order-1">
                    <div className="text-navy/60 italic">
                      "Sẵn sàng khởi nghiệp và phát triển sự nghiệp VA thành công"
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <h4 className="text-xl font-bold text-navy mb-3">Tuần 4: Thực Hành & Khởi Nghiệp</h4>
                      <ul className="text-navy/70 space-y-2">
                        <li>• Hackathon 21 ngày: Dự án thực tế</li>
                        <li>• Phản hồi từ chuyên gia</li>
                        <li>• Hoàn thiện portfolio và chiến lược</li>
                        <li>• Tư vấn cá nhân với giảng viên</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           
           {/* Consultation CTA */}
           <div className="mt-16 bg-gradient-to-r from-sunflower/20 to-leafGreen/20 rounded-xl p-8 navy-shadow text-center animate-fade-in" style={{ animationDelay: "0.9s" }}>
             <h3 className="text-2xl font-bold text-navy mb-4">Bạn cần tư vấn thêm?</h3>
             <p className="text-navy/80 mb-6 max-w-2xl mx-auto">
               Đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn chọn khóa học phù hợp nhất với mục tiêu nghề nghiệp của bạn
             </p>
             <Link to="/contact">
               <Button className="btn-secondary flex items-center gap-2 group hover:scale-105 transition-transform">
                 <MessageSquare className="h-5 w-5" />
                 Liên Hệ Tư Vấn
                 <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
               </Button>
             </Link>
           </div>
         </div>
       </section>

      {/* Video Giới Thiệu Section */}
      <section className="py-20 bg-lightYellow/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-navy mb-12 animate-fade-in">Video Giới Thiệu Khóa Học</h2>
          <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-xl aspect-video bg-gray-200 flex items-center justify-center group animate-fade-in-up">
            <img 
              src="/images/groups/workshop_2.jpg" 
              alt="Video Thumbnail" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity duration-300">
              <button className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 focus:outline-none focus:ring-4 focus:ring-sunflower/50">
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
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
              <h3 className="text-xl font-semibold text-navy mb-3">Truyền nghề 10 ngách mới lạ</h3>
              <p className="text-navy/70">Khám phá 10 lĩnh vực ngách độc đáo, không phải ai cũng dạy, mở rộng cơ hội nghề nghiệp.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-semibold text-navy mb-3">Phân tích Use Case thực tế</h3>
              <p className="text-navy/70">Học hỏi từ những tình huống thực tế, phân tích chi tiết từ chính tài khoản của Duyên.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-semibold text-navy mb-3">Học Zoom Live tương tác</h3>
              <p className="text-navy/70">Tham gia các buổi học trực tiếp qua Zoom, không phải video quay sẵn, tăng cường tương tác.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-xl font-semibold text-navy mb-3">Xây dựng Portfolio ngay cả khi chưa có kinh nghiệm</h3>
              <p className="text-navy/70">Hướng dẫn cách tạo portfolio chuyên nghiệp, ấn tượng dù bạn chưa có kinh nghiệm viết.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-xl font-semibold text-navy mb-3">2 buổi Live Coaching 1:1</h3>
              <p className="text-navy/70">Nhận 2 buổi huấn luyện trực tiếp 1:1, giải đáp mọi thắc mắc và định hướng cá nhân.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <h3 className="text-xl font-semibold text-navy mb-3">Lớp tiếng Anh BONUS</h3>
              <p className="text-navy/70">Tăng cường tự tin phỏng vấn với lớp tiếng Anh bổ trợ đặc biệt dành cho học viên.</p>
            </div>
          </div>
          <div className="text-center mt-12 animate-fade-in-up">
            <Link to="/register">
              <Button className="btn-primary flex items-center gap-2 group">
                <BookOpen className="h-4 w-4" />
                Đăng Ký Ngay
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hình ảnh nhóm Section - Flow Gallery */}
      <section className="py-20 bg-lightYellow/30 overflow-hidden">
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
      
      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-warmWhite to-lightYellow/20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-32 h-32 bg-sunflower/10 rounded-full animate-float"></div>
          <div className="absolute bottom-40 left-20 w-28 h-28 bg-leafGreen/10 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute top-1/2 left-10 w-20 h-20 bg-lightBlue/15 rounded-full animate-float animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-navy mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-navy to-sunflower bg-clip-text text-transparent">
                Câu Chuyện Thành Công
              </span>
            </h2>
            <p className="text-xl text-navy/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Những chia sẻ chân thật từ học viên đã thành công với khóa học VAP
            </p>
          </div>
          
          {/* Featured Testimonial */}
          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30 mb-16 animate-fade-in-up animation-delay-500">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 text-center">
                <div className="relative inline-block">
                  <img 
                    src="https://randomuser.me/api/portraits/women/32.jpg" 
                    alt="Nguyễn Thị Hương" 
                    className="w-32 h-32 rounded-full object-cover shadow-xl border-4 border-sunflower/30" 
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-sunflower to-leafGreen rounded-full flex items-center justify-center shadow-lg">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy mt-4">Nguyễn Thị Hương</h3>
                <p className="text-navy/70 mb-2">Virtual Assistant</p>
                <div className="flex justify-center items-center gap-1 mb-4">
                   {[...Array(5)].map((_, i) => (
                     <Star key={`featured-star-${i}`} className="h-4 w-4 text-sunflower fill-current" />
                   ))}
                </div>
                <div className="bg-gradient-to-r from-sunflower/10 to-leafGreen/10 rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-navy">Thu nhập: $2,500/tháng</span>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 text-6xl text-sunflower/30 font-serif">"</div>
                  <blockquote className="text-lg text-navy/80 leading-relaxed italic pl-8">
                    Trước khi tham gia khóa học VAP, tôi chỉ là một nhân viên văn phòng với mức lương cố định. 
                    Sau 4 tuần học tập và 3 tháng thực hành, giờ đây tôi đã có thu nhập ổn định $2,500/tháng 
                    từ việc làm Virtual Assistant cho các khách hàng quốc tế. Điều tuyệt vời nhất là tôi có thể 
                    làm việc từ nhà và có thời gian linh hoạt cho gia đình.
                  </blockquote>
                  <div className="absolute -bottom-4 -right-4 text-6xl text-leafGreen/30 font-serif transform rotate-180">"</div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/50 rounded-xl">
                    <div className="text-2xl font-bold text-sunflower">3 tháng</div>
                    <p className="text-sm text-navy/70">Thời gian thành công</p>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-xl">
                    <div className="text-2xl font-bold text-leafGreen">5 khách hàng</div>
                    <p className="text-sm text-navy/70">Đang hợp tác</p>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-xl">
                    <div className="text-2xl font-bold text-lightBlue">100%</div>
                    <p className="text-sm text-navy/70">Hài lòng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center mb-4">
                <div className="relative">
                  <img src="https://randomuser.me/api/portraits/women/25.jpg" alt="Trần Minh Anh" className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-sunflower/30" />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-sunflower to-leafGreen rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-navy">Trần Minh Anh</h4>
                  <p className="text-sm text-navy/70">Content VA</p>
                  <div className="flex items-center gap-1 mt-1">
                     {[...Array(5)].map((_, i) => (
                       <Star key={`testimonial-1-star-${i}`} className="h-3 w-3 text-sunflower fill-current" />
                     ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-navy/80 italic leading-relaxed group-hover:text-navy transition-colors duration-300">
                "Từ một người hoàn toàn mới với VA, giờ tôi đã có thu nhập $1,800/tháng. 
                Khóa học rất thực tế và mentor luôn hỗ trợ nhiệt tình!"
              </blockquote>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-sunflower">$1,800/tháng</span>
                <span className="text-xs text-navy/60">Sau 2 tháng</span>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <div className="flex items-center mb-4">
                <div className="relative">
                  <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="Lê Văn Đức" className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-leafGreen/30" />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-leafGreen to-lightBlue rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-navy">Lê Văn Đức</h4>
                  <p className="text-sm text-navy/70">Admin VA</p>
                  <div className="flex items-center gap-1 mt-1">
                     {[...Array(5)].map((_, i) => (
                       <Star key={`testimonial-2-star-${i}`} className="h-3 w-3 text-leafGreen fill-current" />
                     ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-navy/80 italic leading-relaxed group-hover:text-navy transition-colors duration-300">
                "Khóa học đã mở ra cơ hội nghề nghiệp mới cho tôi. Từ việc làm part-time, 
                giờ tôi đã có thể làm full-time VA với thu nhập ổn định."
              </blockquote>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-leafGreen">$2,200/tháng</span>
                <span className="text-xs text-navy/60">Sau 4 tháng</span>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center mb-4">
                <div className="relative">
                  <img src="https://randomuser.me/api/portraits/women/18.jpg" alt="Phạm Thị Lan" className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-lightBlue/30" />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-lightBlue to-sunflower rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-navy">Phạm Thị Lan</h4>
                  <p className="text-sm text-navy/70">Social Media VA</p>
                  <div className="flex items-center gap-1 mt-1">
                     {[...Array(5)].map((_, i) => (
                       <Star key={`testimonial-3-star-${i}`} className="h-3 w-3 text-lightBlue fill-current" />
                     ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-navy/80 italic leading-relaxed group-hover:text-navy transition-colors duration-300">
                "Tôi đặc biệt ấn tượng với phần thực hành trên tài khoản thật. 
                Điều này giúp tôi hiểu rõ quy trình và tự tin khi làm việc với khách hàng."
              </blockquote>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-lightBlue">$1,500/tháng</span>
                <span className="text-xs text-navy/60">Sau 1.5 tháng</span>
              </div>
            </div>
            
            {/* Testimonial 4 */}
            <div className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
              <div className="flex items-center mb-4">
                <div className="relative">
                  <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="Ngô Thị Mai" className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-sunflower/30" />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-sunflower to-leafGreen rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-navy">Ngô Thị Mai</h4>
                  <p className="text-sm text-navy/70">Project Management VA</p>
                  <div className="flex items-center gap-1 mt-1">
                     {[...Array(5)].map((_, i) => (
                       <Star key={`testimonial-4-star-${i}`} className="h-3 w-3 text-sunflower fill-current" />
                     ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-navy/80 italic leading-relaxed group-hover:text-navy transition-colors duration-300">
                "Lớp học nhỏ giúp tôi được chú ý và hỗ trợ cá nhân. 
                Giảng viên luôn sẵn sàng giải đáp mọi thắc mắc của tôi."
              </blockquote>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-sunflower">$2,800/tháng</span>
                <span className="text-xs text-navy/60">Sau 5 tháng</span>
              </div>
            </div>
            
            {/* Testimonial 5 */}
            <div className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: "1.0s" }}>
              <div className="flex items-center mb-4">
                <div className="relative">
                  <img src="https://randomuser.me/api/portraits/men/28.jpg" alt="Hoàng Văn Nam" className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-leafGreen/30" />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-leafGreen to-lightBlue rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-navy">Hoàng Văn Nam</h4>
                  <p className="text-sm text-navy/70">Technical VA</p>
                  <div className="flex items-center gap-1 mt-1">
                     {[...Array(5)].map((_, i) => (
                       <Star key={`testimonial-5-star-${i}`} className="h-3 w-3 text-leafGreen fill-current" />
                     ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-navy/80 italic leading-relaxed group-hover:text-navy transition-colors duration-300">
                "Hackathon 21 ngày thực sự là thử thách tuyệt vời. 
                Tôi đã áp dụng được kiến thức vào dự án thực tế và có kết quả ngay."
              </blockquote>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-leafGreen">$3,200/tháng</span>
                <span className="text-xs text-navy/60">Sau 6 tháng</span>
              </div>
            </div>
            
            {/* Testimonial 6 */}
            <div className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: "1.1s" }}>
              <div className="flex items-center mb-4">
                <div className="relative">
                  <img src="https://randomuser.me/api/portraits/women/35.jpg" alt="Vũ Thị Hoa" className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-lightBlue/30" />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-lightBlue to-sunflower rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-navy">Vũ Thị Hoa</h4>
                  <p className="text-sm text-navy/70">Customer Service VA</p>
                  <div className="flex items-center gap-1 mt-1">
                     {[...Array(5)].map((_, i) => (
                       <Star key={`testimonial-6-star-${i}`} className="h-3 w-3 text-lightBlue fill-current" />
                     ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-navy/80 italic leading-relaxed group-hover:text-navy transition-colors duration-300">
                "Khóa học không chỉ dạy kỹ năng mà còn giúp tôi xây dựng thương hiệu cá nhân. 
                Giờ tôi có nhiều khách hàng tìm đến nhờ portfolio chuyên nghiệp."
              </blockquote>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-lightBlue">$2,000/tháng</span>
                <span className="text-xs text-navy/60">Sau 3 tháng</span>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up animation-delay-700">
            <div className="bg-gradient-to-r from-sunflower/20 to-leafGreen/20 rounded-2xl p-8 backdrop-blur-sm border border-white/30 shadow-xl">
              <h3 className="text-3xl font-bold text-navy mb-4">Bạn sẽ là câu chuyện thành công tiếp theo?</h3>
              <p className="text-navy/80 mb-6 max-w-2xl mx-auto">Tham gia cùng hàng trăm học viên đã thành công và bắt đầu hành trình VA của bạn ngay hôm nay</p>
              <Link to="/register">
                <Button className="group bg-gradient-to-r from-sunflower to-leafGreen hover:from-leafGreen hover:to-sunflower text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-110 transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <Users className="h-6 w-6 group-hover:animate-bounce" />
                    Tham Gia Ngay - Ưu Đãi Đặc Biệt
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quyền lợi đặc biệt Section */}
      <section className="py-20 bg-lightYellow/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy text-center mb-12 animate-fade-in">Quyền Lợi Đặc Biệt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
              <h3 className="text-xl font-semibold text-navy mb-3">Cộng đồng hỗ trợ trọn đời</h3>
              <p className="text-navy/70">Tham gia vào cộng đồng học viên năng động, nhận hỗ trợ và chia sẻ kinh nghiệm không giới hạn.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-semibold text-navy mb-3">Cập nhật kiến thức định kỳ</h3>
              <p className="text-navy/70">Luôn được tiếp cận những kiến thức mới nhất, cập nhật xu hướng thị trường VA.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-semibold text-navy mb-3">Cơ hội việc làm</h3>
              <p className="text-navy/70">Kết nối với các đối tác và khách hàng tiềm năng, mở ra cơ hội việc làm sau khóa học.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Học phí khóa học Section */}
      <section className="py-20 bg-warmWhite">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-navy mb-12 animate-fade-in">Học Phí Khóa Học</h2>
          <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 max-w-md mx-auto animate-fade-in-up">
            <p className="text-navy/70 text-lg mb-4">TRỌN GÓI KHÓA HỌC VIRTUAL ASSISTANT PRO TỪ A-Z</p>
            <p className="text-5xl font-extrabold text-sunflower mb-6">8,000,000 VND</p>
            <p className="text-navy/80 mb-6">Bao gồm toàn bộ nội dung học, tài liệu, hỗ trợ và quyền lợi đặc biệt.</p>
            <Link to="/login">
              <Button className="btn-primary flex items-center gap-2 group mx-auto">
                <BookOpen className="h-4 w-4" />
                Đăng Ký Ngay
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-lightYellow/30 to-warmWhite relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-28 h-28 bg-sunflower/10 rounded-full animate-float"></div>
          <div className="absolute bottom-40 right-20 w-32 h-32 bg-leafGreen/10 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute top-1/2 right-10 w-24 h-24 bg-lightBlue/15 rounded-full animate-float animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-navy mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-navy to-sunflower bg-clip-text text-transparent">
                Câu Hỏi Thường Gặp
              </span>
            </h2>
            <p className="text-xl text-navy/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Tìm câu trả lời cho những thắc mắc phổ biến về khóa học VAP
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sunflower/50 rounded-2xl"
                >
                  <h3 className="text-xl font-bold text-navy group-hover:text-sunflower transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-r from-sunflower to-leafGreen rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                    openFAQ === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                  }`}>
                    <ChevronDown className="h-5 w-5 text-white" />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <div className="border-t border-navy/10 pt-6">
                      <p className="text-navy/80 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                      
                      {/* Additional visual elements for opened FAQ */}
                      <div className="mt-4 flex items-center gap-2 opacity-70">
                        <div className="w-2 h-2 bg-sunflower rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-leafGreen rounded-full animate-pulse animation-delay-300"></div>
                        <div className="w-2 h-2 bg-lightBlue rounded-full animate-pulse animation-delay-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* FAQ CTA */}
          <div className="text-center mt-16 animate-fade-in-up animation-delay-700">
            <div className="bg-gradient-to-r from-sunflower/20 to-leafGreen/20 rounded-2xl p-8 backdrop-blur-sm border border-white/30 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-navy mb-4">Vẫn còn thắc mắc?</h3>
              <p className="text-navy/80 mb-6">
                Đội ngũ tư vấn của chúng tôi luôn sẵn sàng giải đáp mọi câu hỏi của bạn
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="group bg-gradient-to-r from-sunflower to-leafGreen hover:from-leafGreen hover:to-sunflower text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 group-hover:animate-bounce" />
                      Liên Hệ Tư Vấn
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="group bg-gradient-to-r from-lightBlue to-navy hover:from-navy hover:to-lightBlue text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 group-hover:animate-pulse" />
                      Đăng Ký Ngay
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TrainingPage;
