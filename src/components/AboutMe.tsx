import React from 'react';
import { Dog, Home, Utensils, BookOpen, Briefcase, Building, Globe, Users, GraduationCap, Award, Quote, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '/images/duyen/profile_1.jpg';

const QuickFacts = () => (
  <section className="py-12 bg-warmWhite">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="md:w-1/2 flex justify-center">
        <img src={profileImage} alt="Profile" className="w-full max-w-sm h-auto rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-navy mb-8">Vài nét nhanh về <span className="text-sunflower">Duyên</span></h2>
        <p className="text-lg text-navy/80 max-w-3xl mx-auto mb-12">
          Mình tin rằng cách phát triển nhanh và toàn diện nhất chính là <b>bước ra khỏi vùng an toàn, tự đặt bản thân vào những tình huống và môi trường mới</b>. Càng va chạm nhiều, mình càng học hỏi, trau dồi và khám phá ra những khía cạnh thú vị của bản thân mà trước đây chưa từng nhận ra. Tuy nhiên, việc bước ra vùng an toàn cần được làm một cách kĩ lưỡng, có trách nhiệm và chiến lược.
        </p>
        <p className="text-lg text-navy/80 max-w-3xl mx-auto mb-12">
          Với mình, nghề Virtual Assistant chính là cánh cửa để đến gần hơn với sự đa dạng đó. Mình thích được đồng hành cùng nhiều khách hàng khác nhau, lắng nghe cách họ nhìn nhận và giải quyết vấn đề, rồi từ đó tìm cách hỗ trợ phù hợp cho từng người. Mỗi dự án, mỗi con người đều mang lại cho mình một trải nghiệm mới, đôi khi vượt xa khỏi giới hạn và lối mòn cũ.
        </p>
        <p className="text-lg text-navy/80 max-w-3xl mx-auto mb-12">
          Là người mang tinh thần <b>phụng sự</b>, mình luôn mong muốn được dùng hết sức – tâm – lực để hỗ trợ khách hàng, đồng hành cùng học viên và đóng góp cho cộng đồng.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <Dog className="w-12 h-12 text-sunflower mb-3" />
            <p className="text-navy/80 text-center">Một tình yêu nồng nhiệt dành cho các em cún</p>
          </div>
          <div className="flex flex-col items-center">
            <Home className="w-12 h-12 text-sunflower mb-3" />
            <p className="text-navy/80 text-center">Người Hội An, sống ở Sài Gòn</p>
          </div>
          <div className="flex flex-col items-center">
            <Utensils className="w-12 h-12 text-sunflower mb-3" />
            <p className="text-navy/80 text-center">Mình thích nấu ăn hơn mình nghĩ</p>
          </div>
          <div className="flex flex-col items-center">
            <BookOpen className="w-12 h-12 text-sunflower mb-3" />
            <p className="text-navy/80 text-center">Thích đọc sách giấy hơn đọc kindle</p>
          </div>
        </div>
        
        {/* Contact Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="https://www.facebook.com/duyen.pham.1048" target="_blank" rel="noopener noreferrer">
            <Button className="btn-secondary flex items-center gap-2 hover:scale-105 transition-transform">
              <MessageSquare className="h-5 w-5" />
              Contact Duyen - Facebook
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const careerHighlights = [
  {
    title: 'Business Development Manager',
    subtitle: 'FMCG - Retail & Wholesale',
    description: 'Thành công đưa Sukin Australian Natural Skincare – thương hiệu chăm sóc da thuần chay số 1 tại Úc (2017) vào thị trường Việt Nam. Trong 2 năm đầu, doanh số tăng hơn 200%, thương hiệu mở rộng sự hiện diện mạnh mẽ trên các kênh bán sỉ, bán lẻ và online.',
    icon: Briefcase
  },
  {
    title: 'Co-Founder – War & Peace Homestay',
    subtitle: 'Hospitality',
    description: 'Xây dựng homestay độc bản với phong cách chiến tranh và hiện vật sưu tầm trong nhiều năm. Đạt hơn 400 review 5 sao, giữ danh hiệu Superhost 10+ quý liên tiếp, trở thành đối tác chiến lược của Airbnb tại miền Trung (2020).',
    icon: Building
  },
  {
    title: 'Virtual Assistant – Fiverr',
    subtitle: 'Freelancing',
    description: 'Thực hiện hơn 200 dự án cho khách hàng toàn cầu, đạt 100+ đánh giá 5 sao trên Fiverr. Kinh nghiệm hỗ trợ đa lĩnh vực: giáo dục, bán lẻ, công nghệ, thương mại điện tử.',
    icon: Globe
  },
  {
    title: 'E-commerce Seller',
    subtitle: 'Amazon, Etsy, Shopify, Shopee, Tiki, Lazada',
    description: 'Vận hành và phát triển nhiều gian hàng trong và ngoài nước, hỗ trợ công ty/ đối tác bán hàng nghìn đơn hàng. Đồng thời tự xây dựng dòng sản phẩm riêng và xuất khẩu sang thị trường quốc tế.',
    icon: Award
  },
  {
    title: 'Community Builder – Virtual Assistant Việt Nam',
    subtitle: '14,000+ thành viên',
    description: 'Cộng đồng VA - Virtual Assistant Việt Nam là một trong 3 cộng đồng VA lớn nhất Việt Nam, nơi chia sẻ tài nguyên, cơ hội việc làm và kiến thức chuyên sâu hoàn toàn miễn phí cho thành viên.',
    icon: Users
  },
  {
    title: 'Coaching – Virtual Assistant Pro',
    subtitle: '150+ học viên',
    description: 'Thiết kế và trực tiếp giảng dạy khóa học chuyên sâu giúp học viên nắm toàn cảnh về nghề VA, từ xây dựng thương hiệu cá nhân, chọn ngách, đến hướng dẫn 1:1. Hơn 150 học viên đã được hướng dẫn về nghề và một số đã thành công.',
    icon: GraduationCap
  },
  {
    title: 'Founder Assistiv Agency',
    subtitle: 'BPO Service',
    description: 'Assistiv Agency giúp hỗ trợ kết nối VA Việt Nam với khách hàng quốc tế tìm kiếm nguồn lực tại thị trường Việt Nam, hỗ trợ VA Việt Nam vươn xa trên thị trường nước ngoài.',
    icon: Building
  }
];

const MyJourney = () => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-navy mb-4">HÀNH TRÌNH SỰ NGHIỆP VÀ NHỮNG DẤU ẤN TIÊU BIỂU</h2>
        <p className="text-lg text-navy/70 italic">Hành trình đa sắc, định hình một bản sắc.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {careerHighlights.map((highlight, index) => {
          const IconComponent = highlight.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sunflower/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-navy" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-navy mb-1">{highlight.title}</h3>
                  <p className="text-sm text-sunflower font-medium mb-3">({highlight.subtitle})</p>
                  <p className="text-navy/80 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="bg-sunflower/10 rounded-xl p-8 text-center">
        <Quote className="w-8 h-8 text-sunflower mx-auto mb-4" />
        <p className="text-lg text-navy italic font-medium">
          "Niềm vui của tôi đơn giản là nhìn thấy bản thân biến hóa ở những phiên bản khác nhau và sống hết mình với những phiên bản đó"
        </p>
      </div>
    </div>
  </section>
);

const AboutMe = () => {
  return (
    <div className="bg-warmWhite">
      <QuickFacts />
      <MyJourney />
    </div>
  );
};

export default AboutMe;