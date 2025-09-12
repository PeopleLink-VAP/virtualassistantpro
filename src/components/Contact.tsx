
import { Mail, Phone, MapPin, MessageSquare, Calendar, Download, HelpCircle } from 'lucide-react';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';
import facebookQrCode from '@/assets/facebook-qr-code.png';

const contactMethods = [
  {
    icon: MessageSquare,
    title: 'Facebook Messenger',
    value: 'https://www.facebook.com/duyen.pham.1048',
    description: 'Nhắn tin qua Facebook Messenger',
    qrCode: facebookQrCode
  }
];

const commonQuestions = [
  'Khóa học này có phù hợp với nền tảng của mình không?',
  'Làm sao để đăng ký nhanh chóng và thuận tiện?',
  'Thông tin về học phí, lịch học, chứng chỉ sau khi hoàn thành?',
  'Muốn nói chuyện trực tiếp để hiểu rõ hơn trước khi quyết định.'
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-navy/5 to-warmWhite relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-sunflower/10 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-40 left-10 w-16 h-16 bg-sunflower/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-sunflower/15 rounded-full animate-sway"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title flex items-center justify-center gap-2">
            <Mail className="h-8 w-8 text-sunflower" />
            Liên hệ với chúng tôi
          </h2>
          <p className="section-subtitle">
            Bạn đang quan tâm đến Khóa học Trợ lý Ảo (Virtual Assistant) nhưng còn thắc mắc? Đừng ngần ngại, chúng tôi luôn sẵn sàng hỗ trợ bạn.
          </p>
        </div>
        
        {/* Common Questions Section */}
        <div className="mb-16">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl navy-shadow p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-navy">
              <HelpCircle className="h-6 w-6 text-sunflower" />
              Thường thì học viên sẽ hỏi:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {commonQuestions.map((question, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-sunflower/10 rounded-lg">
                  <div className="w-6 h-6 bg-sunflower rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">{idx + 1}</span>
                  </div>
                  <p className="text-navy">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl navy-shadow p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Phone className="h-5 w-5 text-sunflower" />
                Thông tin liên hệ
              </h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-10 h-10 bg-sunflower/20 rounded-full flex items-center justify-center mr-4">
                      <method.icon className="h-5 w-5 text-navy" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{method.title}</h4>
                      {method.title !== 'Facebook Messenger' && (
                        <p className="text-navy font-medium">{method.value}</p>
                      )}
                      <p className="text-sm text-navy/70">{method.description}</p>
                      {method.qrCode && (
                        <div className="mt-3">
                          <img 
                            src={method.qrCode} 
                            alt="Facebook QR Code" 
                            className="w-24 h-24 border border-navy/20 rounded-lg"
                          />
                          <p className="text-xs text-navy/60 mt-1">Quét QR để kết nối Facebook</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-navy/20">
                <p className="text-sm text-navy/70 flex items-center gap-2">
                  <span className="text-sunflower">👉</span>
                  Đội ngũ chúng tôi sẽ phản hồi trong vòng 24 giờ (ngày làm việc).
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-sunflower/30 to-navy/20 backdrop-blur-md rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-navy" />
                Bước tiếp theo
              </h3>
              <p className="text-navy mb-4">
                Chưa sẵn sàng liên hệ?
              </p>
              <div className="space-y-3">
                <Link 
                  to="/free-resources" 
                  className="flex items-center gap-2 p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors"
                >
                  <Download className="h-4 w-4 text-sunflower" />
                  <span className="text-sm font-medium">Tải tài liệu miễn phí dành cho người mới bắt đầu làm VA</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-white/70 backdrop-blur-md rounded-2xl navy-shadow p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-sunflower" />
              Gửi tin nhắn nhanh
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
