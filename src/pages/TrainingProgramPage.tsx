
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Check, Clock, Calendar, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const modules = [
  {
    title: 'Module 1: Nền Tảng VA Chuyên Nghiệp',
    description: 'Hiểu rõ về ngành VA và xây dựng nền tảng kỹ năng cần thiết',
    lessons: [
      'Tổng quan về ngành VA và xu hướng thị trường',
      'Xác định thế mạnh và định hướng chuyên môn cá nhân',
      'Thiết lập môi trường làm việc chuyên nghiệp tại nhà',
      'Quản lý thời gian hiệu quả & công cụ lập kế hoạch',
      'Kỹ năng giao tiếp chuyên nghiệp qua email & chat'
    ],
    duration: '2 tuần'
  },
  {
    title: 'Module 2: Kỹ Năng Thiết Yếu & Công Cụ',
    description: 'Thành thạo các công cụ và kỹ năng cốt lõi của một VA',
    lessons: [
      'Google Workspace: Drive, Docs, Sheets, Slides & Forms',
      'Quản lý lịch và cuộc hẹn chuyên nghiệp',
      'Công cụ quản lý dự án: Trello, Asana, ClickUp',
      'Tự động hóa quy trình làm việc với Zapier',
      'Quản lý email và hộp thư chuyên nghiệp'
    ],
    duration: '3 tuần'
  },
  {
    title: 'Module 3: Marketing & Thương Hiệu Cá Nhân',
    description: 'Xây dựng thương hiệu VA và chiến lược marketing hiệu quả',
    lessons: [
      'Xây dựng portfolio VA chuyên nghiệp',
      'Thiết kế hồ sơ Fiverr/Upwork thu hút khách hàng',
      'Chiến lược định giá dịch vụ VA hiệu quả',
      'Tối ưu LinkedIn để thu hút khách hàng',
      'Tạo dựng thương hiệu cá nhân nổi bật'
    ],
    duration: '2 tuần'
  },
  {
    title: 'Module 4: Quản Lý Khách Hàng & Phát Triển Kinh Doanh',
    description: 'Tìm kiếm và duy trì mối quan hệ khách hàng lâu dài',
    lessons: [
      'Chiến lược tìm kiếm khách hàng tiềm năng',
      'Kỹ thuật giao tiếp và đàm phán với khách hàng quốc tế',
      'Xây dựng quy trình onboarding khách hàng mới',
      'Quản lý và vượt qua kỳ vọng của khách hàng',
      'Mở rộng dịch vụ và tăng doanh thu'
    ],
    duration: '2 tuần'
  },
  {
    title: 'Module 5: Dự Án Thực Tế & Tốt Nghiệp',
    description: 'Áp dụng kiến thức vào dự án thực tế và chuẩn bị khởi nghiệp',
    lessons: [
      'Hackathon 21 ngày: Thực hiện dự án VA thực tế',
      'Phản hồi và đánh giá từ chuyên gia',
      'Hoàn thiện portfolio và chiến lược tiếp thị',
      'Kế hoạch phát triển nghề nghiệp dài hạn',
      'Buổi tư vấn cá nhân với giảng viên'
    ],
    duration: '3 tuần'
  }
];

const programs = [
  {
    title: 'Cơ Bản',
    price: '4.500.000đ',
    features: [
      'Truy cập toàn bộ 5 module học tập',
      'Tài liệu học tập đầy đủ',
      'Bài tập thực hành sau mỗi bài học',
      'Hỗ trợ qua diễn đàn học viên',
      'Chứng chỉ hoàn thành khóa học'
    ],
    highlighted: false
  },
  {
    title: 'Tiêu Chuẩn',
    price: '6.900.000đ',
    features: [
      'Tất cả tính năng của gói Cơ Bản',
      'Buổi tư vấn cá nhân hàng tuần (30 phút)',
      'Đánh giá portfolio và góp ý chuyên sâu',
      'Thời gian hỗ trợ mở rộng đến 6 tháng',
      'Tham gia cộng đồng học viên độc quyền'
    ],
    highlighted: true
  },
  {
    title: 'Cao Cấp',
    price: '9.900.000đ',
    features: [
      'Tất cả tính năng của gói Tiêu Chuẩn',
      'Tư vấn 1-1 không giới hạn trong 12 tháng',
      'Hỗ trợ xây dựng hồ sơ và tìm kiếm khách hàng',
      'Huấn luyện phỏng vấn với khách hàng',
      'Cơ hội thực tập với khách hàng thực tế'
    ],
    highlighted: false
  }
];

const TrainingProgramPage = () => {
  return (
    <>
      <Helmet>
        <title>Chương Trình Đào Tạo - Virtual Assistant Pro</title>
        <meta name="description" content="Khám phá chương trình đào tạo Trợ Lý Ảo chuyên nghiệp tại Virtual Assistant Pro - nơi đào tạo kỹ năng thiết yếu để bạn thành công trong nghề VA." />
      </Helmet>
      
      <div className="min-h-screen bg-warmWhite">
        <Navbar />
        
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-navy mb-4">Chương Trình Đào Tạo</h1>
              <p className="text-navy/70 max-w-2xl mx-auto">
                Khóa học Virtual Assistant PRO được thiết kế để trang bị cho bạn mọi kỹ năng cần thiết để trở thành một Trợ Lý Ảo chuyên nghiệp và thành công
              </p>
            </div>
            
            <div className="mb-20">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl navy-shadow p-8 md:p-10">
                <div className="lg:flex justify-between items-center gap-10">
                  <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <h2 className="text-2xl font-bold text-navy mb-6">Tổng Quan Khóa Học</h2>
                    <div className="space-y-5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-sunflower/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Clock className="h-5 w-5 text-navy" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">Thời Lượng</h3>
                          <p className="text-navy/70">12 tuần học tập chuyên sâu + 3 tháng hỗ trợ sau khóa học</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-sunflower/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Calendar className="h-5 w-5 text-navy" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">Lịch Học</h3>
                          <p className="text-navy/70">2 buổi học trực tuyến mỗi tuần + học liệu tự học</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-sunflower/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Users className="h-5 w-5 text-navy" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">Quy Mô Lớp Học</h3>
                          <p className="text-navy/70">8-12 học viên mỗi lớp, đảm bảo sự quan tâm cá nhân hóa</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-sunflower/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <BookOpen className="h-5 w-5 text-navy" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">Hình Thức Học</h3>
                          <p className="text-navy/70">Học trực tuyến, kết hợp lý thuyết và thực hành dự án thực tế</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <div className="relative rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                        alt="Virtual Assistant Training"
                        className="w-full h-[350px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-6">
                        <div className="text-white max-w-md">
                          <h3 className="text-xl font-bold mb-2">Khai giảng: 10/05/2025</h3>
                          <p className="text-white/90">
                            Đăng ký sớm để nhận ưu đãi 20% học phí và tài liệu bổ sung
                          </p>
                          <Link to="/courses-view">
                            <Button className="mt-4 bg-sunflower text-navy hover:bg-sunflower/80">Đăng Ký Ngay</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-20">
              <h2 className="text-2xl font-bold text-navy text-center mb-10">Nội Dung Chương Trình</h2>
              
              <div className="space-y-6">
                {modules.map((module, index) => (
                  <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl navy-shadow p-6">
                    <h3 className="text-xl font-bold text-navy mb-2">{module.title}</h3>
                    <p className="text-navy/70 mb-4">{module.description}</p>
                    
                    <div className="bg-navy/5 rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-navy">Nội dung:</h4>
                        <span className="text-sm bg-sunflower/20 text-navy px-3 py-1 rounded-full">
                          {module.duration}
                        </span>
                      </div>
                      
                      <ul className="space-y-2">
                        {module.lessons.map((lesson, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-sunflower flex-shrink-0 mt-0.5" />
                            <span className="text-navy/80">{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy text-center mb-10">Các Gói Học Tập</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {programs.map((program, index) => (
                  <div 
                    key={index} 
                    className={`bg-white/70 backdrop-blur-sm rounded-xl p-6 transition-all ${program.highlighted 
                      ? 'navy-shadow ring-2 ring-sunflower relative z-10 scale-105 md:scale-110' 
                      : 'navy-shadow'}`}
                  >
                    {program.highlighted && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-sunflower text-navy text-sm font-bold py-1 px-4 rounded-full">
                        Phổ Biến Nhất
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-navy text-center mb-2">{program.title}</h3>
                    <p className="text-2xl font-bold text-center mb-6">{program.price}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-sunflower flex-shrink-0 mt-0.5" />
                          <span className="text-navy/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/courses-view" className="block mt-auto">
                      <Button 
                        className={`w-full ${program.highlighted 
                          ? 'bg-sunflower text-navy hover:bg-sunflower/80' 
                          : 'bg-navy text-white hover:bg-navy/80'}`}
                      >
                        Đăng Ký Ngay
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-navy/70 mb-4">Có câu hỏi về chương trình đào tạo?</p>
              <Link to="/contact">
                <Button variant="outline" className="bg-transparent border border-navy text-navy hover:bg-navy hover:text-warmWhite transition-all">
                  Liên Hệ Tư Vấn Viên
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default TrainingProgramPage;
