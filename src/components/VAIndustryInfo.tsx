import { Button } from '@/components/ui/button';
import { ExternalLink, Users } from 'lucide-react';

const VAIndustryInfo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-navy/5 to-leafGreen/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-sunflower/15 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-10 right-20 w-16 h-16 bg-navy/10 rounded-full animate-float"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Roboto_Condensed'] text-navy mb-4">
            Về Ngành <span className="text-sunflower font-['Big_Shoulders_Stencil']">Virtual Assistant</span>
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Khám phá cơ hội nghề nghiệp và cộng đồng Virtual Assistant Việt Nam
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Virtual Assistant Industry */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg animate-fade-in">
            <div className="w-12 h-12 bg-sunflower/20 rounded-lg flex items-center justify-center mb-6">
              <Users className="text-sunflower" size={24} />
            </div>
            
            <h3 className="text-xl font-bold text-navy mb-4">
              Virtual Assistant Industry
            </h3>
            
            <p className="text-navy/80 leading-relaxed mb-6">
              Ngành Virtual Assistant đang phát triển mạnh mẽ trên toàn cầu với nhu cầu ngày càng tăng cao. 
              Đây là cơ hội vàng cho những người muốn làm việc từ xa, linh hoạt thời gian và phát triển kỹ năng đa dạng. 
              Virtual Assistant không chỉ là công việc hỗ trợ đơn thuần mà còn là đối tác chiến lược của doanh nghiệp.
            </p>
            
            <div className="space-y-2">
              {[
                "Thị trường toàn cầu trị giá hàng tỷ USD",
                "Tăng trưởng 25% mỗi năm",
                "Cơ hội làm việc với khách hàng quốc tế",
                "Thu nhập ổn định và có thể tăng theo kinh nghiệm"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sunflower rounded-full"></span>
                  <span className="text-sm text-navy/70">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Vietnamese VA Community */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 bg-leafGreen/20 rounded-lg flex items-center justify-center mb-6">
              <Users className="text-leafGreen" size={24} />
            </div>
            
            <h3 className="text-xl font-bold text-navy mb-4">
              Cộng Đồng VA Việt Nam
            </h3>
            
            <p className="text-navy/80 leading-relaxed mb-6">
              Cộng đồng Virtual Assistant Việt Nam đang ngày càng phát triển và kết nối. 
              Chúng tôi tạo ra một môi trường hỗ trợ lẫn nhau, chia sẻ kinh nghiệm và cùng nhau 
              vươn tới thành công. Tham gia cộng đồng để không bỏ lỡ những cơ hội tuyệt vời.
            </p>
            
            <div className="space-y-2 mb-6">
              {[
                "Hơn 5000+ thành viên tích cực",
                "Chia sẻ kinh nghiệm và cơ hội việc làm",
                "Hỗ trợ kỹ thuật và tư vấn nghề nghiệp",
                "Networking với VA chuyên nghiệp"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-leafGreen rounded-full"></span>
                  <span className="text-sm text-navy/70">{point}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="https://www.facebook.com/groups/1774549309585565" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="btn-primary backdrop-blur-sm flex items-center gap-2 hover:scale-105 transition-all">
                <Users size={18} />
                Tham Gia Cộng Đồng
                <ExternalLink size={16} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VAIndustryInfo;