import { useState } from 'react';
import { Star, Quote } from 'lucide-react';
const testimonials = [{
  id: 1,
  name: "Xuân Trang",
  role: "VAP Graduate",
  avatar: "/lovable-uploads/a97012d2-82e9-4878-9703-78f9e530b89b.png",
  content: "Học xong là thấy ngộ ra nhiều thứ hay ho lắm. Đặc biệt là cách nói chuyện với khách sao cho khéo. Chưa nói tới cách đánh ngách sao cho hợp lý. Học xong tự tin hẳn. Ước gì e biết đến chị sớm hơn. Cảm ơn chị đã support e rất nhiều. Và e vẫn sẽ còn hành chị nữa ạ",
  rating: 5
}, {
  id: 2,
  name: "Rosy Nguyen",
  role: "VAP Graduate",
  avatar: "/lovable-uploads/186159ef-cd80-4822-9e82-7520bedddde5.png",
  content: "Tối hôm qua em mới interview VA data research mà client coi portfolio xong được offer vị trí khác rate cao hơn luôn, có cái là làm giờ Mỹ nên chắc em không nhận thui ạ, ôi khó tả cái cảm giác tự thấy mình thay đổi theo thời gian luôn. Em cám ơn chị Duyen Pham, vẫn vậy, hơn cả mentor, là 1 người chị thân thiết với tất cả những đứa em như em haha",
  rating: 5
}, {
  id: 3,
  name: "Ngô Thanh Nguyên",
  role: "VAP Graduate",
  avatar: "/lovable-uploads/431726a0-a59f-4f9e-8cc6-3e44864a43ac.png",
  content: "Đi cùng chị Duyên từ lớp VA8, đến giờ mỗi khi có gì khó em vẫn nhắn chị hỗ trợ, đây không chỉ là một khóa học mà là nơi mở ra bước ngoặt mới cho rất nhiều người. Chúc VAP 14 tiếp tục dc truyền lửa và tạo ra thêm nhiều hành trình đẹp nhé",
  rating: 5
}, {
  id: 4,
  name: "Thùy Trang",
  role: "VAP Graduate",
  avatar: "/lovable-uploads/be8d8154-fff6-4b9e-a02d-c7e083bb734e.png",
  content: "Học xong từ năm ngoái nay mới trồi lên feedback vì hết khóa bận đi khách liền 😄 Duyên là một người làm nghề giỏi nên kiến thức Duyên truyền đạt rất sát với thực tế và cô đọng.",
  rating: 5
}, {
  id: 5,
  name: "Nguyễn Ngọc",
  role: "VAP Graduate",
  avatar: "/lovable-uploads/355e183c-7248-4dac-b6f6-155251b8c21d.png",
  content: "Cảm ơn chị đã truyền lại những kinh nghiệm tâm huyết mà chị đã đúc kết được qua nhiều năm trong nghề. Một khoá học tuyệt vời - một người mentor nhiệt huyết, tận tâm với nghề. VA khó - đã có chị Duyên",
  rating: 5
}, {
  id: 6,
  name: "Khánh Linh",
  role: "VAP Graduate",
  avatar: "/lovable-uploads/4aa41190-ca09-421a-b0f1-95ecedcb6a18.png",
  content: "Mới đó mà đã đến khoá 14 rồi, e cứ tưởng như mới học xong khoá 9 mới đây thôi. Học xong mới thấy, nếu mình học sớm hơn thì chặng đường đi với VA đã dài hơn nhiều. Đăng ký sớm để đến gần với giấc mơ VA nào. Vừa có mentor đồng hành vừa chinh phục được ước mơ có gì tuyệt hơn nữa đâu nhỉ!",
  rating: 5
}];
const RealLifeResults = () => {
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);
  return <section className="py-20 bg-gradient-to-br from-sunflower/5 to-navy/5 relative overflow-hidden">
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
            {testimonials.map((testimonial, index) => <div key={testimonial.id} className="relative cursor-pointer transition-all duration-300 hover:scale-110" onMouseEnter={() => setHoveredTestimonial(testimonial.id)} onMouseLeave={() => setHoveredTestimonial(null)} style={{
            animation: `float 3s ease-in-out infinite ${index * 0.5}s`
          }}>
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                
                {/* Testimonial Popup */}
                {hoveredTestimonial === testimonial.id && <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl z-10 animate-fade-in">
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/95 rotate-45"></div>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy">{testimonial.name}</h4>
                        <p className="text-sm text-navy/70">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={14} className="fill-sunflower text-sunflower" />)}
                    </div>
                    
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 text-sunflower/30" size={20} />
                      <p className="text-navy/80 text-sm leading-relaxed pl-4">
                        {testimonial.content}
                      </p>
                    </div>
                  </div>}
              </div>)}
          </div>
          
          {/* Summary Stats */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-sunflower mb-2">100%</div>
                <p className="text-navy/80">học viên được hướng dẫn 
từ A-Z về nghề VA</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-leafGreen mb-2">70 - 85%</div>
                <p className="text-navy/80">học viên có khách hàng
(tối thiểu 4 tháng quyết liệt làm)</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy mb-2">4.9/5</div>
                <p className="text-navy/80">Đánh giá khóa học từ 150 học viên</p>
                <p className="text-sm text-navy/60">
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default RealLifeResults;