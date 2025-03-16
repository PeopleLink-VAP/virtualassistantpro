
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@vap-hub.com',
    description: 'Liên hệ chung và thông tin'
  },
  {
    icon: Phone,
    title: 'Điện Thoại',
    value: '+84 (28) 1234 5678',
    description: 'Thứ 2-6 từ 9h đến 18h (GMT+7)'
  },
  {
    icon: MapPin,
    title: 'Địa Chỉ',
    value: 'TP. Hồ Chí Minh, Việt Nam',
    description: 'Quận 1, Khu Trung Tâm'
  }
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
          <h2 className="section-title">Liên Hệ</h2>
          <p className="section-subtitle">
            Bạn có câu hỏi hoặc sẵn sàng bắt đầu? Hãy liên hệ với chúng tôi, chúng tôi sẽ hỗ trợ bạn.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl navy-shadow p-6">
              <h3 className="text-xl font-bold mb-6">Thông Tin Liên Hệ</h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-10 h-10 bg-sunflower/20 rounded-full flex items-center justify-center mr-4">
                      <method.icon className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{method.title}</h4>
                      <p className="text-navy font-medium">{method.value}</p>
                      <p className="text-sm text-navy/70">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-sunflower/30 to-navy/20 backdrop-blur-md rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Giờ Làm Việc</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Thứ Hai - Thứ Sáu:</span>
                  <span>9:00 - 18:00 (GMT+7)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Thứ Bảy:</span>
                  <span>9:00 - 13:00 (GMT+7)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Chủ Nhật:</span>
                  <span>Nghỉ</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-navy/20">
                <p className="text-sm">
                  Chúng tôi cũng có lịch linh hoạt để phù hợp với các học viên khác nhau.
                </p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-2xl navy-shadow h-64">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Địa điểm văn phòng"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-white/70 backdrop-blur-md rounded-2xl navy-shadow p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6">Gửi Tin Nhắn</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
