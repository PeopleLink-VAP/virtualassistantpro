import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, TrendingUp, Users, DollarSign } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Seo from '@/components/Seo';

const StudentSuccessStoriesPage = () => {
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
    },
    {
      id: 4,
      name: "Phạm Minh Tuấn",
      image: "/images/sunflower.png",
      background: "Tuấn là một kỹ sư IT với 5 năm kinh nghiệm, nhưng cảm thấy kiệt sức với môi trường công sở áp lực cao. Anh ấy muốn tìm kiếm một hướng đi mới kết hợp kỹ năng kỹ thuật với tính linh hoạt.",
      courseTaken: "Khóa học Trợ lý ảo Toàn diện - Module Hỗ trợ Kỹ thuật & Automation",
      currentJob: "Chuyên gia Automation & Technical Support cho các công ty SaaS",
      monthlyIncome: "40-50 triệu VNĐ",
      mentorInsight: "Tuấn đã chứng minh rằng việc chuyển đổi sự nghiệp không có nghĩa là từ bỏ những gì bạn đã học. Anh ấy đã khéo léo kết hợp kiến thức kỹ thuật với kỹ năng trợ lý ảo để tạo ra một niche độc đáo. Khả năng tự động hóa quy trình và giải quyết vấn đề kỹ thuật của Tuấn đã giúp anh ấy trở thành một VA có giá trị cao trong thị trường."
    }
  ];

  return (
    <>
      <Seo
        title="Câu Chuyện Thành Công - Virtual Assistant Pro"
        description="Khám phá những câu chuyện thành công đầy cảm hứng từ các học viên Virtual Assistant Pro."
      />
      <Navbar />
      <ScrollToTop />
      <div className="relative bg-warmWhite py-20 pt-40">
        <div className="container mx-auto px-4">
          <nav className="mb-8 text-sm text-gray-500" aria-label="breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to="/" className="text-navy hover:underline">Homepage</Link>
                <ChevronRight className="h-4 w-4 mx-2" />
              </li>
              <li className="flex items-center">
                <span className="text-sunflower">Câu Chuyện Thành Công</span>
              </li>
            </ol>
          </nav>
          
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-navy mb-6 font-condensed">
              Câu Chuyện Thành Công Của Học Viên
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Khám phá những hành trình đầy cảm hứng từ các học viên Virtual Assistant Pro. 
              Mỗi câu chuyện là một minh chứng cho sức mạnh của việc học tập và quyết tâm thay đổi cuộc sống.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-sunflower/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-sunflower" />
                </div>
                <h3 className="font-bold text-xl text-navy mb-2">500+ Học Viên</h3>
                <p className="text-gray-600">Đã tham gia các khóa học</p>
              </div>
              <div className="text-center">
                <div className="bg-sunflower/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-sunflower" />
                </div>
                <h3 className="font-bold text-xl text-navy mb-2">85% Thành Công</h3>
                <p className="text-gray-600">Tìm được việc làm trong 3 tháng</p>
              </div>
              <div className="text-center">
                <div className="bg-sunflower/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-sunflower" />
                </div>
                <h3 className="font-bold text-xl text-navy mb-2">20-50 Triệu</h3>
                <p className="text-gray-600">Thu nhập trung bình hàng tháng</p>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="space-y-16">
            {successStories.map((story, index) => (
              <div key={story.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/3">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full max-w-sm mx-auto"
                  />
                </div>
                
                <div className="lg:w-2/3 space-y-6">
                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-navy mb-2 font-condensed">{story.name}</h2>
                    <div className="flex justify-center lg:justify-start mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-sunflower fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="font-bold text-lg text-navy mb-2 flex items-center">
                        <div className="w-2 h-2 bg-sunflower rounded-full mr-3"></div>
                        Bối Cảnh
                      </h3>
                      <p className="text-gray-700">{story.background}</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="font-bold text-lg text-navy mb-2 flex items-center">
                        <div className="w-2 h-2 bg-sunflower rounded-full mr-3"></div>
                        Khóa Học Tham Gia
                      </h3>
                      <p className="text-gray-700">{story.courseTaken}</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="font-bold text-lg text-navy mb-2 flex items-center">
                        <div className="w-2 h-2 bg-sunflower rounded-full mr-3"></div>
                        Công Việc Hiện Tại
                      </h3>
                      <p className="text-gray-700">{story.currentJob}</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="font-bold text-lg text-navy mb-2 flex items-center">
                        <div className="w-2 h-2 bg-sunflower rounded-full mr-3"></div>
                        Thu Nhập Trung Bình Hàng Tháng
                      </h3>
                      <p className="text-gray-700 font-semibold text-sunflower">{story.monthlyIncome}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-sunflower/10 to-navy/10 p-6 rounded-lg border-l-4 border-sunflower">
                      <h3 className="font-bold text-lg text-navy mb-2">Nhận Xét Từ Mentor</h3>
                      <p className="text-gray-700 italic">"{story.mentorInsight}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16 bg-navy text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 font-condensed">Bạn Có Muốn Trở Thành Câu Chuyện Thành Công Tiếp Theo?</h2>
            <p className="text-lg mb-8 opacity-90">
              Tham gia cùng hàng trăm học viên khác đã thay đổi cuộc sống thông qua các khóa học Virtual Assistant Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/vap-course" 
                className="bg-sunflower text-navy px-8 py-3 rounded-lg font-semibold hover:bg-sunflower/90 transition duration-300"
              >
                Xem Khóa Học
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy transition duration-300"
              >
                Tư Vấn Miễn Phí
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentSuccessStoriesPage;