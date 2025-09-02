import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Star, BookOpen, FileText, Video, Users, MessageSquare, ArrowRight, Award
} from 'lucide-react';

const CourseFeatures = () => {
  return (
    <section className="py-20 bg-warmWhite relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-24 h-24 bg-sunflower/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-navy/10 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-sunflower/10 rounded-full animate-float animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-6 animate-fade-in">
            Điểm Nổi Bật Khóa Học
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Khám phá những tính năng độc đáo và giá trị vượt trội mà khóa học mang lại
          </p>
        </div>
        
        {/* Clean Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 hover:border-sunflower/30 transition-all duration-300 animate-fade-in-up">
            <div className="w-16 h-16 bg-gradient-to-br from-navy to-sunflower rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-4 group-hover:text-sunflower transition-colors duration-300">Hướng dẫn Fiverr từ A-Z</h3>
            <p className="text-gray-600 leading-relaxed">Học cách thiết lập, tối ưu và phát triển sự nghiệp trên nền tảng freelance Fiverr một cách bài bản và chuyên nghiệp.</p>
            <div className="mt-6 flex items-center text-sm text-sunflower font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowRight className="h-4 w-4 mr-2" />
              Tìm hiểu thêm
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 hover:border-sunflower/30 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 bg-gradient-to-br from-sunflower to-navy rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-4 group-hover:text-sunflower transition-colors duration-300">10 Ngách Nghề VA Đa Dạng</h3>
            <p className="text-gray-600 leading-relaxed">Khám phá 10 lĩnh vực chuyên môn khác nhau với ví dụ thực tế và tình huống ứng dụng cụ thể, giúp bạn chọn đúng hướng đi.</p>
            <div className="mt-6 flex items-center text-sm text-sunflower font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowRight className="h-4 w-4 mr-2" />
              Khám phá ngay
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 hover:border-sunflower/30 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 bg-gradient-to-br from-navy to-sunflower rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-4 group-hover:text-sunflower transition-colors duration-300">Portfolio Chuẩn Chỉnh</h3>
            <p className="text-gray-600 leading-relaxed">"Cầm tay chỉ việc" hướng dẫn bạn tạo dựng portfolio chuyên nghiệp, gây ấn tượng mạnh với khách hàng.</p>
            <div className="mt-6 flex items-center text-sm text-sunflower font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowRight className="h-4 w-4 mr-2" />
              Xem mẫu
            </div>
          </div>
        
          {/* Feature 4 */}
          <div className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 hover:border-sunflower/30 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="w-16 h-16 bg-gradient-to-br from-sunflower to-navy rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Video className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-4 group-hover:text-sunflower transition-colors duration-300">Thực Hành Tài Khoản Thật</h3>
            <p className="text-gray-600 leading-relaxed">Trải nghiệm học tập trực tiếp trên tài khoản thật của giảng viên với các tình huống thực tế.</p>
            <div className="mt-6 flex items-center text-sm text-sunflower font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowRight className="h-4 w-4 mr-2" />
              Trải nghiệm
            </div>
          </div>
          
          {/* Feature 5 */}
          <div className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 hover:border-sunflower/30 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="w-16 h-16 bg-gradient-to-br from-navy to-sunflower rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-4 group-hover:text-sunflower transition-colors duration-300">Lớp Học Nhỏ Thân Mật</h3>
            <p className="text-gray-600 leading-relaxed">Môi trường học tập lý tưởng với lớp học nhỏ từ 10-15 thành viên, tăng cường tương tác và hỗ trợ cá nhân.</p>
            <div className="mt-6 flex items-center text-sm text-sunflower font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowRight className="h-4 w-4 mr-2" />
              Tham gia ngay
            </div>
          </div>
          
          {/* Feature 6 */}
          <div className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 hover:border-sunflower/30 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="w-16 h-16 bg-gradient-to-br from-sunflower to-navy rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-4 group-hover:text-sunflower transition-colors duration-300">Tư Vấn Không Giới Hạn</h3>
            <p className="text-gray-600 leading-relaxed">Nhận sự hỗ trợ và tư vấn trực tiếp từ giảng viên trong suốt quá trình học và sau khóa học.</p>
            <div className="mt-6 flex items-center text-sm text-sunflower font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowRight className="h-4 w-4 mr-2" />
              Liên hệ ngay
            </div>
          </div>
        </div>
        
        {/* Modern Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-700">
          <div className="bg-gradient-to-r from-sunflower/20 to-navy/10 rounded-3xl p-8 backdrop-blur-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-navy mb-4">Sẵn sàng bắt đầu hành trình?</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">Đừng bỏ lỡ cơ hội trở thành Virtual Assistant chuyên nghiệp với mức thu nhập ổn định</p>
            <Link to="/register">
              <Button className="group bg-gradient-to-r from-navy to-sunflower hover:from-sunflower hover:to-navy text-white font-semibold py-4 px-8 rounded-2xl text-lg border border-sunflower/20 transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-3">
                  <Award className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Đăng Ký Khóa Học Ngay
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;