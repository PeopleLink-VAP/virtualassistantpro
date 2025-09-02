import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight, Check, Users, Award } from 'lucide-react';

const CourseTestimonials = () => {
  return (
    <section className="py-20 bg-warmWhite relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-24 h-24 bg-sunflower/10 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-navy/10 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-sunflower/10 rounded-full animate-float animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-6 animate-fade-in">
            Câu Chuyện Thành Công
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Những chia sẻ chân thật từ học viên đã thành công với khóa học VAP
          </p>
        </div>
        
        {/* Clean Featured Testimonial */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-100 mb-16 animate-fade-in-up animation-delay-500">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 text-center">
              <div className="relative inline-block">
                <img 
                  src="https://randomuser.me/api/portraits/women/32.jpg" 
                  alt="Nguyễn Thị Hương" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-sunflower/30" 
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-leafGreen rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-navy mt-4">Nguyễn Thị Hương</h3>
              <p className="text-gray-600 mb-2">Virtual Assistant</p>
              <div className="flex justify-center items-center gap-1 mb-4">
                 {[...Array(5)].map((_, i) => (
                   <Star key={`featured-star-${i}`} className="h-4 w-4 text-sunflower fill-current" />
                 ))}
              </div>
              <div className="bg-leafGreen/20 rounded-full px-4 py-2">
                <span className="text-sm font-semibold text-leafGreen">Thu nhập: $2,500/tháng</span>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 text-5xl text-sunflower/30 font-serif">"</div>
                <blockquote className="text-base text-gray-700 leading-relaxed italic pl-8">
                  Trước khi tham gia khóa học VAP, tôi chỉ là một nhân viên văn phòng với mức lương cố định. 
                  Sau 4 tuần học tập và 3 tháng thực hành, giờ đây tôi đã có thu nhập ổn định $2,500/tháng 
                  từ việc làm Virtual Assistant cho các khách hàng quốc tế. Điều tuyệt vời nhất là tôi có thể 
                  làm việc từ nhà và có thời gian linh hoạt cho gia đình.
                </blockquote>
                <div className="absolute -bottom-4 -right-4 text-5xl text-navy/30 font-serif transform rotate-180">"</div>
              </div>
              
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-xl font-bold text-sunflower">3 tháng</div>
                  <p className="text-sm text-gray-600">Thời gian thành công</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-xl font-bold text-navy">5 khách hàng</div>
                  <p className="text-sm text-gray-600">Đang hợp tác</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-xl font-bold text-sunflower">100%</div>
                  <p className="text-sm text-gray-600">Hài lòng</p>
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
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-sunflower to-navy rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-navy">Trần Minh Anh</h4>
                <p className="text-sm text-gray-600">Content VA</p>
                <div className="flex items-center gap-1 mt-1">
                   {[...Array(5)].map((_, i) => (
                     <Star key={`testimonial-1-star-${i}`} className="h-3 w-3 text-sunflower fill-current" />
                   ))}
                </div>
              </div>
            </div>
            <blockquote className="text-gray-700 italic leading-relaxed group-hover:text-navy transition-colors duration-300">
              "Từ một người hoàn toàn mới với VA, giờ tôi đã có thu nhập $1,800/tháng. 
              Khóa học rất thực tế và mentor luôn hỗ trợ nhiệt tình!"
            </blockquote>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-sunflower">$1,800/tháng</span>
              <span className="text-xs text-gray-600">Sau 2 tháng</span>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <div className="flex items-center mb-4">
              <div className="relative">
                <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="Lê Văn Đức" className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-navy/30" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-navy to-sunflower rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-navy">Lê Văn Đức</h4>
                <p className="text-sm text-gray-600">Admin VA</p>
                <div className="flex items-center gap-1 mt-1">
                   {[...Array(5)].map((_, i) => (
                     <Star key={`testimonial-2-star-${i}`} className="h-3 w-3 text-navy fill-current" />
                   ))}
                </div>
              </div>
            </div>
            <blockquote className="text-gray-700 italic leading-relaxed group-hover:text-navy transition-colors duration-300">
              "Khóa học đã mở ra cơ hội nghề nghiệp mới cho tôi. Từ việc làm part-time, 
              giờ tôi đã có thể làm full-time VA với thu nhập ổn định."
            </blockquote>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-navy">$2,200/tháng</span>
              <span className="text-xs text-gray-600">Sau 4 tháng</span>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center mb-4">
              <div className="relative">
                <img src="https://randomuser.me/api/portraits/women/18.jpg" alt="Phạm Thị Lan" className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-sunflower/30" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-sunflower to-navy rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-navy">Phạm Thị Lan</h4>
                <p className="text-sm text-gray-600">Social Media VA</p>
                <div className="flex items-center gap-1 mt-1">
                   {[...Array(5)].map((_, i) => (
                     <Star key={`testimonial-3-star-${i}`} className="h-3 w-3 text-sunflower fill-current" />
                   ))}
                </div>
              </div>
            </div>
            <blockquote className="text-gray-700 italic leading-relaxed group-hover:text-navy transition-colors duration-300">
              "Tôi đặc biệt ấn tượng với phần thực hành trên tài khoản thật. 
              Điều này giúp tôi hiểu rõ quy trình và tự tin khi làm việc với khách hàng."
            </blockquote>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-sunflower">$1,500/tháng</span>
              <span className="text-xs text-gray-600">Sau 1.5 tháng</span>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-700">
          <div className="bg-gradient-to-r from-sunflower/20 to-navy/10 rounded-2xl p-8 backdrop-blur-sm border border-white/30 shadow-xl">
            <h3 className="text-3xl font-bold text-navy mb-4">Bạn sẽ là câu chuyện thành công tiếp theo?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Tham gia cùng hàng trăm học viên đã thành công và bắt đầu hành trình VA của bạn ngay hôm nay</p>
            <Link to="/register">
              <Button className="btn-primary backdrop-blur-sm flex items-center gap-2 text-lg px-8 py-4 hover:scale-105 transition-all mx-auto">
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
  );
};

export default CourseTestimonials;