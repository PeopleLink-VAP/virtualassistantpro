import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, MessageSquare, ArrowRight, BookOpen } from 'lucide-react';

const CourseFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  const faqData = [
    {
      question: "Khóa học này phù hợp với ai?",
      answer: "Khóa học phù hợp với những người muốn bắt đầu sự nghiệp Virtual Assistant, những người muốn tối ưu hóa và phát triển công việc trên Fiverr, hoặc bất kỳ ai muốn tìm hiểu về các ngách mới trong ngành VA."
    },
    {
      question: "Tôi có cần kinh nghiệm trước không?",
      answer: "Không, khóa học được thiết kế từ cơ bản đến nâng cao, phù hợp cho cả người mới bắt đầu và những người đã có kinh nghiệm nhưng muốn nâng cao kỹ năng."
    },
    {
      question: "Làm thế nào để đăng ký khóa học?",
      answer: "Bạn có thể đăng ký trực tiếp trên trang web này bằng cách nhấn vào nút 'Đăng Ký Ngay' hoặc liên hệ với chúng tôi để được tư vấn chi tiết."
    },
    {
      question: "Học phí có bao gồm tài liệu học tập không?",
      answer: "Có, học phí đã bao gồm toàn bộ tài liệu học tập, công cụ hỗ trợ, và quyền truy cập vào cộng đồng học viên trọn đời."
    },
    {
      question: "Tôi có thể học online hoàn toàn không?",
      answer: "Có, khóa học được tổ chức 100% online qua Zoom với lịch học linh hoạt. Bạn cũng sẽ có quyền truy cập vào các buổi học đã ghi lại."
    },
    {
      question: "Sau khóa học tôi có được hỗ trợ tìm việc không?",
      answer: "Có, chúng tôi có mạng lưới đối tác và sẽ giới thiệu cơ hội việc làm phù hợp. Ngoài ra, bạn sẽ được hỗ trợ xây dựng hồ sơ và chuẩn bị phỏng vấn."
    }
  ];

  return (
    <section className="py-20 bg-warmWhite relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-sunflower/10 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-navy/10 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-18 h-18 bg-sunflower/10 rounded-full animate-float animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-6 animate-fade-in">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Tìm câu trả lời cho những thắc mắc phổ biến về khóa học VAP
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="group bg-white/80 rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sunflower/50 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-navy group-hover:text-sunflower transition-colors duration-300 pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-10 h-10 bg-navy rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                  openFAQ === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                }`}>
                  <ChevronDown className="h-5 w-5 text-white" />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <div className="border-t border-navy/10 pt-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                    
                    {/* Additional visual elements for opened FAQ */}
                    <div className="mt-4 flex items-center gap-2 opacity-70">
                      <div className="w-2 h-2 bg-sunflower rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-navy rounded-full animate-pulse animation-delay-300"></div>
                      <div className="w-2 h-2 bg-sunflower rounded-full animate-pulse animation-delay-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* FAQ CTA */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-700">
          <div className="bg-transparent rounded-2xl p-8 border border-gray-300 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vẫn còn thắc mắc?</h3>
            <p className="text-gray-700 mb-6">
              Đội ngũ tư vấn của chúng tôi luôn sẵn sàng giải đáp mọi câu hỏi của bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="group bg-sunflower hover:bg-navy text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 group-hover:animate-bounce" />
                    Liên Hệ Tư Vấn
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link to="/register">
                <Button className="group bg-navy hover:bg-sunflower text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 group-hover:animate-pulse" />
                    Đăng Ký Ngay
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFAQ;