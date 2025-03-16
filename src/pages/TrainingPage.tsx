
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Clock, Check, Users, BookOpen, ArrowRight, 
  Video, FileText, MessageSquare, Award
} from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Khóa Học VA Chuyên Nghiệp",
    description: "Khóa học toàn diện về kỹ năng và kiến thức để trở thành một Virtual Assistant thành công",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    level: "Cơ Bản đến Nâng Cao",
    duration: "12 tuần",
    students: 120,
    price: "4,500,000 VNĐ",
    features: [
      "Hơn 50 giờ nội dung video",
      "Hỗ trợ trực tiếp 1-1",
      "Thực hành dự án thực tế",
      "Chứng chỉ hoàn thành"
    ]
  },
  {
    id: 2,
    title: "Kỹ Năng Quản Lý Khách Hàng Quốc Tế",
    description: "Học cách giao tiếp và quản lý hiệu quả khách hàng từ khắp nơi trên thế giới",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    level: "Trung Cấp",
    duration: "6 tuần",
    students: 85,
    price: "2,800,000 VNĐ",
    features: [
      "Kỹ thuật giao tiếp đa văn hóa",
      "Quản lý kỳ vọng khách hàng",
      "Mẫu hợp đồng và đề xuất",
      "Giải quyết vấn đề khách hàng"
    ]
  },
  {
    id: 3,
    title: "Tư Duy Kinh Doanh cho VA",
    description: "Phát triển tư duy kinh doanh để mở rộng dịch vụ VA và tăng thu nhập",
    image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    level: "Nâng Cao",
    duration: "8 tuần",
    students: 65,
    price: "3,200,000 VNĐ",
    features: [
      "Chiến lược định giá dịch vụ",
      "Mở rộng quy mô kinh doanh",
      "Xây dựng đội ngũ VA",
      "Tự động hóa quy trình làm việc"
    ]
  },
  {
    id: 4,
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
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Decorative sunflower elements */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-sunflower/10 rounded-full animate-spin-slow"></div>
        <div className="absolute -bottom-20 left-20 w-60 h-60 bg-sunflower/5 rounded-full animate-float"></div>
        <div className="absolute top-40 left-1/4 w-16 h-16 bg-sunflower/20 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-sunflower/15 rounded-full animate-spin-slow"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-navy mb-4">Khóa Học <span className="text-sunflower">VA PRO</span></h1>
            <p className="text-navy/70 max-w-2xl mx-auto">
              Nâng cao kỹ năng và mở rộng cơ hội nghề nghiệp với các khóa học chuyên nghiệp từ Virtual Assistant PRO
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 navy-shadow flex flex-col items-center text-center hover:scale-102 transition-transform animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4">
                <Video className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nội Dung Chất Lượng Cao</h3>
              <p className="text-navy/70">Học từ những VA hàng đầu với nội dung cập nhật và phù hợp với thị trường hiện tại</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 navy-shadow flex flex-col items-center text-center hover:scale-102 transition-transform animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dự Án Thực Tế</h3>
              <p className="text-navy/70">Áp dụng kiến thức vào các dự án thực tế để xây dựng portfolio chuyên nghiệp</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 navy-shadow flex flex-col items-center text-center hover:scale-102 transition-transform animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hỗ Trợ Cá Nhân</h3>
              <p className="text-navy/70">Được tư vấn và hỗ trợ trực tiếp từ đội ngũ giảng viên trong suốt khóa học</p>
            </div>
          </div>
          
          <div className="space-y-12">
            <h2 className="text-2xl font-bold text-navy text-center mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>Các Khóa Học Nổi Bật</h2>
            
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
                        <li key={idx} className="flex items-start gap-2 group">
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
      
      <Footer />
    </div>
  );
};

export default TrainingPage;
