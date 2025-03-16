
import { Globe, Clock, Shield, Users } from 'lucide-react';

const stats = [
  { label: 'Học Viên Đã Đào Tạo', value: '200+' },
  { label: 'Sự Hài Lòng', value: '98%' },
  { label: 'Năm Kinh Nghiệm', value: '7+' },
  { label: 'Khóa Học', value: '10+' }
];

const values = [
  { 
    icon: Globe, 
    title: 'Chuyên Môn Hóa',
    description: 'Đào tạo các kỹ năng chuyên sâu giúp học viên tự tin làm việc trong nhiều lĩnh vực khác nhau.'
  },
  { 
    icon: Clock, 
    title: 'Hỗ Trợ Tận Tâm',
    description: 'Cam kết đồng hành cùng học viên trong suốt quá trình học tập và phát triển nghề nghiệp.'
  },
  { 
    icon: Shield, 
    title: 'Chuyên Nghiệp',
    description: 'Luôn đề cao tính chuyên nghiệp, đạo đức nghề nghiệp và các tiêu chuẩn cao nhất trong đào tạo.'
  },
  { 
    icon: Users, 
    title: 'Tư Duy Phát Triển',
    description: 'Khuyến khích học hỏi liên tục và phát triển không ngừng cho cả học viên và đội ngũ giảng dạy.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-warmWhite to-navy/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Về Virtual Assistant Pro</h2>
          <p className="section-subtitle">
            Sứ mệnh của chúng tôi là nuôi dưỡng sự phát triển chuyên nghiệp cho các Trợ Lý Ảo tại Việt Nam
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 navy-shadow">
              <div className="text-4xl lg:text-5xl font-bold text-sunflower mb-2">{stat.value}</div>
              <div className="text-navy/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Our Story */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl navy-shadow p-8 md:p-10 mb-20">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Câu Chuyện Của Chúng Tôi</h3>
              <div className="space-y-4 text-navy/80">
                <p>
                  Virtual Assistant Pro được thành lập vào năm 2017 với tầm nhìn tạo cơ hội cho các chuyên gia 
                  Việt Nam trong thị trường làm việc từ xa toàn cầu đồng thời cung cấp hỗ trợ xuất sắc cho các 
                  doanh nghiệp quốc tế.
                </p>
                <p>
                  Bắt đầu với chỉ 5 VA và 3 khách hàng, chúng tôi đã phát triển thành một cộng đồng phát triển 
                  với hơn 200 Trợ Lý Ảo chuyên nghiệp, đào tạo nhiều khóa học chất lượng cao.
                </p>
                <p>
                  Biểu tượng hoa hướng dương của chúng tôi đại diện cho sự phát triển, nhiệt huyết và lạc quan 
                  mà chúng tôi mang đến cho mỗi hành trình sự nghiệp VA. Giống như hoa hướng dương luôn hướng 
                  về phía ánh sáng, chúng tôi liên tục thích nghi và phát triển để đáp ứng nhu cầu học tập 
                  không ngừng thay đổi.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="VAP-Hub team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h4 className="text-xl font-bold">Cùng Nhau Phát Triển</h4>
                    <p className="mt-2 text-white/90">
                      Đội ngũ chuyên gia của chúng tôi cam kết nuôi dưỡng sự phát triển cho cả học viên và doanh nghiệp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <h3 className="text-2xl font-bold text-center mb-10">Giá Trị Cốt Lõi</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div key={idx} className="bg-white/70 backdrop-blur-md rounded-xl p-6 navy-shadow card-hover">
              <div className="w-12 h-12 bg-sunflower/20 rounded-full flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-navy" />
              </div>
              <h4 className="text-xl font-bold mb-2">{value.title}</h4>
              <p className="text-navy/80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
