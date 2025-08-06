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
            Khóa Học <span className="text-sunflower font-['Big_Shoulders_Stencil']">Chuyên Nghiệp</span>
          </h2>
          <p className="text-lg text-navy/70 max-w-3xl mx-auto">
            Chúng tôi cung cấp hai hình thức đào tạo đa dạng để phù hợp với nhu cầu và thời gian của từng học viên. 
            Từ khóa học trực tuyến linh hoạt đến lớp học trực tiếp với sự tương tác cao.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* E-learning Course */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all animate-fade-in">
            <div className="w-16 h-16 bg-sunflower/20 rounded-xl flex items-center justify-center mb-6">
              <BookOpen className="text-sunflower" size={32} />
            </div>
            
            <h3 className="text-2xl font-bold text-navy mb-4">
              E-learning Course
            </h3>
            
            <p className="text-navy/80 leading-relaxed mb-6">
              Khóa học trực tuyến với nội dung đầy đủ và chi tiết, cho phép bạn học theo tốc độ riêng. 
              Bao gồm video bài giảng, tài liệu, bài tập thực hành và hỗ trợ online.
            </p>
            
            <div className="space-y-3 mb-6">
              {[
                { icon: Clock, text: "Học mọi lúc, mọi nơi" },
                { icon: BookOpen, text: "100+ video bài giảng" },
                { icon: Star, text: "Tài liệu độc quyền" },
                { icon: Users, text: "Cộng đồng học viên" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                  <feature.icon className="text-sunflower" size={18} />
                  <span className="text-navy/80">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <Link to="/vap-course">
              <Button className="btn-primary backdrop-blur-sm flex items-center gap-2 w-full hover:scale-105 transition-all">
                <BookOpen size={18} />
                Xem Chi Tiết
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          
          {/* Zoom Live Course */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-leafGreen/20 rounded-xl flex items-center justify-center mb-6">
              <Video className="text-leafGreen" size={32} />
            </div>
            
            <h3 className="text-2xl font-bold text-navy mb-4">
              Zoom Live Course
            </h3>
            
            <p className="text-navy/80 leading-relaxed mb-6">
              Lớp học trực tiếp qua Zoom với sự tương tác cao cùng giảng viên và học viên khác. 
              Được thiết kế cho những ai muốn có trải nghiệm học tập sống động và hỗ trợ tức thì.
            </p>
            
            <div className="space-y-3 mb-6">
              {[
                { icon: Video, text: "Học trực tiếp với giảng viên" },
                { icon: Users, text: "Lớp học nhỏ 8-12 người" },
                { icon: Star, text: "Tương tác và Q&A thời gian thực" },
                { icon: Clock, text: "Lịch học linh hoạt" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                  <feature.icon className="text-leafGreen" size={18} />
                  <span className="text-navy/80">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <Link to="/vap-course">
              <Button className="btn-secondary backdrop-blur-sm flex items-center gap-2 w-full hover:scale-105 transition-all">
                <Video size={18} />
                Xem Chi Tiết
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;