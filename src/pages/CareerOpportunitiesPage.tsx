import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Seo from '@/components/Seo';
import { ArrowRight, BriefcaseIcon, TrendingUpIcon, UsersIcon, GlobeIcon, ChevronRight, Star, DollarSign, MapPin, Clock } from 'lucide-react';
const CareerOpportunitiesPage = () => {
  const careerOpportunities = [{
    id: 1,
    title: "Trợ Lý Ảo Hành Chính",
    image: "/images/sunflower.png",
    description: "Quản lý lịch trình, email và các công việc hành chính cho các CEO và doanh nhân thành công.",
    responsibilities: ["Quản lý lịch trình và cuộc họp", "Xử lý email và thư từ chuyên nghiệp", "Chuẩn bị tài liệu và báo cáo", "Hỗ trợ các thủ tục hành chính"],
    salary: "$1,500 - $3,000/tháng",
    requirements: "Tiếng Anh tốt, kỹ năng tổ chức cao",
    growth: "Tăng trưởng 25% hàng năm",
    demand: "Rất cao"
  }, {
    id: 2,
    title: "Trợ Lý Ảo Marketing",
    image: "/images/sunflower.png",
    description: "Phát triển và thực hiện các chiến lược marketing digital cho thương hiệu quốc tế.",
    responsibilities: ["Quản lý mạng xã hội và content", "Phân tích dữ liệu và báo cáo", "Tạo chiến dịch marketing", "SEO và quảng cáo trực tuyến"],
    salary: "$2,000 - $4,000/tháng",
    requirements: "Kiến thức marketing, kỹ năng sáng tạo",
    growth: "Tăng trưởng 30% hàng năm",
    demand: "Cực cao"
  }, {
    id: 3,
    title: "Trợ Lý Ảo Dịch Vụ Khách Hàng",
    image: "/images/sunflower.png",
    description: "Cung cấp dịch vụ hỗ trợ khách hàng xuất sắc qua nhiều kênh liên lạc khác nhau.",
    responsibilities: ["Hỗ trợ khách hàng qua email và chat", "Xử lý khiếu nại và phản hồi", "Quản lý cơ sở dữ liệu khách hàng", "Tạo quy trình dịch vụ tối ưu"],
    salary: "$1,800 - $3,500/tháng",
    requirements: "Kỹ năng giao tiếp tốt, kiên nhẫn cao",
    growth: "Tăng trưởng 22% hàng năm",
    demand: "Cao"
  }, {
    id: 4,
    title: "Trợ Lý Ảo Chuyên Ngành",
    image: "/images/sunflower.png",
    description: "Hỗ trợ chuyên sâu trong các lĩnh vực y tế, luật, bất động sản và tài chính.",
    responsibilities: ["Nghiên cứu và phân tích chuyên sâu", "Hỗ trợ quy trình chuyên ngành", "Quản lý tài liệu pháp lý", "Tư vấn kỹ thuật chuyên môn"],
    salary: "$2,500 - $5,000/tháng",
    requirements: "Kiến thức chuyên ngành, chứng chỉ liên quan",
    growth: "Tăng trưởng 35% hàng năm",
    demand: "Rất cao"
  }];
  return <>
      <Seo title="Cơ Hội Nghề Nghiệp - Virtual Assistant Pro" description="Khám phá cơ hội nghề nghiệp đầy hứa hẹn trong lĩnh vực Trợ Lý Ảo với Virtual Assistant Pro. Thu nhập hấp dẫn và cơ hội phát triển không giới hạn." />
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
            <h1 className="text-5xl font-bold text-navy mb-6 font-condensed">Cơ Hội Nghề Nghiệp Virtual Assistant</h1>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">Trang việc làm dành cho các doanh nghiệp và cá nhân đăng tin tuyển dụng và VA có thể tìm cơ hội việc làm phù hợp</p>
          </div>

          {/* Career Opportunities */}
          <div className="space-y-16">
            {careerOpportunities.map((opportunity, index) => <div key={opportunity.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/3">
                  <img src={opportunity.image} alt={opportunity.title} className="w-full max-w-sm mx-auto" />
                </div>
                
                <div className="lg:w-2/3 space-y-6">
                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-navy mb-2 font-condensed">{opportunity.title}</h2>
                    <div className="flex justify-center lg:justify-start mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-sunflower fill-current" />)}
                    </div>
                    <p className="text-gray-700 text-lg mb-6">{opportunity.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="font-bold text-lg text-navy mb-2 flex items-center">
                        <div className="w-2 h-2 bg-sunflower rounded-full mr-3"></div>
                        Trách Nhiệm Chính
                      </h3>
                      <ul className="space-y-2">
                        {opportunity.responsibilities.map((responsibility, idx) => <li key={idx} className="text-gray-700 flex items-start">
                            <span className="text-sunflower mr-2">•</span>
                            {responsibility}
                          </li>)}
                      </ul>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-bold text-navy mb-2 flex items-center">
                          <DollarSign className="h-4 w-4 text-sunflower mr-2" />
                          Thu Nhập
                        </h3>
                        <p className="text-sunflower font-semibold">{opportunity.salary}</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-bold text-navy mb-2 flex items-center">
                          <TrendingUpIcon className="h-4 w-4 text-sunflower mr-2" />
                          Tăng Trưởng
                        </h3>
                        <p className="text-gray-700">{opportunity.growth}</p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-sunflower/10 to-navy/10 p-6 rounded-lg border-l-4 border-sunflower">
                      <h3 className="font-bold text-lg text-navy mb-2">Yêu Cầu & Nhu Cầu Thị Trường</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-700"><strong>Yêu cầu:</strong> {opportunity.requirements}</p>
                        </div>
                        <div>
                          <p className="text-gray-700"><strong>Nhu cầu:</strong> <span className="text-sunflower font-semibold">{opportunity.demand}</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
          
        </div>
      </div>
      <Footer />
    </>;
};
export default CareerOpportunitiesPage;