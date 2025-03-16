
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Thị Mai",
    role: "CEO, TechStart Solutions",
    avatar: "https://i.pravatar.cc/150?img=1",
    content: "Khóa học VA Pro đã giúp tôi học được nhiều kỹ năng mới và tạo được nguồn thu nhập ổn định. Cảm ơn đội ngũ giảng viên tận tâm.",
    rating: 5,
    company: "TechStart Solutions"
  },
  {
    id: 2,
    name: "Trần Minh Đức",
    role: "Founder, EcoGrowth",
    avatar: "https://i.pravatar.cc/150?img=3",
    content: "Tôi đã tìm được khách hàng ngay sau khi hoàn thành khóa học. Phương pháp giảng dạy rất thực tế và dễ áp dụng.",
    rating: 5,
    company: "EcoGrowth"
  },
  {
    id: 3,
    name: "Lê Thị Hương",
    role: "Director, Global Edu",
    avatar: "https://i.pravatar.cc/150?img=5",
    content: "Sự tận tâm và hiểu biết sâu sắc của các giảng viên là điều tôi đánh giá cao nhất. Khóa học thực sự đã thay đổi sự nghiệp của tôi.",
    rating: 5,
    company: "Global Edu"
  },
  {
    id: 4,
    name: "Phạm Văn Tùng",
    role: "Project Manager, BuildFlow",
    avatar: "https://i.pravatar.cc/150?img=8",
    content: "Tôi đã tăng thu nhập gấp đôi sau 3 tháng áp dụng những gì học được từ khóa học. Đặc biệt là các kỹ năng giao tiếp và tìm kiếm khách hàng.",
    rating: 5,
    company: "BuildFlow"
  }
];

const ClientTestimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-warmWhite to-sunflower/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Học Viên Nói Gì</h2>
          <p className="section-subtitle">
            Lắng nghe từ các học viên đã thành công trong lĩnh vực VA sau khi tham gia khóa học
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white/70 backdrop-blur-md border-none navy-shadow card-hover overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <Avatar className="h-14 w-14 mr-4 border-2 border-sunflower">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-sunflower/50 text-navy font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-navy text-lg">{testimonial.name}</h4>
                    <p className="text-navy/70 text-sm">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-sunflower text-sunflower" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-navy/80 italic">"{testimonial.content}"</p>
                </div>
                <div className="mt-4 pt-4 border-t border-navy/10">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-navy/60">{testimonial.company}</span>
                    <span className="text-xs text-navy/60">Học Viên Đã Xác Thực</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
