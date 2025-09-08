import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Video, Clock, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoursesSection = () => {
  return (
    <section className="py-20 bg-warmWhite relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-20 w-20 h-20 bg-sunflower/10 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-leafGreen/15 rounded-full animate-float"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Roboto_Condensed'] text-navy mb-4">
            <span className="text-sunflower font-condensed">KHÓA HỌC VIRTUAL ASSISTANT PRO</span>
          </h2>
          <p className="text-lg text-navy/70 max-w-3xl mx-auto">
            Khóa học được tổ chức trực tuyến qua Zoom với sự tương tác trực tiếp, giúp học viên vừa linh hoạt thời gian vừa nhận được hỗ trợ sát sao từ giảng viên
          </p>
        </div>
        
        {/* Main Course - Zoom Live Course */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all animate-fade-in">
            <div className="w-16 h-16 bg-leafGreen/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Video className="text-leafGreen" size={32} />
            </div>
            
            <h3 className="text-2xl font-bold text-navy mb-4 text-center">
              Zoom Live Course
            </h3>
            
            <p className="text-navy/80 leading-relaxed mb-6 text-center">
              Lớp học trực tiếp qua Zoom, tương tác với giảng viên và các học viên. 
              Lớp học được thiết kế để phù hợp với các bạn muốn hiểu đủ, hiểu đúng và hiểu sâu về nghề VA.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { icon: Users, text: "Giảng viên hỗ trợ 1:1 (không qua trợ lý)" },
                { icon: Users, text: "Lớp học nhỏ 10 - 15 người" },
                { icon: Star, text: "Hướng dẫn 10 ngách đang có nhu cầu cao trên thị trường, phù hợp với VA Việt Nam" },
                { icon: Video, text: "Lớp tiếng Anh bổ trợ miễn phí (học với giáo viên nước ngoài)" },
                { icon: Star, text: "Cơ hội được giới thiệu công việc nếu bạn hoàn thành việc học tốt và đầy đủ" },
                { icon: Clock, text: "Tập trung vào thị trường nước ngoài và các platform như Fiverr, Upwork" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                  <feature.icon className="text-leafGreen" size={18} />
                  <span className="text-navy/80">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/vap-course">
                <Button className="btn-primary backdrop-blur-sm flex items-center gap-2 hover:scale-105 transition-all mx-auto">
                  <Video size={18} />
                  Xem Chi Tiết Khóa Học
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Resources & Tools Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-['Roboto_Condensed'] text-navy mb-4">
              Resources & <span className="text-sunflower font-condensed">Tools</span>
            </h3>
            <p className="text-lg text-navy/70">
              Tài nguyên và công cụ hỗ trợ học tập
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Resources */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all animate-fade-in">
              <div className="w-16 h-16 bg-sunflower/20 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="text-sunflower" size={32} />
              </div>
              
              <h4 className="text-xl font-bold text-navy mb-4">
                Free Resources
              </h4>
              
              <p className="text-navy/80 leading-relaxed mb-6">
                Tài liệu miễn phí và hướng dẫn cơ bản để bắt đầu hành trình VA của bạn.
              </p>
              
              <div className="space-y-3 mb-6">
                {[
                  { icon: BookOpen, text: "E-book hướng dẫn VA" },
                  { icon: Star, text: "Template CV & Portfolio" },
                  { icon: Users, text: "Tham gia cộng đồng" }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <feature.icon className="text-sunflower" size={16} />
                    <span className="text-navy/80 text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/free-resources">
                <Button variant="outline" className="flex items-center gap-2 w-full bg-transparent border border-sunflower text-sunflower hover:bg-sunflower hover:text-white transition-all">
                  <BookOpen size={18} />
                  Tải Miễn Phí
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
            
            {/* Premium Tools */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-leafGreen/20 rounded-xl flex items-center justify-center mb-6">
                <Star className="text-leafGreen" size={32} />
              </div>
              
              <h4 className="text-xl font-bold text-navy mb-4">
                Premium Tools
              </h4>
              
              <p className="text-navy/80 leading-relaxed mb-6">
                Công cụ và tài liệu chuyên sâu (có trả phí)
              </p>
              
              <div className="space-y-3 mb-6">
                {[
                  { icon: Star, text: "Công cụ & công nghệ thông dụng" },
                  { icon: Users, text: "Buổi coaching 1:1 - Thời lượng: 1 tiếng" },
                  { icon: Clock, text: "Bài đọc đánh giá, phân tích chuyên sâu" }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <feature.icon className="text-leafGreen" size={16} />
                    <span className="text-navy/80 text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;