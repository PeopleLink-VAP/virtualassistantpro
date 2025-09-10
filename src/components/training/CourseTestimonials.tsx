import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight, Check, Users, Award } from 'lucide-react';
const CourseTestimonials = () => {
  return <section className="py-20 bg-warmWhite relative overflow-hidden">
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
                <img src="/lovable-uploads/453845bd-d65a-4bac-a31a-bee0a562c330.png" alt="Hồng Nhựt" className="w-24 h-24 rounded-full object-cover border-4 border-sunflower/30" />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-leafGreen rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-navy mt-4">Hồng Nhựt</h3>
              <p className="text-gray-600 mb-2">Customer Service</p>
              <div className="flex justify-center items-center gap-1 mb-4">
                 {[...Array(5)].map((_, i) => <Star key={`featured-star-${i}`} className="h-4 w-4 text-sunflower fill-current" />)}
              </div>
              
            </div>
            
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 text-5xl text-sunflower/30 font-serif">"</div>
                <blockquote className="text-base text-gray-700 leading-relaxed italic pl-8">Nhựt là một trong những thành viên đầu tiên của group VA, là người dù không biết Duyên nhưng ngay từ những ngày đầu cách đây 2 năm đã vẫn luôn ủng hộ group bằng cách tương tác với các bài viết. Mãi đến gần 2 năm sau, Nhựt mới quyết định đăng ký học. Là một người có bộ kĩ năng đa dạng, đặc biệt nhạy về Customer service, Tiktok và các nền tảng MMO (make money online), Nhựt học khá nhanh, ngay trong lúc học đã có job, sau đó lại còn làm cộng tác viên và hydbrid cho 2 công ty khác</blockquote>
                <div className="absolute -bottom-4 -right-4 text-5xl text-navy/30 font-serif transform rotate-180">"</div>
              </div>
              
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-xl font-bold text-sunflower">1 tháng</div>
                  <p className="text-sm text-gray-600">Thời gian thành công</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-xl font-bold text-navy">3 khách hàng</div>
                  <p className="text-sm text-gray-600">Đang hợp tác</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{
          animationDelay: "0.6s"
        }}>
            <div className="flex items-center mb-4">
              <div className="relative">
                <img src="/lovable-uploads/d6059303-9ff4-49d8-9f3d-71704bad149d.png" alt="Trúc Viên" className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-sunflower/30" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-sunflower to-navy rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-navy">Trúc Viên</h4>
                <p className="text-sm text-gray-600">Remote Personal Assistant</p>
                <div className="flex items-center gap-1 mt-1">
                   {[...Array(5)].map((_, i) => <Star key={`testimonial-1-star-${i}`} className="h-3 w-3 text-sunflower fill-current" />)}
                </div>
              </div>
            </div>
            <blockquote className="text-gray-700 italic leading-relaxed group-hover:text-navy transition-colors duration-300">Trúc Viên luôn lắng nghe feedback, nhanh nhạy trong việc scan job và đặc biệt hành động rốt rẻng. Nhờ vậy, Viên đã có được vị trí trợ lý giám đốc full-time remote ngay khi vừa xong khóa.</blockquote>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-sunflower">
            </span>
              <span className="text-xs text-gray-600">Sau 1.5 tháng</span>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{
          animationDelay: "0.7s"
        }}>
            <div className="flex items-center mb-4">
              <div className="relative">
                <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="Lê Văn Đức" className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-navy/30" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-navy to-sunflower rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-navy">Quỳnh Lai</h4>
                <p className="text-sm text-gray-600">Project Manager</p>
                <div className="flex items-center gap-1 mt-1">
                   {[...Array(5)].map((_, i) => <Star key={`testimonial-2-star-${i}`} className="h-3 w-3 text-navy fill-current" />)}
                </div>
              </div>
            </div>
            <blockquote className="text-gray-700 italic leading-relaxed group-hover:text-navy transition-colors duration-300">Hơn 10 năm làm trong ngành ngân hàng – một môi trường “cứng nhắc” – nhưng chỉ sau vài tháng, Lai đã trở thành một freelancer dày dạn trên Upwork, quản lý nhiều dự án cho khách quốc tế và còn hỗ trợ lại cho các bạn VA khác trong cộng đồng.</blockquote>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-navy">
            </span>
              <span className="text-xs text-gray-600">Sau 2 tháng</span>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{
          animationDelay: "0.8s"
        }}>
            <div className="flex items-center mb-4">
              <div className="relative">
                <img src="https://randomuser.me/api/portraits/women/18.jpg" alt="Phạm Thị Lan" className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-sunflower/30" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-sunflower to-navy rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-navy">Xuân Trang</h4>
                <p className="text-sm text-gray-600">Social Media VA</p>
                <div className="flex items-center gap-1 mt-1">
                   {[...Array(5)].map((_, i) => <Star key={`testimonial-3-star-${i}`} className="h-3 w-3 text-sunflower fill-current" />)}
                </div>
              </div>
            </div>
            <blockquote className="text-gray-700 italic leading-relaxed group-hover:text-navy transition-colors duration-300">Chỉ sau một thời gian ngắn, Trang đã nhận nhiều job đa dạng – từ nhỏ đến lớn, từ khách lẻ đến cả tập đoàn. Dù background là HR, Trang vẫn dám nhận dự án Airbnb, vì biết luôn có Duyên đứng sau backup.</blockquote>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-sunflower">
            </span>
              <span className="text-xs text-gray-600">Sau 1.5 tháng</span>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-700">
          <div className="bg-gradient-to-r from-sunflower/20 to-navy/10 rounded-2xl p-8 backdrop-blur-sm border border-white/30 shadow-xl">
            <h3 className="text-3xl font-bold text-navy mb-4">Bạn sẽ là câu chuyện thành công tiếp theo?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Tham gia cùng hàng trăm học viên đã thành công và bắt đầu
 hành trình VA của bạn ngay hôm nay</p>
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
    </section>;
};
export default CourseTestimonials;