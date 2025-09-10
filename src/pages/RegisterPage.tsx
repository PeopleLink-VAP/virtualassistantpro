import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, TrendingUp, Users, MessageSquare, Mail, User, Phone, MapPin, BookOpen, ArrowRight, Check } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import facebookQrCode from '@/assets/facebook-qr-code.png';
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  if (isSubmitted) {
    return <>
        <Seo title="Đăng Ký Thành Công - Virtual Assistant Pro" description="Cảm ơn bạn đã đăng ký khóa học Virtual Assistant Pro. Chúng tôi sẽ liên hệ với bạn sớm nhất." />
        <Navbar />
        <ScrollToTop />
        <div className="min-h-screen bg-warmWhite flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white/90 rounded-3xl p-12 shadow-2xl border border-gray-200">
                <div className="w-20 h-20 bg-sunflower rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-navy mb-6">Đăng Ký Thành Công!</h1>
                <p className="text-xl text-navy/80 mb-8">
                  Cảm ơn bạn đã đăng ký khóa học Virtual Assistant Pro. Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ để tư vấn chi tiết về chương trình học.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center gap-3 text-navy/70">
                    <Mail className="h-5 w-5 text-sunflower" />
                    <span>Email xác nhận đã được gửi đến: {formData.email}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-navy/70">
                    <Phone className="h-5 w-5 text-leafGreen" />
                    <span>Chúng tôi sẽ gọi điện tư vấn qua số: {formData.phone}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/vap-course">
                    <Button className="group bg-sunflower hover:bg-leafGreen text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                      <span className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Xem Chi Tiết Khóa Học
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button className="group bg-navy hover:bg-lightBlue text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                      Về Trang Chủ
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>;
  }
  return <>
      <Seo title="Đăng Ký Khóa Học - Virtual Assistant Pro" description="Đăng ký ngay khóa học Virtual Assistant Pro để bắt đầu hành trình trở thành VA chuyên nghiệp với thu nhập ổn định." />
      <Navbar />
      <ScrollToTop />
      <div className="min-h-screen bg-warmWhite relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-sunflower/10 rounded-full animate-float"></div>
          <div className="absolute bottom-40 right-20 w-28 h-28 bg-leafGreen/10 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute top-1/2 right-10 w-24 h-24 bg-lightBlue/15 rounded-full animate-float animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 pt-40 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500" aria-label="breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to="/" className="text-navy hover:underline">Trang chủ</Link>
                <ChevronRight className="h-4 w-4 mx-2" />
              </li>
              <li className="flex items-center">
                <Link to="/vap-course" className="text-navy hover:underline">Khóa học VAP</Link>
                <ChevronRight className="h-4 w-4 mx-2" />
              </li>
              <li className="flex items-center">
                <span className="text-sunflower">Đăng ký</span>
              </li>
            </ol>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Registration Form */}
            <div className="bg-white/90 rounded-3xl p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-sunflower via-leafGreen to-lightBlue rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-navy mb-4">
                  <span className="bg-gradient-to-r from-sunflower to-leafGreen bg-clip-text text-transparent">
                    Đăng Ký Khóa Học VAP
                  </span>
                </h1>
                <p className="text-navy/80 text-lg">
                  Bắt đầu hành trình trở thành Virtual Assistant chuyên nghiệp
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="flex items-center gap-2 bg-leafGreen/10 px-4 py-2 rounded-full">
                    <Star className="h-4 w-4 text-sunflower fill-current" />
                    <span className="text-sm font-medium text-navy">Được 500+ học viên tin tưởng</span>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-navy mb-2">
                    Họ và tên *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy/50" />
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full pl-10 pr-4 py-3 border border-navy/20 rounded-xl focus:ring-2 focus:ring-sunflower focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md" placeholder="Nhập họ và tên của bạn" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy/50" />
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full pl-10 pr-4 py-3 border border-navy/20 rounded-xl focus:ring-2 focus:ring-sunflower focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md" placeholder="example@email.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                    Số điện thoại *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy/50" />
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full pl-10 pr-4 py-3 border border-navy/20 rounded-xl focus:ring-2 focus:ring-sunflower focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md" placeholder="0123 456 789" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-navy mb-2">
                    Kinh nghiệm làm việc
                  </label>
                  <select id="experience" name="experience" value={formData.experience} onChange={handleInputChange} className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:ring-2 focus:ring-sunflower focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md">
                    <option value="">Chọn mức độ kinh nghiệm</option>
                    <option value="beginner">Mới bắt đầu (0-1 năm)</option>
                    <option value="intermediate">Trung cấp (1-3 năm)</option>
                    <option value="advanced">Có kinh nghiệm (3+ năm)</option>
                    <option value="expert">Chuyên gia (5+ năm)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="motivation" className="block text-sm font-semibold text-navy mb-2">
                    Lý do muốn tham gia khóa học
                  </label>
                  <textarea id="motivation" name="motivation" value={formData.motivation} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:ring-2 focus:ring-sunflower focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 resize-none hover:shadow-md" placeholder="Chia sẻ lý do bạn muốn trở thành Virtual Assistant..." />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full group hover:bg-sunflower bg-gradient-to-r from-leafGreen to-sunflower text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Đang xử lý...
                    </span> : <span className="flex items-center justify-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Đăng Ký Ngay
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>}
                </Button>
              </form>
            </div>
            
            {/* Contact Us Section */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-navy mb-4 flex items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-sunflower to-leafGreen rounded-full flex items-center justify-center animate-bounce">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  Bạn còn phân vân?
                </h2>
                
              </div>
              
              
              {/* Quick Questions */}
              <div className="bg-gradient-to-br from-sunflower/10 to-leafGreen/10 rounded-2xl p-6 border border-sunflower/20 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-navy/80 p-2 bg-white/50 rounded-lg">
                    <Check className="h-4 w-4 text-leafGreen flex-shrink-0" />
                    <span>Khóa học có phù hợp với người mới?</span>
                  </div>
                  <div className="flex items-center gap-2 text-navy/80 p-2 bg-white/50 rounded-lg">
                    <Check className="h-4 w-4 text-leafGreen flex-shrink-0" />
                    <span>Thời gian học và lịch trình ra sao?</span>
                  </div>
                  <div className="flex items-center gap-2 text-navy/80 p-2 bg-white/50 rounded-lg">
                    <Check className="h-4 w-4 text-leafGreen flex-shrink-0" />
                    <span>Học phí và hỗ trợ trả góp?</span>
                  </div>
                  <div className="flex items-center gap-2 text-navy/80 p-2 bg-white/50 rounded-lg">
                    <Check className="h-4 w-4 text-leafGreen flex-shrink-0" />
                    <span>Cơ hội việc làm sau khóa học?</span>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="mt-12 flex flex-wrap justify-center gap-4">
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
      </div>
      <Footer />
    </>;
};
export default RegisterPage;