import { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Minh Anh",
    role: "Freelance VA",
    avatar: "MA",
    content: "Sau khóa học của chị Duyên, tôi đã có thể kiếm được $800/tháng chỉ sau 3 tháng. Lộ trình học rất chi tiết và thực tế.",
    rating: 5
  },
  {
    id: 2,
    name: "Thanh Hoa",
    role: "Full-time VA",
    avatar: "TH",
    content: "Khóa học giúp tôi xây dựng được portfolio chuyên nghiệp và tự tin khi giao tiếp với khách hàng nước ngoài.",
    rating: 5
  },
  {
    id: 3,
    name: "Duc Minh",
    role: "Part-time VA",
    avatar: "DM",
    content: "Tôi có thể làm việc từ xa và vẫn chăm sóc gia đình. Thu nhập ổn định $500/tháng làm part-time.",
    rating: 5
  },
  {
    id: 4,
    name: "Lan Huong",
    role: "VA Team Lead",
    avatar: "LH",
    content: "Từ một người hoàn toàn mới, giờ tôi đã quản lý team 5 VA và thu nhập $1200/tháng. Cảm ơn chị Duyên!",
    rating: 5
  },
  {
    id: 5,
    name: "Quoc Bao",
    role: "Social Media VA",
    avatar: "QB",
    content: "Chuyên môn sâu về social media marketing giúp tôi trở thành VA được nhiều client tin tưởng.",
    rating: 5
  },
  {
    id: 6,
    name: "Thuy Linh",
    role: "Admin VA",
    avatar: "TL",
    content: "Kỹ năng tổ chức và quản lý thời gian từ khóa học giúp tôi xử lý được nhiều client cùng lúc.",
    rating: 5
  }
];

const RealLifeResults = () => {
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-sunflower/5 to-navy/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-sunflower/10 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-leafGreen/15 rounded-full animate-float"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Roboto_Condensed'] text-navy mb-4">
            Kết Quả <span className="text-sunflower font-condensed">Thực Tế</span>
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Khám phá những câu chuyện thành công của các học viên đã hoàn thành khóa học
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Floating Avatars */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="relative cursor-pointer transition-all duration-300 hover:scale-110"
                onMouseEnter={() => setHoveredTestimonial(testimonial.id)}
                onMouseLeave={() => setHoveredTestimonial(null)}
                style={{
                  animation: `float 3s ease-in-out infinite ${index * 0.5}s`
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-sunflower to-leafGreen rounded-full flex items-center justify-center text-white font-bold shadow-lg hover:shadow-xl transition-shadow">
                  {testimonial.avatar}
                </div>
                
                {/* Testimonial Popup */}
                {hoveredTestimonial === testimonial.id && (
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl z-10 animate-fade-in">
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/95 rotate-45"></div>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-sunflower to-leafGreen rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy">{testimonial.name}</h4>
                        <p className="text-sm text-navy/70">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-sunflower text-sunflower" />
                      ))}
                    </div>
                    
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 text-sunflower/30" size={20} />
                      <p className="text-navy/80 text-sm leading-relaxed pl-4">
                        {testimonial.content}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Summary Stats */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-sunflower mb-2">100%</div>
                <p className="text-navy/80">học viên được hướng dẫn từ A-Z về nghề VA</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-leafGreen mb-2">55-75%</div>
                <p className="text-navy/80">học viên tìm được việc trong vòng 6 tháng</p>
                <p className="text-sm text-navy/60">quyết liệt làm</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy mb-2">4.9/5</div>
                <p className="text-navy/80">Đánh giá khóa học</p>
                <p className="text-sm text-navy/60">từ 150+ học viên</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealLifeResults;