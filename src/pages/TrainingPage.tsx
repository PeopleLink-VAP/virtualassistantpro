
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Clock, Check, Users, BookOpen, ArrowRight, 
  Video, FileText, MessageSquare, Award, Calendar, Hourglass, Star
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
  return (
    <div className="min-h-screen bg-warmWhite">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-warmWhite to-lightYellow">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-extrabold text-navy mb-6 leading-tight">
              Khóa Học <span className="text-sunflower">Fiverr Từ A-Z</span>
            </h1>
            <p className="text-navy/80 text-xl max-w-3xl mx-auto mb-10">
              Trở thành Virtual Assistant chuyên nghiệp và bứt phá thu nhập với khóa học độc quyền từ A-Z về Fiverr.
            </p>
            <div className="flex justify-center items-center space-x-8 text-navy/90 text-lg font-medium">
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <Calendar className="h-6 w-6 text-sunflower" />
                <span>Khai giảng: Tháng 9/2025</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <Clock className="h-6 w-6 text-sunflower" />
                <span>Lịch học: Thứ 3 & Thứ 5 (19:30-21:30)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <Hourglass className="h-6 w-6 text-sunflower" />
                <span>Thời lượng: 10 buổi + 1 buổi 1:1 coaching</span>
              </div>
            </div>
          </div>
        </div>
        {/* Glassmorphism background elements */}
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-sunflower/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-leafGreen/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-lightBlue/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </section>

      {/* Giới thiệu Section */}
      <section className="py-20 bg-warmWhite">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy text-center mb-12 animate-fade-in">Giới Thiệu Khóa Học</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
              <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <Star className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Hướng dẫn Fiverr từ A-Z</h3>
              <p className="text-navy/70">Học cách thiết lập, tối ưu và phát triển sự nghiệp trên nền tảng freelance Fiverr một cách bài bản.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <BookOpen className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Kiến thức & Khái niệm mới</h3>
              <p className="text-navy/70">Tiếp cận những kiến thức và khái niệm hoàn toàn mới, giúp bạn đi trước đón đầu thị trường.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <FileText className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Xây dựng Portfolio chuẩn chỉnh</h3>
              <p className="text-navy/70">"Cầm tay chỉ việc" hướng dẫn bạn tạo dựng một portfolio chuyên nghiệp, gây ấn tượng mạnh.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <Users className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Lớp học nhỏ thân mật</h3>
              <p className="text-navy/70">Môi trường học tập lý tưởng với lớp học nhỏ chỉ từ 8-12 thành viên, tăng cường tương tác.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <MessageSquare className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Tư vấn trực tiếp không giới hạn</h3>
              <p className="text-navy/70">Nhận sự hỗ trợ và tư vấn trực tiếp từ giảng viên trong suốt quá trình học và sau khóa học.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <Award className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Xây dựng thương hiệu cá nhân</h3>
              <p className="text-navy/70">Hướng dẫn chi tiết cách tạo bộ nhận diện thương hiệu cá nhân chuyên nghiệp, độc đáo.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <Clock className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Hackathon 21 ngày</h3>
              <p className="text-navy/70">Thử thách Hackathon 21 ngày thực chiến, áp dụng kiến thức vào dự án thực tế.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <Video className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Bán dịch vụ đa nền tảng</h3>
              <p className="text-navy/70">Chiến lược bán dịch vụ trên nhiều nền tảng khác nhau như Upwork, LinkedIn, Instagram, v.v.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Các Khóa Học Nổi Bật Section (Updated to reflect single course) */}
      <section className="py-20 bg-warmWhite">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy text-center mb-12 animate-fade-in">Nội Dung Khóa Học</h2>
          <div className="space-y-12">
            {courses.map((course, index) => (
              <div 
                key={course.id} 
                className={`bg-white/70 backdrop-blur-sm rounded-xl navy-shadow overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex animate-fade-in hover:shadow-lg transition-shadow`}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <span className="bg-sunflower text-navy text-xs font-bold px-2 py-1 rounded-full">{course.level}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 md:w-3/5">
                  <h3 className="text-xl font-bold text-navy mb-2">{course.title}</h3>
                  <p className="text-navy/70 mb-4">{course.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-1 text-sm text-navy/70">
                      <Clock className="h-4 w-4 text-sunflower" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-navy/70">
                      <Users className="h-4 w-4 text-sunflower" />
                      {course.students} học viên
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium text-navy">
                      <Award className="h-4 w-4 text-sunflower" />
                      Cấp chứng chỉ
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-2">Bạn sẽ học được:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {course.features.map((feature, idx) => (
                        <li key={feature} className="flex items-start gap-2 group">
                          <Check className="h-5 w-5 text-sunflower flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="text-navy/80 text-sm group-hover:text-navy transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-sm text-navy/70">Học phí</span>
                      <p className="text-xl font-bold text-navy">{course.price}</p>
                    </div>
                    
                    <Link to="/login">
                      <Button className="btn-primary flex items-center gap-2 group">
                        <BookOpen className="h-4 w-4" />
                        Đăng Ký Ngay
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
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
            <Link to="/login">
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
              <>
                <img src="/images/groups/group_1.jpg" alt="Group 1" className="h-64 mx-4 rounded-lg shadow-lg object-cover" />
                <img src="/images/groups/group_2.jpg" alt="Group 2" className="h-64 mx-4 rounded-lg shadow-lg object-cover" />
                <img src="/images/groups/group_3.jpg" alt="Group 3" className="h-64 mx-4 rounded-lg shadow-lg object-cover" />
                <img src="/images/groups/group_4.jpg" alt="Group 4" className="h-64 mx-4 rounded-lg shadow-lg object-cover" />
                <img src="/images/groups/group_5.jpg" alt="Group 5" className="h-64 mx-4 rounded-lg shadow-lg object-cover" />
                <img src="/images/groups/group_6.jpg" alt="Group 6" className="h-64 mx-4 rounded-lg shadow-lg object-cover" />
                <img src="/images/groups/group_7.jpg" alt="Group 7" className="h-64 mx-4 rounded-lg shadow-lg object-cover" />
              </>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-warmWhite">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy text-center mb-12 animate-fade-in">Cảm Nhận Học Viên</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white border-opacity-30 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <img src={`https://randomuser.me/api/portraits/women/${index + 1}.jpg`} alt="Student" className="w-16 h-16 rounded-full object-cover mr-4 shadow-md" />
                  <div>
                    <p className="font-semibold text-navy">Học viên {index + 1}</p>
                    <p className="text-sm text-navy/70">Virtual Assistant</p>
                  </div>
                </div>
                <p className="text-navy/80 italic">"Khóa học thực sự đã thay đổi cách tôi làm việc. Kiến thức rất thực tế và giảng viên cực kỳ nhiệt tình!"</p>
              </div>
            ))}
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
            <p className="text-navy/70 text-lg mb-4">Trọn gói khóa học Fiverr từ A-Z</p>
            <p className="text-5xl font-extrabold text-sunflower mb-6">9.500.000 VNĐ</p>
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

      {/* Câu hỏi thường gặp Section */}
      <section className="py-20 bg-lightYellow/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy text-center mb-12 animate-fade-in">Câu Hỏi Thường Gặp</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white border-opacity-30 animate-fade-in-up">
              <h3 className="text-xl font-semibold text-navy mb-2">Khóa học này phù hợp với ai?</h3>
              <p className="text-navy/70">Khóa học phù hợp với những người muốn bắt đầu sự nghiệp Virtual Assistant, những người muốn tối ưu hóa và phát triển công việc trên Fiverr, hoặc bất kỳ ai muốn tìm hiểu về các ngách mới trong ngành VA.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white border-opacity-30 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-semibold text-navy mb-2">Tôi có cần kinh nghiệm trước không?</h3>
              <p className="text-navy/70">Không, khóa học được thiết kế từ cơ bản đến nâng cao, phù hợp cho cả người mới bắt đầu và những người đã có kinh nghiệm nhưng muốn nâng cao kỹ năng.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white border-opacity-30 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-semibold text-navy mb-2">Làm thế nào để đăng ký khóa học?</h3>
              <p className="text-navy/70">Bạn có thể đăng ký trực tiếp trên trang web này bằng cách nhấn vào nút "Đăng Ký Ngay" hoặc liên hệ với chúng tôi để được tư vấn chi tiết.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TrainingPage;
