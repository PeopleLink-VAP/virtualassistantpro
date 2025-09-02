import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Clock, Check, Users, BookOpen, ArrowRight, Award, MessageSquare
} from 'lucide-react';

const LearningPath = () => {
  return (
    <section className="py-20 bg-warmWhite relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-24 h-24 bg-sunflower/10 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 bg-navy/10 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-sunflower/10 rounded-full animate-float animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-6 animate-fade-in">
            Lộ Trình Học Tập
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Hành trình từ người mới bắt đầu đến Virtual Assistant chuyên nghiệp
          </p>
        </div>
        
        {/* Modern Course Overview Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 mb-16 animate-fade-in-up animation-delay-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Khóa học Virtual Assistant Pro" 
                className="w-full h-80 object-cover rounded-2xl hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent rounded-2xl flex items-end p-6">
                <div className="text-white">
                  <span className="bg-gradient-to-r from-sunflower to-navy text-white text-sm font-semibold px-4 py-2 rounded-full">
                    Cơ Bản đến Trung Cấp
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">Khóa học Virtual Assistant Pro</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Virtual Assistant Pro không chỉ là một khóa học nghề - đây là nơi bạn được trang bị kiến thức thực tế, 
                  thực hành trực tiếp, và tiếp cận những câu chuyện thật từ khách hàng và học viên đi trước.
                </p>
              </div>
              
              {/* Key Benefits */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-sunflower to-navy rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-600">Bước vào thế giới freelancer toàn cầu</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-navy to-sunflower rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-600">Xây dựng sự nghiệp ổn định và lâu dài</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-sunflower to-navy rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-600">Có mentor đồng hành không đi một mình</span>
                </div>
              </div>
              
              {/* Course Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-navy" />
                    <span className="font-bold text-navy">4 tuần</span>
                  </div>
                  <p className="text-sm text-gray-600">Thời lượng</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-sunflower" />
                    <span className="font-bold text-navy">10-15</span>
                  </div>
                  <p className="text-sm text-gray-600">Học viên</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-navy" />
                    <span className="font-bold text-navy">100%</span>
                  </div>
                  <p className="text-sm text-gray-600">Chứng chỉ</p>
                </div>
              </div>
              
              {/* Price and CTA */}
              <div className="bg-gradient-to-r from-sunflower/20 to-navy/10 rounded-2xl p-6 mt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Học phí trọn gói</p>
                    <p className="text-2xl font-bold text-navy">8,000,000 VNĐ</p>
                  </div>
                  <Link to="/register">
                    <Button className="group bg-gradient-to-r from-navy to-sunflower hover:from-sunflower hover:to-navy text-white font-semibold py-3 px-6 rounded-2xl border border-sunflower/20 transform hover:scale-105 transition-all duration-300">
                      <span className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Đăng Ký Ngay
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interactive Learning Timeline */}
        <div className="relative">
          <h3 className="text-3xl font-bold text-navy text-center mb-12 animate-fade-in">Chi Tiết Chương Trình Học</h3>
          
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-navy via-sunflower to-navy rounded-full opacity-30"></div>
          
          {/* Timeline Items */}
          <div className="space-y-16">
            {/* Week 1 */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-r from-navy to-sunflower w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="lg:text-right">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <h4 className="text-xl font-bold text-navy mb-3">Tuần 1: Nền Tảng VA</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Tổng quan ngành VA và xu hướng thị trường</li>
                      <li>• Xác định thế mạnh cá nhân</li>
                      <li>• Thiết lập môi trường làm việc chuyên nghiệp</li>
                      <li>• Kỹ năng giao tiếp qua email & chat</li>
                    </ul>
                  </div>
                </div>
                <div className="lg:pl-8">
                  <div className="text-gray-500 italic">
                    "Xây dựng nền tảng vững chắc cho sự nghiệp VA của bạn"
                  </div>
                </div>
              </div>
            </div>
            
            {/* Week 2 */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-r from-sunflower to-navy w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="lg:pr-8 order-2 lg:order-1">
                  <div className="text-gray-500 italic">
                    "Thành thạo các công cụ thiết yếu của VA chuyên nghiệp"
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <h4 className="text-xl font-bold text-navy mb-3">Tuần 2: Kỹ Năng & Công Cụ</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Google Workspace: Drive, Docs, Sheets, Slides</li>
                      <li>• Quản lý lịch và cuộc hẹn chuyên nghiệp</li>
                      <li>• Công cụ quản lý dự án: Trello, Asana, ClickUp</li>
                      <li>• Tự động hóa với Zapier</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Week 3 */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-r from-navy to-sunflower w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="lg:text-right">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <h4 className="text-xl font-bold text-navy mb-3">Tuần 3: Marketing & Thương Hiệu</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Xây dựng portfolio VA chuyên nghiệp</li>
                      <li>• Thiết kế hồ sơ Fiverr/Upwork thu hút</li>
                      <li>• Chiến lược định giá dịch vụ hiệu quả</li>
                      <li>• Tối ưu LinkedIn để thu hút khách hàng</li>
                    </ul>
                  </div>
                </div>
                <div className="lg:pl-8">
                  <div className="text-gray-500 italic">
                    "Tạo dựng thương hiệu cá nhân nổi bật và thu hút khách hàng"
                  </div>
                </div>
              </div>
            </div>
            
            {/* Week 4 */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-r from-sunflower to-navy w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="lg:pr-8 order-2 lg:order-1">
                  <div className="text-gray-500 italic">
                    "Sẵn sàng khởi nghiệp và phát triển sự nghiệp VA thành công"
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <h4 className="text-xl font-bold text-navy mb-3">Tuần 4: Thực Hành & Khởi Nghiệp</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Hackathon 21 ngày: Dự án thực tế</li>
                      <li>• Phản hồi từ chuyên gia</li>
                      <li>• Hoàn thiện portfolio và chiến lược</li>
                      <li>• Tư vấn cá nhân với giảng viên</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         
         {/* Consultation CTA */}
         <div className="mt-16 bg-gradient-to-r from-sunflower/20 to-navy/10 rounded-xl p-8 shadow-lg text-center animate-fade-in" style={{ animationDelay: "0.9s" }}>
           <h3 className="text-2xl font-bold text-navy mb-4">Bạn cần tư vấn thêm?</h3>
           <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
             Đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn chọn khóa học phù hợp nhất với mục tiêu nghề nghiệp của bạn
           </p>
           <Link to="/contact">
             <Button className="bg-gradient-to-r from-navy to-sunflower hover:from-sunflower hover:to-navy text-white font-semibold py-3 px-6 rounded-2xl flex items-center gap-2 group hover:scale-105 transition-transform mx-auto">
               <MessageSquare className="h-5 w-5" />
               Liên Hệ Tư Vấn
               <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
             </Button>
           </Link>
         </div>
       </div>
     </section>
  );
};

export default LearningPath;