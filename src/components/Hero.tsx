
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const slideImages = [
  '/images/groups/group_1.jpg',
  '/images/groups/group_2.jpg',
  '/images/groups/group_3.jpg'
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      {/* Decorative sunflower petals */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-sunflower/20 animate-spin-slow"></div>
      <div className="absolute top-40 left-10 w-16 h-16 rounded-full bg-sunflower/30 animate-float"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-sunflower/10 animate-spin-slow"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-sunflower/20 animate-float"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Roboto_Condensed'] text-navy leading-tight mb-4 animate-fade-in">
              Khóa Học Nghề
              <span className="text-sunflower font-condensed">Virtual Assistant Pro</span> 
              Chuyên Nghiệp
            </h1>
            
            <p className="text-lg text-navy/80 mb-8 max-w-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Mình tin rằng để thành công, chúng ta cần phải học chuyên sâu về con đường mình đi. Khóa học là nơi mình "truyền nghề", "chia sẻ hết lòng" về các kinh nghiệm của mình bao năm qua.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Link to="/courses-view">
                <Button className="btn-primary backdrop-blur-sm flex items-center gap-2 text-base w-full sm:w-auto hover:scale-105 transition-all">
                  <BookOpen size={20} />
                  Xem Khóa Học
                  <ArrowRight size={16} />
                </Button>
              </Link>
              
              <Link to="/login">
                <Button className="btn-secondary backdrop-blur-sm flex items-center gap-2 text-base w-full sm:w-auto hover:scale-105 transition-all">
                  <Users size={20} />
                  Đăng Nhập Thành Viên
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-6 text-navy/80 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-sunflower/70 to-leafGreen/70 border-2 border-warmWhite flex items-center justify-center text-xs text-warmWhite font-semibold animate-pulse">
                    VA
                  </div>
                ))}
              </div>
              <p>Đã đào tạo hơn 200 học viên thành công</p>
            </div>
          </div>
          
          {/* Hero slideshow */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 z-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-leafGreen/10 rounded-2xl"></div>
              <div className="w-full h-full bg-gradient-to-br from-sunflower/30 to-navy/20 backdrop-blur-sm rounded-2xl p-8 relative shadow-lg">
                <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-xl">
                  
                  {/* Slideshow */}
                  <div className="mb-4 overflow-hidden rounded-lg relative h-64">
                    {slideImages.map((src, index) => (
                      <img 
                        key={index}
                        src={src} 
                        alt={`Virtual Assistant group ${index + 1}`}
                        className={`absolute w-full h-full object-cover object-center transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                      />
                    ))}
                    
                    {/* Slideshow indicators */}
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                      {slideImages.map((_, index) => (
                        <button 
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-sunflower w-4' : 'bg-navy/30'}`}
                          onClick={() => setCurrentSlide(index)}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-sunflower rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    Khóa Học Virtual Assistant Pro
                  </h3>
                  <p className="text-navy/70 mb-4">Đào tạo kỹ năng chuyên nghiệp, xây dựng sự nghiệp vững chắc</p>
                  
                  <div className="space-y-3">
                    {[
                      "Hướng dẫn Fiverr từ A-Z",
                      "Tạo portfolio chuẩn chỉnh",
                      "Tư vấn trực tiếp không giới hạn",
                      "Lớp học nhỏ 8-12 thành viên"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                        <span className="w-5 h-5 bg-leafGreen/20 text-leafGreen rounded-full flex items-center justify-center text-xs">✓</span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
