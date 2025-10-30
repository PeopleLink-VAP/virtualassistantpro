import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Award, Calendar, Clock, Hourglass, Star, ArrowRight } from 'lucide-react';
const TrainingHero = () => {
  return <section className="relative pt-32 pb-20 overflow-hidden bg-warmWhite">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-sunflower/20 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-navy/10 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-sunflower/10 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float animation-delay-4000"></div>
        
        {/* Clean Floating Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/40">
            <BookOpen className="h-6 w-6 text-sunflower" />
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float animation-delay-1000">
          <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/40">
            <Award className="h-8 w-8 text-navy" />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float animation-delay-2000">
          <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/40">
            <BookOpen className="h-7 w-7 text-sunflower" />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Modern Title with Clean Typography */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-navy">
              Khóa học
              <br />
              <span className="text-sunflower">
                Virtual Assistant Pro
              </span>
            </h1>
          </div>
          
          {/* Clean Description */}
          <div className="animate-fade-in-up animation-delay-300">
             <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
               Trở thành Virtual Assistant chuyên nghiệp và <span className="font-semibold text-navy">bứt phá thu nhập</span> với khóa học độc quyền.
             </p>
          </div>
          
          {/* Clean Course Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 hover:border-sunflower/30 transition-all duration-300 animate-fade-in-up" style={{
            animationDelay: "0.4s"
          }}>
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-navy mb-2">Khai Giảng VAP 18</h3>
              <p className="text-gray-600">Dự kiến học vào ngày 11/11/2025</p>
              <p className="text-gray-600">Đóng tuyển sinh ngay khi đủ số lượng đăng ký. </p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 hover:border-sunflower/30 transition-all duration-300 animate-fade-in-up" style={{
            animationDelay: "0.5s"
          }}>
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-leafGreen/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8 text-leafGreen" />
                </div>
              </div>
              <h3 className="font-semibold text-navy mb-2">Lịch Học</h3>
              <p className="text-gray-600">Thứ 3 & Thứ 5<br />(19:45 - 21:15)</p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 hover:border-sunflower/30 transition-all duration-300 animate-fade-in-up" style={{
            animationDelay: "0.6s"
          }}>
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Hourglass className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-navy mb-2">Thời Lượng</h3>
              <p className="text-gray-600 text-sm">7 buổi VA + 3 buổi tiếng Anh + 2 buổi coaching 1:1</p>
            </div>
          </div>
          
          {/* Modern CTA Button */}
          <div className="animate-fade-in-up animation-delay-700">
            <Link to="/register">
              <Button className="btn-primary backdrop-blur-sm flex items-center gap-2 text-lg px-8 py-4 hover:scale-105 transition-all mx-auto">
                <span className="relative z-10 flex items-center gap-3">
                  <Star className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Đăng ký ngay hoặc Nhận tư vấn thêm
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => <div key={`particle-${i}`} className={`absolute w-2 h-2 bg-sunflower/30 rounded-full animate-float`} style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`
      }} />)}
      </div>
    </section>;
};
export default TrainingHero;