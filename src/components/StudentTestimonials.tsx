
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GraduationCap, Award, ThumbsUp } from "lucide-react";

const students = [
  {
    id: 1,
    name: "Nguyễn Thị Linh",
    avatar: "https://i.pravatar.cc/150?img=9",
    location: "TP. Hồ Chí Minh",
    testimonial: "Chương trình đào tạo đã mang đến cho tôi sự tự tin và kỹ năng thực tế. Hiện tại tôi làm việc với các khách hàng mà trước đây tôi chưa từng nghĩ mình có thể tiếp cận.",
    specialization: "Hỗ Trợ Hành Chính",
    icon: GraduationCap
  },
  {
    id: 2,
    name: "Trần Văn Minh",
    avatar: "https://i.pravatar.cc/150?img=12",
    location: "Hà Nội",
    testimonial: "Sự hướng dẫn và các bài tập thực tế đã chuẩn bị cho tôi đối phó với các tình huống khách hàng thực tế. Thu nhập của tôi đã tăng gấp ba kể từ khi hoàn thành chương trình.",
    specialization: "Phát Triển Kinh Doanh",
    icon: Award
  },
  {
    id: 3,
    name: "Phạm Thị Hương",
    avatar: "https://i.pravatar.cc/150?img=15",
    location: "Đà Nẵng",
    testimonial: "Học hỏi từ các VA có kinh nghiệm đã tạo nên sự khác biệt lớn. Cộng đồng hỗ trợ liên tục giúp tôi không ngừng cải thiện dịch vụ của mình.",
    specialization: "Điều Phối Dự Án",
    icon: ThumbsUp
  },
  {
    id: 4,
    name: "Lê Văn Trung",
    avatar: "https://i.pravatar.cc/150?img=20",
    location: "Cần Thơ",
    testimonial: "Khóa học chú trọng vào tiêu chuẩn quốc tế và nhận thức văn hóa đã vô cùng giá trị khi làm việc với khách hàng từ các quốc gia khác nhau.",
    specialization: "Quản Lý Khách Hàng",
    icon: GraduationCap
  },
  {
    id: 5,
    name: "Võ Thị Mai",
    avatar: "https://i.pravatar.cc/150?img=21",
    location: "Huế",
    testimonial: "Chứng chỉ đã mở ra cánh cửa đến với khách hàng chất lượng cao. Các kỹ năng tôi học được đã giúp tôi tự tin xử lý các dự án phức tạp.",
    specialization: "Hỗ Trợ Hành Chính",
    icon: Award
  },
  {
    id: 6,
    name: "Nguyễn Văn Quân",
    avatar: "https://i.pravatar.cc/150?img=25",
    location: "Nha Trang",
    testimonial: "Phương pháp học thực tế đã giúp tôi dễ dàng áp dụng các kỹ năng mới ngay lập tức. Tôi đã bắt đầu có khách hàng ngay cả trước khi tốt nghiệp.",
    specialization: "Phát Triển Kinh Doanh",
    icon: ThumbsUp
  }
];

const StudentTestimonials = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([]);

  useEffect(() => {
    // Initial batch
    setVisibleTestimonials([0, 1, 2]);
    
    // Function to rotate testimonials
    const rotateTestimonials = () => {
      setVisibleTestimonials(prev => {
        const newBatch = [];
        for (let i = 0; i < 3; i++) {
          // Get next index, loop back to beginning if needed
          const nextIndex = (Math.max(...prev) + i + 1) % students.length;
          newBatch.push(nextIndex);
        }
        return newBatch;
      });
    };
    
    // Set interval to rotate testimonials every 5 seconds
    const interval = setInterval(rotateTestimonials, 5000);
    
    // Clean up interval
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-sunflower/10 to-warmWhite relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Câu Chuyện Thành Công</h2>
          <p className="section-subtitle">
            Gặp gỡ các học viên đã thay đổi sự nghiệp thông qua chương trình đào tạo của chúng tôi
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mb-12 relative">
          {students.map((student, index) => (
            <div 
              key={student.id}
              className={`
                relative transition-all duration-700 
                ${visibleTestimonials.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95 absolute -z-10'
                }
              `}
            >
              <div className="w-64 h-96 bg-white/70 backdrop-blur-md rounded-2xl p-6 flex flex-col navy-shadow overflow-hidden card-hover">
                <div className="relative mb-6">
                  <Avatar className="h-16 w-16 mx-auto border-2 border-sunflower">
                    <AvatarImage src={student.avatar} alt={student.name} />
                    <AvatarFallback className="bg-sunflower/50 text-navy font-bold">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 right-1/2 transform translate-x-1/2 bg-leafGreen text-warmWhite text-xs px-2 py-1 rounded-full">
                    {student.specialization}
                  </div>
                </div>
                
                <h4 className="font-bold text-center text-navy">{student.name}</h4>
                <p className="text-sm text-navy/70 text-center mb-4">{student.location}</p>
                
                <div className="flex-grow">
                  <p className="text-navy/80 text-sm italic">"{student.testimonial}"</p>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <student.icon className="h-6 w-6 text-sunflower" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Floating avatars with animations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {students.map((student, index) => (
            <div 
              key={`floating-${student.id}`}
              className="absolute opacity-30"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${index * 0.5}s`
              }}
            >
              <Avatar className="h-12 w-12 border-2 border-sunflower/50 animate-pulse">
                <AvatarImage src={student.avatar} alt={student.name} />
                <AvatarFallback className="bg-sunflower/30 text-navy font-bold">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
          ))}
        </div>
        
        {/* Animations CSS */}
        <style>
          {`
            @keyframes float {
              0% {
                transform: translateY(0) rotate(0deg);
              }
              50% {
                transform: translateY(-20px) rotate(5deg);
              }
              100% {
                transform: translateY(0) rotate(0deg);
              }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default StudentTestimonials;
