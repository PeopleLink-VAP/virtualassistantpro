import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, TrendingUp, Users, DollarSign, Mail, User, Phone, MapPin, BookOpen, ArrowRight, Check } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';

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
    const { name, value } = e.target;
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

  const successStories = [
    {
      id: 1,
      name: "Nguyễn Thị Mai",
      image: "/images/sunflower.png",
      background: "Mai là một nhân viên văn phòng với 3 năm kinh nghiệm trong lĩnh vực hành chính. Cô ấy muốn tìm kiếm một công việc linh hoạt hơn để có thể cân bằng giữa công việc và cuộc sống gia đình.",
      courseTaken: "Khóa học Trợ lý ảo Toàn diện - Module Quản lý Dự án & Hỗ trợ Hành chính",
      currentJob: "Trợ lý ảo chuyên về quản lý dự án cho 3 startup công nghệ tại Mỹ",
      monthlyIncome: "25-30 triệu VNĐ",
      mentorInsight: "Mai đã thể hiện sự kiên trì đáng ngưỡng mộ trong việc học hỏi các công cụ quản lý dự án. Điều tôi ấn tượng nhất là cách cô ấy áp dụng kiến thức vào thực tế và không ngừng cải thiện quy trình làm việc. Thành công của Mai chứng minh rằng với đam mê và nỗ lực, bạn hoàn toàn có thể chuyển đổi sự nghiệp thành công."
    },
    {
      id: 2,
      name: "Trần Văn Hùng",
      image: "/images/sunflower.png",
      background: "Hùng là sinh viên mới tốt nghiệp ngành Marketing, chưa có nhiều kinh nghiệm làm việc thực tế. Anh ấy muốn tìm hiểu về lĩnh vực Digital Marketing và xây dựng sự nghiệp từ xa.",
      courseTaken: "Khóa học Trợ lý ảo Toàn diện - Module Marketing Digital & Social Media",
      currentJob: "Chuyên gia Social Media Marketing cho các thương hiệu thời trang quốc tế",
      monthlyIncome: "20-25 triệu VNĐ",
      mentorInsight: "Hùng là một ví dụ điển hình cho thấy tuổi trẻ và sự nhiệt huyết có thể bù đắp cho kinh nghiệm. Anh ấy luôn chủ động tìm hiểu xu hướng mới và không ngại thử nghiệm. Khả năng sáng tạo content và hiểu biết về Gen Z của Hùng đã giúp anh ấy nhanh chóng tìm được vị trí trong lĩnh vực cạnh tranh này."
    },
    {
      id: 3,
      name: "Lê Thị Hương",
      image: "/images/sunflower.png",
      background: "Hương là một bà mẹ đơn thân với hai con nhỏ, trước đây làm kế toán tại một công ty nhỏ. Cô ấy cần tìm một công việc có thể làm tại nhà để chăm sóc con cái.",
      courseTaken: "Khóa học Trợ lý ảo Toàn diện - Module Kế toán & Quản lý Tài chính",
      currentJob: "Chuyên gia Kế toán & Quản lý Tài chính cho các doanh nghiệp vừa và nhỏ",
      monthlyIncome: "30-35 triệu VNĐ",
      mentorInsight: "Câu chuyện của Hương luôn khiến tôi xúc động. Với trách nhiệm nặng nề của một bà mẹ đơn thân, cô ấy vẫn kiên trì học tập và phát triển kỹ năng. Sự tỉ mỉ và trách nhiệm trong công việc kế toán của Hương đã giúp cô ấy xây dựng được danh tiếng vững chắc. Thành công của cô ấy là nguồn cảm hứng cho nhiều phụ nữ khác."
    }
  ];

  if (isSubmitted) {
    return (
      <>
        <Seo
          title="Đăng Ký Thành Công - Virtual Assistant Pro"
          description="Cảm ơn bạn đã đăng ký khóa học Virtual Assistant Pro. Chúng tôi sẽ liên hệ với bạn sớm nhất."
        />
        <Navbar />
        <ScrollToTop />
        <div className="min-h-screen bg-gradient-to-br from-warmWhite via-lightYellow/50 to-sunflower/20 flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/30">
                <div className="w-20 h-20 bg-gradient-to-r from-sunflower to-leafGreen rounded-full flex items-center justify-center mx-auto mb-6">
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
                    <Button className="group bg-gradient-to-r from-sunflower to-leafGreen hover:from-leafGreen hover:to-sunflower text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                      <span className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Xem Chi Tiết Khóa Học
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button className="group bg-gradient-to-r from-navy to-lightBlue hover:from-lightBlue hover:to-navy text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                      Về Trang Chủ
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Seo
        title="Đăng Ký Khóa Học - Virtual Assistant Pro"
        description="Đăng ký ngay khóa học Virtual Assistant Pro để bắt đầu hành trình trở thành VA chuyên nghiệp với thu nhập ổn định."
      />
      <Navbar />
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-warmWhite via-lightYellow/50 to-sunflower/20 relative overflow-hidden">
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
            <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-navy mb-4">
                  <span className="bg-gradient-to-r from-navy to-sunflower bg-clip-text text-transparent">
                    Đăng Ký Khóa Học VAP
                  </span>
                </h1>
                <p className="text-navy/80 text-lg">
                  Bắt đầu hành trình trở thành Virtual Assistant chuyên nghiệp
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-navy mb-2">
                    Họ và tên *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy/50" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-navy/20 rounded-xl focus:ring-2 focus:ring-sunflower focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
                      placeholder="Nhập họ và tên của bạn"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy/50" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-navy/20 rounded-xl focus:ring-2 focus:ring-sunflower focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                    Số điện thoại *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy/50" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-navy/20 rounded-xl focus:ring-2 focus:ring-sunflower focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
                      placeholder="0123 456 789"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-navy mb-2">
                    Kinh nghiệm làm việc
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:ring-2 focus:ring-sunflower focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
                  >
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
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-navy/20 rounded-xl focus:ring-2 focus:ring-sunflower focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 resize-none"
                    placeholder="Chia sẻ lý do bạn muốn trở thành Virtual Assistant..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group bg-gradient-to-r from-sunflower to-leafGreen hover:from-leafGreen hover:to-sunflower text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Đang xử lý...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Đăng Ký Ngay
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
                
                <p className="text-sm text-navy/60 text-center">
                  Bằng cách đăng ký, bạn đồng ý với{' '}
                  <Link to="/terms" className="text-sunflower hover:underline">
                    Điều khoản dịch vụ
                  </Link>{' '}
                  và{' '}
                  <Link to="/privacy" className="text-sunflower hover:underline">
                    Chính sách bảo mật
                  </Link>
                </p>
              </form>
            </div>
            
            {/* Success Stories */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-navy mb-4">
                  <span className="bg-gradient-to-r from-navy to-sunflower bg-clip-text text-transparent">
                    Câu Chuyện Thành Công
                  </span>
                </h2>
                <p className="text-navy/80">
                  Những học viên đã thay đổi cuộc sống với khóa học VAP
                </p>
              </div>
              
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center bg-white/60 backdrop-blur-md rounded-xl p-4 border border-white/30">
                  <div className="w-12 h-12 bg-gradient-to-r from-sunflower to-leafGreen rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-navy">500+</div>
                  <div className="text-sm text-navy/70">Học viên</div>
                </div>
                <div className="text-center bg-white/60 backdrop-blur-md rounded-xl p-4 border border-white/30">
                  <div className="w-12 h-12 bg-gradient-to-r from-leafGreen to-lightBlue rounded-full flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-navy">85%</div>
                  <div className="text-sm text-navy/70">Thành công</div>
                </div>
                <div className="text-center bg-white/60 backdrop-blur-md rounded-xl p-4 border border-white/30">
                  <div className="w-12 h-12 bg-gradient-to-r from-lightBlue to-sunflower rounded-full flex items-center justify-center mx-auto mb-2">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-navy">30M+</div>
                  <div className="text-sm text-navy/70">Thu nhập</div>
                </div>
              </div>
              
              {/* Success Stories Cards */}
              <div className="space-y-6">
                {successStories.map((story, index) => (
                  <div key={story.id} className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start gap-4">
                      <img 
                        src={story.image} 
                        alt={story.name}
                        className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-sunflower/30"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-lg text-navy">{story.name}</h3>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={`story-${story.id}-star-${i}`} className="h-4 w-4 text-sunflower fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-navy/70 text-sm mb-3 line-clamp-3">{story.background}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-sunflower">{story.monthlyIncome}</span>
                          <span className="text-xs text-navy/60 bg-sunflower/10 px-2 py-1 rounded-full">
                            {story.currentJob.split(' ')[0]} VA
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Link to="/success-stories">
                  <Button className="group bg-gradient-to-r from-navy to-lightBlue hover:from-lightBlue hover:to-navy text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      Xem Thêm Câu Chuyện
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;