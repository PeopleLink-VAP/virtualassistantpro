import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Podcast } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutDuyen = () => {
  return (
    <section className="py-20 bg-warmWhite relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-20 h-20 bg-sunflower/10 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-leafGreen/20 rounded-full animate-float"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-sunflower/10 rounded-2xl"></div>
              <img 
                src="/images/duyen/profile_2.jpg" 
                alt="Duyen - Virtual Assistant Pro"
                className="relative rounded-2xl shadow-lg w-full max-w-md mx-auto object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl md:text-4xl font-['Roboto_Condensed'] text-navy mb-6">
              Xin chào, tôi là <span className="text-sunflower font-['Big_Shoulders_Stencil']">Duyên</span>
            </h2>
            
            <p className="text-lg text-navy/80 mb-6 leading-relaxed">
              Với hơn 10 năm kinh nghiệm trong Virtual Assistant, Coaching và hỗ trợ doanh nghiệp quốc tế, tôi đã trực tiếp đồng hành cùng hàng trăm cá nhân và công ty ở nhiều thị trường khác nhau để xây dựng hệ thống, tối ưu quy trình và mở rộng kinh doanh.
            </p>
            
            <p className="text-lg text-navy/80 mb-6 leading-relaxed">
              Điều tôi học được sau từng dự án là: mọi doanh nghiệp – từ startup đến tập đoàn – đều cần người hỗ trợ đáng tin cậy. Virtual Assistant không chỉ làm dịch vụ theo yêu cầu, mà còn trở thành người đồng hành chiến lược, lắng nghe và góp phần biến ý tưởng thành kết quả thực tế.
            </p>
            
            <p className="text-lg text-navy/80 mb-8 leading-relaxed">
              Với tôi, giá trị lớn nhất không nằm ở số lượng dự án đã hoàn thành, mà là ở việc được chứng kiến khách hàng chuyển mình, phát triển và thành công bền vững – dù tại Việt Nam hay bất kỳ nơi nào trên thế giới.
            </p>
            
            <div className="bg-sunflower/10 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-navy mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-sunflower rounded-full flex items-center justify-center text-white text-xs">✓</span>
                Lộ trình học cá nhân hóa – thiết kế cho bạn
              </h3>
              <p className="text-navy/80 mb-4">
                Từ nhiều năm kinh nghiệm trong vai trò Virtual Assistant, tuyển dụng VA và đào tạo VA, tôi đã xây dựng một chương trình học cá nhân hóa, bám sát thực tế và phù hợp với năng lực cũng như mục tiêu riêng của từng học viên.
              </p>
              <p className="text-navy/80 mb-4">
                Thay vì gò bó trong một ngách duy nhất, khóa học VAP – Virtual Assistant Pro mở ra toàn cảnh ngành VA, với lộ trình A–Z, từ cơ bản đến nâng cao. Bạn sẽ được tiếp cận nhiều mảng công việc khác nhau để hiểu rõ bức tranh toàn diện và chọn hướng đi phù hợp nhất cho mình.
              </p>
              <p className="text-navy/80">
                Điểm khác biệt quan trọng: bạn sẽ không học một mình. Luôn có mentor đồng hành 1:1, hỗ trợ, định hướng và giúp bạn vượt qua những trở ngại ban đầu. Bạn sẽ không còn cảm giác đơn độc trên hành trình trở thành một Virtual Assistant chuyên nghiệp.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/blog">
                <Button className="btn-secondary backdrop-blur-sm flex items-center gap-2 w-full sm:w-auto hover:scale-105 transition-all">
                  <BookOpen size={18} />
                  Tìm hiểu thêm về Duyên
                  <ArrowRight size={16} />
                </Button>
              </Link>
              
              <Link to="/blog">
                <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto bg-transparent border border-navy text-navy hover:bg-navy hover:text-warmWhite transition-all backdrop-blur-sm hover:scale-105">
                  <Podcast size={18} />
                  Hành trình VA từ số 0
                  <ArrowRight size={16} />
                </Button>
              </Link>
              
              <Link to="/vap-course">
                <Button className="btn-primary backdrop-blur-sm flex items-center gap-2 w-full sm:w-auto hover:scale-105 transition-all">
                  <BookOpen size={18} />
                  Khóa Học Virtual Assistant Pro
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDuyen;