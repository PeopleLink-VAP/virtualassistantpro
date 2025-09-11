import { Button } from '@/components/ui/button';
import { ExternalLink, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
const VAIndustryInfo = () => {
  return <section className="py-20 bg-gradient-to-br from-navy/5 to-leafGreen/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-sunflower/15 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-10 right-20 w-16 h-16 bg-navy/10 rounded-full animate-float"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Roboto_Condensed'] text-navy mb-4">
            <span className="text-sunflower font-condensed">Tổng quan nghành Virtual Assistant</span>
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
              Trên thế giới, Virtual Assistant (VA) không còn xa lạ. Nhưng tại Việt Nam, đây lại là một lĩnh vực đang lên mạnh mẽ nhờ những yếu tố sau:
            </p>
            
            <div className="space-y-2 mb-6">
              {["Việt Nam nổi bật với chính sách cởi mở, lực lượng lao động dồi dào, hạ tầng công nghệ hiện đại.", "Thị trường VA còn mới, mức độ cạnh tranh thấp hơn so với Ấn Độ hay Philippines.", "Xu hướng làm việc từ xa bùng nổ sau Covid-19.", "Chi phí nhân sự cạnh tranh với nhân lực có kỹ năng ngoại ngữ, công nghệ tốt.", "Thế hệ trẻ yêu thích sự tự do, mong muốn công việc linh hoạt về thời gian và địa điểm."].map((point, idx) => <div key={idx} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-sunflower rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-navy/70">{point}</span>
                </div>)}
            </div>
            
            <p className="text-navy/80 leading-relaxed mb-6">
              Đây chính là thời điểm phù hợp cho những ai muốn bắt đầu sự nghiệp trực tuyến, phát triển kỹ năng đa dạng và kết nối toàn cầu.
              <br />
              Virtual Assistant không chỉ là người hỗ trợ đơn thuần, mà còn trở thành đối tác chiến lược đồng hành cùng doanh nghiệp.
            </p>
          </div>
          
          {/* Vietnamese VA Community */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg animate-fade-in" style={{
          animationDelay: '0.1s'
        }}>
            <div className="w-12 h-12 bg-leafGreen/20 rounded-lg flex items-center justify-center mb-6">
              <Users className="text-leafGreen" size={24} />
            </div>
            
            <h3 className="text-xl font-bold text-navy mb-4">
              Cộng Đồng VA Việt Nam
            </h3>
            
            <p className="text-navy/80 leading-relaxed mb-6">
              Cộng đồng Virtual Assistant Việt Nam đang ngày càng phát triển và kết nối. Bạn có thể tham gia cộng đồng để học hỏi, chia sẻ kinh nghiệm phát triển trong ngành:
            </p>
            
            <div className="space-y-2 mb-6">
              {["Hơn 14,000 thành viên", "Chia sẻ kinh nghiệm và cơ hội việc làm", "Hỗ trợ kỹ thuật và tư vấn nghề nghiệp", "Networking với VA chuyên nghiệp"].map((point, idx) => <div key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-leafGreen rounded-full"></span>
                  <span className="text-sm text-navy/70">{point}</span>
                </div>)}
            </div>
            
            <a href="https://www.facebook.com/groups/1774549309585565" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary backdrop-blur-sm flex items-center gap-2 hover:scale-105 transition-all">
                <Users size={18} />
                Tham Gia Cộng Đồng
                <ExternalLink size={16} />
              </Button>
            </a>
          </div>
        </div>
        
        {/* Join Community Section */}
        
      </div>
    </section>;
};
export default VAIndustryInfo;