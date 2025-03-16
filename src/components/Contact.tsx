
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ liên hệ lại sớm.');
      // Would normally reset the form here
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-navy/5 to-warmWhite">
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
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Họ Tên
                  </label>
                  <Input id="name" placeholder="Nhập họ tên của bạn" required className="bg-white/50" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Nhập email của bạn" required className="bg-white/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="inquiry-type" className="text-sm font-medium">
                  Loại Yêu Cầu
                </label>
                <Select>
                  <SelectTrigger className="bg-white/50">
                    <SelectValue placeholder="Chọn loại yêu cầu" />
                  </SelectTrigger>
                  <SelectContent className="bg-white/90 backdrop-blur-md">
                    <SelectItem value="course">Tôi muốn tìm hiểu khóa học</SelectItem>
                    <SelectItem value="va">Tôi muốn trở thành VA</SelectItem>
                    <SelectItem value="partnership">Cơ hội hợp tác</SelectItem>
                    <SelectItem value="other">Yêu cầu khác</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Tin Nhắn
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Bạn cần hỗ trợ gì?" 
                  className="min-h-[120px] bg-white/50"
                  required 
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Đang gửi...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Gửi Tin Nhắn
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
