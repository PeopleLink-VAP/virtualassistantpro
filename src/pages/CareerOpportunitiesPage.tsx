
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Seo from '@/components/Seo';
import { ArrowRight, BriefcaseIcon, TrendingUpIcon, UsersIcon, GlobeIcon, ChevronRight, Star, DollarSign, MapPin, Clock } from 'lucide-react';

const CareerOpportunitiesPage = () => {
  const careerOpportunities = [
    {
      id: 1,
      title: "Trợ Lý Ảo Hành Chính",
      image: "/images/sunflower.png",
      description: "Quản lý lịch trình, email và các công việc hành chính cho các CEO và doanh nhân thành công.",
      responsibilities: [
        "Quản lý lịch trình và cuộc họp",
        "Xử lý email và thư từ chuyên nghiệp",
        "Chuẩn bị tài liệu và báo cáo",
        "Hỗ trợ các thủ tục hành chính"
      ],
      salary: "$1,500 - $3,000/tháng",
      requirements: "Tiếng Anh tốt, kỹ năng tổ chức cao",
      growth: "Tăng trưởng 25% hàng năm",
      demand: "Rất cao"
    },
    {
      id: 2,
      title: "Trợ Lý Ảo Marketing",
      image: "/images/sunflower.png",
      description: "Phát triển và thực hiện các chiến lược marketing digital cho thương hiệu quốc tế.",
      responsibilities: [
        "Quản lý mạng xã hội và content",
        "Phân tích dữ liệu và báo cáo",
        "Tạo chiến dịch marketing",
        "SEO và quảng cáo trực tuyến"
      ],
      salary: "$2,000 - $4,000/tháng",
      requirements: "Kiến thức marketing, kỹ năng sáng tạo",
      growth: "Tăng trưởng 30% hàng năm",
      demand: "Cực cao"
    },
    {
      id: 3,
      title: "Trợ Lý Ảo Dịch Vụ Khách Hàng",
      image: "/images/sunflower.png",
      description: "Cung cấp dịch vụ hỗ trợ khách hàng xuất sắc qua nhiều kênh liên lạc khác nhau.",
      responsibilities: [
        "Hỗ trợ khách hàng qua email và chat",
        "Xử lý khiếu nại và phản hồi",
        "Quản lý cơ sở dữ liệu khách hàng",
        "Tạo quy trình dịch vụ tối ưu"
      ],
      salary: "$1,800 - $3,500/tháng",
      requirements: "Kỹ năng giao tiếp tốt, kiên nhẫn cao",
      growth: "Tăng trưởng 22% hàng năm",
      demand: "Cao"
    },
    {
      id: 4,
      title: "Trợ Lý Ảo Chuyên Ngành",
      image: "/images/sunflower.png",
      description: "Hỗ trợ chuyên sâu trong các lĩnh vực y tế, luật, bất động sản và tài chính.",
      responsibilities: [
        "Nghiên cứu và phân tích chuyên sâu",
        "Hỗ trợ quy trình chuyên ngành",
        "Quản lý tài liệu pháp lý",
        "Tư vấn kỹ thuật chuyên môn"
      ],
      salary: "$2,500 - $5,000/tháng",
      requirements: "Kiến thức chuyên ngành, chứng chỉ liên quan",
      growth: "Tăng trưởng 35% hàng năm",
      demand: "Rất cao"
    }
  ];

  return (
    <>
      <Seo
        title="Cơ Hội Nghề Nghiệp - Virtual Assistant Pro"
        description="Khám phá cơ hội nghề nghiệp đầy hứa hẹn trong lĩnh vực Trợ Lý Ảo với Virtual Assistant Pro. Thu nhập hấp dẫn và cơ hội phát triển không giới hạn."
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
                <span className="text-sunflower">Cơ Hội Nghề Nghiệp</span>
              </li>
            </ol>
          </nav>
          
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-navy mb-6 font-condensed">
              Cơ Hội Nghề Nghiệp Trợ Lý Ảo
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              🚀 Trang này đang được xây dựng để mang đến cho bạn cái nhìn toàn diện nhất về thế giới Trợ Lý Ảo!
            </p>
          </div>

          {/* Coming Soon Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-sunflower/10 via-warmWhite to-navy/5 p-12 rounded-2xl shadow-lg text-center border border-sunflower/20">
              <div className="mb-8">
                <div className="inline-block bg-sunflower/20 p-4 rounded-full mb-6">
                  <BriefcaseIcon className="h-12 w-12 text-sunflower" />
                </div>
                <h2 className="text-3xl font-bold text-navy mb-4 font-condensed">
                  🎯 Sắp Ra Mắt - Kho Tàng Cơ Hội Nghề Nghiệp!
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Chúng tôi đang chuẩn bị một bộ sưu tập đầy đủ và chi tiết về các cơ hội nghề nghiệp trong lĩnh vực Trợ Lý Ảo
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <TrendingUpIcon className="h-8 w-8 text-sunflower mx-auto mb-3" />
                  <h3 className="font-bold text-navy mb-2">Phân Tích Thị Trường</h3>
                  <p className="text-gray-600 text-sm">Xu hướng tăng trưởng, mức lương và nhu cầu tuyển dụng mới nhất</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <UsersIcon className="h-8 w-8 text-sunflower mx-auto mb-3" />
                  <h3 className="font-bold text-navy mb-2">Chuyên Ngành Hot</h3>
                  <p className="text-gray-600 text-sm">Các lĩnh vực VA đang "thịnh hành" với thu nhập hấp dẫn</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <GlobeIcon className="h-8 w-8 text-sunflower mx-auto mb-3" />
                  <h3 className="font-bold text-navy mb-2">Thị Trường Quốc Tế</h3>
                  <p className="text-gray-600 text-sm">Cơ hội làm việc với khách hàng từ khắp nơi trên thế giới</p>
                </div>
              </div>

              <div className="bg-white/50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-navy mb-4">🔍 Nội dung sắp có:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <span className="text-sunflower mr-2">✨</span>
                      10+ chuyên ngành VA phổ biến nhất
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-sunflower mr-2">✨</span>
                      Bảng lương chi tiết theo kinh nghiệm
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-sunflower mr-2">✨</span>
                      Kỹ năng cần thiết cho từng vị trí
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <span className="text-sunflower mr-2">✨</span>
                      Lộ trình phát triển sự nghiệp
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-sunflower mr-2">✨</span>
                      Câu chuyện thành công thực tế
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-sunflower mr-2">✨</span>
                      Tips tìm việc và phỏng vấn
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Dự kiến ra mắt: <strong className="text-navy">Cuối tháng này</strong>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/training" 
                    className="inline-flex items-center px-6 py-3 bg-sunflower text-white font-semibold rounded-lg hover:bg-sunflower/90 transition-colors"
                  >
                    Tham Gia Khóa Học Ngay
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center px-6 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-colors"
                  >
                    Nhận Thông Báo Cập Nhật
                  </Link>
                </div>
              </div>

              <div className="mt-8 text-sm text-gray-500">
                <p>💡 <strong>Tip:</strong> Trong thời gian chờ đợi, hãy khám phá các khóa học của chúng tôi để chuẩn bị tốt nhất cho sự nghiệp VA!</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CareerOpportunitiesPage;
