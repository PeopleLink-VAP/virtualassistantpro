import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Podcast } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutDuyen = () => {
  return (
    <section className="py-20 bg-warmWhite relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-20 h-20 bg-sunflower/10 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-leafGreen/20 rounded-full animate-float"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-sunflower/10 rounded-2xl"></div>
              <img 
                src="/images/duyen/profile_2.jpg" 
                alt="Duyen - Virtual Assistant Pro"
                className="relative rounded-2xl shadow-lg w-full max-w-md mx-auto object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl md:text-4xl font-['Roboto_Condensed'] text-navy mb-6">
              Về <span className="text-sunflower font-['Big_Shoulders_Stencil']">Duyên</span>
            </h2>
            
            <p className="text-lg text-navy/80 mb-6 leading-relaxed">
              Với hơn 10 năm kinh nghiệm trong lĩnh vực coaching, freelancing và thành công cùng khách hàng, 
              tôi đã phát triển một lộ trình được cá nhân hóa để phù hợp với kỹ năng, nhu cầu và mục tiêu của từng học viên.
            </p>
            
            <div className="bg-sunflower/10 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-navy mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-sunflower rounded-full flex items-center justify-center text-white text-xs">✓</span>
                Tailored Roadmap
              </h3>
              <p className="text-navy/80">
                To match your skills, needs & goals - đây là phương pháp tôi áp dụng để đảm bảo 
                mỗi học viên đều có thể phát triển theo con đường phù hợp nhất với bản thân.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/blog">
                <Button className="btn-secondary backdrop-blur-sm flex items-center gap-2 w-full sm:w-auto hover:scale-105 transition-all">
                  <BookOpen size={18} />
                  Đọc thêm về Duyên
                  <ArrowRight size={16} />
                </Button>
              </Link>
              
              <Link to="/blog">
                <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto bg-transparent border border-navy text-navy hover:bg-navy hover:text-warmWhite transition-all backdrop-blur-sm hover:scale-105">
                  <Podcast size={18} />
                  Hành trình VA từ số 0
                  <ArrowRight size={16} />
                </Button>
              </Link>
              
              <Link to="/e-learning">
                <Button className="btn-primary backdrop-blur-sm flex items-center gap-2 w-full sm:w-auto hover:scale-105 transition-all">
                  <BookOpen size={18} />
                  My Course
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDuyen;