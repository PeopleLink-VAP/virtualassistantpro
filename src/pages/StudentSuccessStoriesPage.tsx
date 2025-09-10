import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, TrendingUp, Users, DollarSign } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Seo from '@/components/Seo';
const StudentSuccessStoriesPage = () => {
  const successStories = [{
    id: 1,
    name: "Thanh Thủy",
    image: "/lovable-uploads/ec144fed-0973-4179-912f-e6c05998c435.png",
    background: "Thủy nghỉ công việc BA (business analysis) rồi bay từ Hà Nội vào để học một khóa video editing, theo đoàn làm phim đi quay MV, cùng lúc học VA và 1 khóa Shopee. 3 bộ kĩ năng hoàn toàn khác, học từ 3 người khác nhau để giờ đây Thủy trở thành VA, một Fiverr seller level 2, một người vừa có thể edit video, vừa quản lý sàn Shopee, vừa hiểu về Amazon và có những thán cao điểm làm mức lương lên đến 4,000 USD.",
    mentorInsight: "Mình chứng kiến hành trình của Thủy từ những ngày đầu, cả những nốt cao khi công việc thuận lợi, hay những nốt trầm khi mọi thứ không như ý. Dù mọi việc có ra sao, Thủy vẫn luôn cố gắng, nỗ lực hơn cả giới hạn của bản thân để tìm được lối đi cho mình. Những thành tựu em có ngày hôm nay là hoàn toàn xứng đáng."
  }, {
    id: 2,
    name: "Phương Thảo",
    image: "/images/sunflower.png",
    background: "Thảo đến với VAP sau hơn 1 năm tự lặn ngụp với nghề, dù là một người thông thạo tiếng Anh và tiếng Nhật nhưng vẫn chưa tìm được con đường phù hợp. Em mong có thể tìm được một công việc để khi có gia đình nhỏ thì có thời gian ở gần con hơn.",
    mentorInsight: "Mình còn nhớ ngày coaching 1:1, Thảo đã chuẩn bị 40 câu hỏi, mất gần 3 tiếng để xong buổi coach nhưng cả 2 đều rất hào hứng. Đối với mình, Thảo là một học viên rất đặc biệt từ lớp VAP 04. Đặc biệt bởi mỗi lần Thảo hỏi sẽ là những câu rất dài, rất thông minh, có cảm giác nếu mình mà trả lời lơ tơ mơ là không yên với em í đâu."
  }, {
    id: 3,
    name: "Ngọc Mai",
    image: "/images/sunflower.png",
    background: "Mai là một trong những học viên đầu tiên đủ tin tưởng mình để tham gia khóa VAP 01. Mai đến với khóa học vì muốn tìm một công việc bổ trợ việc chính. Thời điểm đó em đang làm điều phối cho một công ty logistic.",
    mentorInsight: "Sau khóa học, Mai đã nhắn mình: \"Chắc em dành thời gian để trau dồi thêm, vì học xong em thấy mình cần phải cố gắng nhiều hơn nữa trước khi nhận job chị ạ\". Những tưởng Mai đã bỏ cuộc nhưng không, gần 3 tháng sau, em đã có job đầu tiên và giờ đây đã trở thành Fiverr Level 2 Seller, đã bước ra được chiếc kén của mình và phát triển hơn."
  }];
  return <>
      <Seo title="Câu Chuyện Thành Công - Virtual Assistant Pro" description="Khám phá những câu chuyện thành công đầy cảm hứng từ các học viên Virtual Assistant Pro." />
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
              Khám phá những hành trình đầy cảm hứng của các học viên Virtual Assistant Pro. 
              Mỗi câu chuyện là một hành trình không ngừng cố gắng và học hỏi trên hành trình VA đầy mới mẻ.
            </p>
            
          </div>

          {/* Success Stories */}
          <div className="space-y-16">
            {successStories.map((story, index) => <div key={story.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/3">
                  <img src={story.image} alt={story.name} className="w-full max-w-sm mx-auto" />
                </div>
                
                <div className="lg:w-2/3 space-y-6">
                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-navy mb-2 font-condensed">{story.name}</h2>
                    <div className="flex justify-center lg:justify-start mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-sunflower fill-current" />)}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="font-bold text-lg text-navy mb-2 flex items-center">
                        <div className="w-2 h-2 bg-sunflower rounded-full mr-3"></div>
                        Hành Trình Của {story.name}
                      </h3>
                      <p className="text-gray-700">{story.background}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-sunflower/10 to-navy/10 p-6 rounded-lg border-l-4 border-sunflower">
                      <h3 className="font-bold text-lg text-navy mb-2">Nhận Xét Từ Mentor</h3>
                      <p className="text-gray-700 italic">"{story.mentorInsight}"</p>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16 bg-navy text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 font-condensed">Bạn Có Muốn Trở Thành Câu Chuyện Thành Công Tiếp Theo?</h2>
            <p className="text-lg mb-8 opacity-90">
              Tham gia cùng hàng trăm học viên khác đã thay đổi cuộc sống thông qua các khóa học Virtual Assistant Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/vap-course" className="bg-sunflower text-navy px-8 py-3 rounded-lg font-semibold hover:bg-sunflower/90 transition duration-300">
                Xem Khóa Học
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy transition duration-300">
                Tư Vấn Miễn Phí
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>;
};
export default StudentSuccessStoriesPage;