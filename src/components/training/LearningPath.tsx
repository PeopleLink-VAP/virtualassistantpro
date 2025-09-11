import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock, Check, Users, BookOpen, ArrowRight, Award, MessageSquare } from 'lucide-react';
const LearningPath = () => {
  return <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-24 h-24 bg-transparent rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 bg-transparent rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-transparent rounded-full animate-float animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
            Lộ Trình Học Tập
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Hành trình từ người mới bắt đầu đến Virtual Assistant chuyên nghiệp
          </p>
        </div>
        
        {/* Modern Course Overview Card */}
        <div className="bg-transparent rounded-3xl p-8 border border-gray-300 mb-16 animate-fade-in-up animation-delay-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Khóa học Virtual Assistant Pro" className="w-full h-80 object-cover rounded-2xl hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-transparent rounded-2xl flex items-end p-6">
                <div className="text-gray-900">
                  <span className="bg-navy text-white text-sm font-semibold px-4 py-2 rounded-full">
                    Cơ Bản đến Trung Cấp
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Khóa học Virtual Assistant Pro</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Virtual Assistant Pro không chỉ là một khóa học nghề - đây là nơi bạn được trang bị kiến thức thực tế, 
                  thực hành trực tiếp, và tiếp cận những câu chuyện thật từ khách hàng và học viên đi trước.
                </p>
              </div>
              
              {/* Key Benefits */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-leafGreen rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">Bước vào thế giới freelancer toàn cầu</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-sunflower rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">Xây dựng sự nghiệp ổn định và lâu dài</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">Có mentor đồng hành, không đi một mình</span>
                </div>
              </div>
              
              {/* Course Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-navy" />
                    <span className="font-bold text-gray-900">4 tuần</span>
                  </div>
                  <p className="text-sm text-gray-700">Thời lượng</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-sunflower" />
                    <span className="font-bold text-gray-900">10-15</span>
                  </div>
                  <p className="text-sm text-gray-700">Học viên</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-navy" />
                    <span className="font-bold text-gray-900">100%</span>
                  </div>
                  <p className="text-sm text-gray-700">Chứng chỉ</p>
                </div>
              </div>
              
              {/* Price and CTA */}
              <div className="bg-gray-100 rounded-2xl p-6 mt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-700 mb-1">Học phí trọn gói</p>
                    <p className="text-2xl font-bold text-gray-900">8,000,000 VNĐ</p>
                  </div>
                  <Link to="/register">
                    <Button className="group bg-navy hover:bg-sunflower text-white font-semibold py-3 px-6 rounded-2xl border border-gray-300 transform hover:scale-105 transition-all duration-300">
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
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-fade-in">Chi Tiết Chương Trình Học</h3>
          
          {/* Dual Track Headers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-navy rounded-2xl p-4 shadow-lg">
                <h4 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  Lộ Trình VA Training
                </h4>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-leafGreen rounded-2xl p-4 shadow-lg">
                <h4 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                  <MessageSquare className="h-6 w-6" />
                  Hỗ Trợ Tiếng Anh Miễn Phí
                </h4>
              </div>
            </div>
          </div>
          
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-400 rounded-full opacity-30"></div>
          
          {/* Timeline Items */}
          <div className="space-y-16">
            {/* Week 1 */}
            <div className="relative animate-fade-in-up" style={{
            animationDelay: "0.6s"
          }}>
              <div className="flex items-center justify-center">
                <div className="bg-navy w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="lg:text-right">
                  <div className="bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Tuần 1: Hiểu nghề & Hiểu mình & Checklist làm VA</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Liên hệ để nhận Module chi tiết</li>
                    </ul>
                  </div>
                </div>
                <div className="lg:pl-8">
                  <div className="bg-leafGreen/10 rounded-xl p-6 border-2 border-leafGreen/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-leafGreen rounded-full flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 text-white" />
                      </div>
                      <h5 className="font-bold text-leafGreen">Buổi Tiếng Anh Miễn Phí</h5>
                    </div>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• <strong>Luyện phỏng vấn tiếng Anh:</strong> Chuẩn bị cho interview với client nước ngoài</li>
                      <li>• <strong>Kỹ năng giao tiếp:</strong> Học cách tương tác chuyên nghiệp với giáo viên bản xứ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Week 2 */}
            <div className="relative animate-fade-in-up" style={{
            animationDelay: "0.7s"
          }}>
              <div className="flex items-center justify-center">
                <div className="bg-sunflower w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="lg:pr-8 order-2 lg:order-1">
                  <div className="bg-leafGreen/10 rounded-xl p-6 border-2 border-leafGreen/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-leafGreen rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <h5 className="font-bold text-leafGreen">Tiếp Tục Hỗ Trợ</h5>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Các buổi trao đổi bổ sung và Q&A về tiếng Anh chuyên ngành VA
                    </p>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Tuần 2: 10 ngách VA phổ biến và có nhu cầu cao </h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Liên hệ để nhận Module chi tiết</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Week 3 */}
            <div className="relative animate-fade-in-up" style={{
            animationDelay: "0.8s"
          }}>
              <div className="flex items-center justify-center">
                <div className="bg-navy w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="lg:text-right">
                  <div className="bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                     <h4 className="text-xl font-bold text-gray-900 mb-3">Tuần 3: Hiểu về khách hàng và platform (Fiverr, Upwork, Linkedin, Facebook, etc.)</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Liên hệ để nhận Module chi tiết</li>
                    </ul>
                  </div>
                </div>
                <div className="lg:pl-8">
                  <div className="bg-leafGreen/10 rounded-xl p-6 border-2 border-leafGreen/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-leafGreen rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <h5 className="font-bold text-leafGreen">Thực Hành Giao Tiếp</h5>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Luyện tập các câu hỏi phỏng vấn và tình huống giao tiếp thực tế
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Week 4 */}
            <div className="relative animate-fade-in-up" style={{
            animationDelay: "0.9s"
          }}>
              <div className="flex items-center justify-center">
                <div className="bg-sunflower w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="lg:pr-8 order-2 lg:order-1">
                  <div className="bg-leafGreen/10 rounded-xl p-6 border-2 border-leafGreen/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-leafGreen rounded-full flex items-center justify-center">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                      <h5 className="font-bold text-leafGreen">Tổng Kết & Feedback</h5>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Đánh giá tiến bộ và nhận feedback cá nhân từ giáo viên tiếng Anh
                    </p>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                     <h4 className="text-xl font-bold text-gray-900 mb-3">Tuần 4: Xây dựng thương hiệu cá nhân và tư vấn 1:1</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Liên hệ để nhận Module chi tiết</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          
          {/* Special Highlight Box */}
          <div className="mt-16 bg-gradient-to-r from-leafGreen/10 to-sunflower/10 rounded-2xl p-8 border-2 border-leafGreen/20">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-leafGreen w-16 h-16 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Đặc Biệt: 1 Buổi Học Tiếng Anh Miễn Phí</h4>
              <p className="text-gray-700 max-w-3xl mx-auto mb-6">
                Mỗi học viên được tặng <strong>1 buổi học tiếng Anh miễn phí</strong> với giáo viên bản xứ, 
                tập trung vào kỹ năng phỏng vấn và giao tiếp chuyên nghiệp trong môi trường làm việc quốc tế.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-leafGreen rounded-full flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Luyện phỏng vấn tiếng Anh</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-leafGreen rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Tương tác với giáo viên bản xứ</span>
                </div>
              </div>
            </div>
          </div>
         
         {/* Consultation CTA */}
         <div className="mt-16 bg-gray-100 rounded-xl p-8 shadow-lg text-center animate-fade-in" style={{
        animationDelay: "0.9s"
      }}>
           <h3 className="text-2xl font-bold text-gray-900 mb-4">Bạn cần tư vấn thêm?</h3>
           <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
             Đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn chọn khóa học phù hợp nhất với mục tiêu nghề nghiệp của bạn
           </p>
           <Link to="/contact">
             <Button className="bg-navy hover:bg-sunflower text-white flex items-center gap-2 hover:scale-105 transition-all mx-auto">
               <MessageSquare className="h-5 w-5" />
               Liên Hệ Tư Vấn
               <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
             </Button>
           </Link>
         </div>
       </div>
     </section>;
};
export default LearningPath;