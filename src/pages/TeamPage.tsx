
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Briefcase, Award, GraduationCap, Heart, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Đội Ngũ Đào Tạo - Virtual Assistant Pro</title>
        <meta name="description" content="Gặp gỡ Duyên Phạm, người sáng lập và giảng viên của Virtual Assistant Pro, người sẽ đồng hành cùng bạn trên hành trình trở thành Trợ Lý Ảo chuyên nghiệp." />
      </Helmet>
      
      <div className="min-h-screen bg-warmWhite">
        <Navbar />
        
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Decorative sunflower elements */}
          <div className="absolute top-20 right-20 w-40 h-40 bg-sunflower/10 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-40 left-20 w-64 h-64 bg-sunflower/5 rounded-full animate-float"></div>
          <div className="absolute -top-10 left-1/4 w-16 h-16 bg-sunflower/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-sunflower/15 rounded-full animate-spin-slow"></div>
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl font-bold text-navy mb-4">Đội Ngũ Đào Tạo</h1>
              <p className="text-navy/70 max-w-2xl mx-auto">
                Gặp gỡ Duyên Phạm, người sẽ đồng hành cùng bạn trên hành trình trở thành Trợ&nbsp;Lý&nbsp;Ảo&nbsp;chuyên&nbsp;nghiệp
              </p>
            </div>
            
            <div className="mb-20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl navy-shadow p-8 md:p-10">
                <h2 className="text-2xl font-bold text-navy mb-6">Tại sao học với chúng tôi?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="flex flex-col items-center text-center p-4 hover:scale-105 transition-transform">
                    <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4">
                      <Briefcase className="h-8 w-8 text-navy" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Kinh Nghiệm Thực Tế</h3>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4 hover:scale-105 transition-transform">
                    <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4">
                      <Award className="h-8 w-8 text-navy" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Chuyên Môn Đa Dạng</h3>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4 hover:scale-105 transition-transform">
                    <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4">
                      <GraduationCap className="h-8 w-8 text-navy" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Phương Pháp Thực Tiễn</h3>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4 hover:scale-105 transition-transform">
                    <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4">
                      <Heart className="h-8 w-8 text-navy" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Hỗ Trợ Liên Tục</h3>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl navy-shadow overflow-hidden md:flex hover:shadow-lg transition-shadow">
                <div className="md:w-1/3 relative">
                  {/* Alternating profile images */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img src="/images/duyen/profile_1.jpg" alt="Duyen Pham" 
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-1000" />
                    <img src="/images/duyen/profile_2.jpg" alt="Duyen Pham" 
                      className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-1000" />
                  </div>
                  
                  {/* Floating sunflower decoration */}
                  <div className="absolute top-5 right-5 w-12 h-12 bg-sunflower/60 rounded-full animate-float"></div>
                </div>
                <div className="p-8 md:w-2/3">
                  <h3 className="text-2xl font-bold text-navy mb-1">Duyen Pham</h3>
                  <p className="text-sunflower font-medium mb-4">Founder/ Coach</p>
                  <p className="text-navy/80 mb-6">Hơn 10 năm kinh nghiệm trong lĩnh vực VA, VA coaching và đối tác chiến lược của nhiều startup/ doanh nghiệp ở Việt Nam và Quốc tế, Duyên đã đào tạo hơn 150 học viên VA và điều hành cộng động VA - Virtual Assistant Việt Nam.</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Chuyên Môn:</h4>
                      <ul className="list-disc list-inside text-navy/70 space-y-1">
                        <li className="hover:translate-x-1 transition-transform">Chiến lược phát triển VA toàn diện</li>
                        <li className="hover:translate-x-1 transition-transform">Xây dựng thương hiệu trên thị trường quốc tế</li>
                        <li className="hover:translate-x-1 transition-transform">Hỗ trợ set up/ vận hành/ tư vấn chiến lược cho startup và SMEs</li>
                        <li className="hover:translate-x-1 transition-transform">Xây dựng cộng đồng</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Kinh Nghiệm:</h4>
                      <ul className="list-disc list-inside text-navy/70 space-y-1">
                        <li className="hover:translate-x-1 transition-transform">Đào tạo 150+ VA chuyên nghiệp</li>
                        <li className="hover:translate-x-1 transition-transform">Hoàn thành 200+ đơn hàng trên Fiverr với hơn 100+ review 5 sao</li>
                        <li className="hover:translate-x-1 transition-transform">Founder cộng đồng VA - Virtual assistant Việt Nam</li>
                        <li className="hover:translate-x-1 transition-transform">Co-founder War & Peace Homestay</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href="https://zalo.me/0932548082" target="_blank" rel="noopener noreferrer">
                      <Button className="btn-primary flex items-center gap-2 hover:scale-105 transition-transform">
                        <MessageSquare className="h-5 w-5" />
                        Contact Duyen - Zalo
                      </Button>
                    </a>
                    <a href="https://www.facebook.com/duyen.pham.1048" target="_blank" rel="noopener noreferrer">
                      <Button className="btn-secondary flex items-center gap-2 hover:scale-105 transition-transform">
                        <MessageSquare className="h-5 w-5" />
                        Contact Duyen - Facebook
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default TeamPage;
