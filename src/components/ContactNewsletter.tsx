import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { subscribeToNewsletter } from '@/utils/newsletterSubscription';

const ContactNewsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập email của bạn",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const result = await subscribeToNewsletter(email, 'newsletter_form');
      
      if (result.success) {
        setIsSubscribed(true);
        toast({
          title: "Đăng ký thành công!",
          description: result.message
        });
        setEmail('');
      } else {
        toast({
          title: "Lỗi đăng ký",
          description: result.message,
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Đã xảy ra lỗi không mong muốn. Vui lòng thử lại sau.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-navy/10 to-sunflower/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-sunflower/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-10 right-20 w-16 h-16 bg-leafGreen/20 rounded-full animate-float"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-['Roboto_Condensed'] text-navy mb-4">
            Liên Hệ <span className="text-sunflower font-['Big_Shoulders_Stencil']">Với Chúng Tôi</span>
          </h2>
          <p className="text-lg text-navy/70 mb-8 max-w-2xl mx-auto">
            Đăng ký nhận newsletter để cập nhật những thông tin mới nhất về khóa học, 
            tips VA và cơ hội việc làm trong ngành Virtual Assistant
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="text-sunflower" size={32} />
            </div>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Nhập email của bạn..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 text-lg border border-navy/20 rounded-lg focus:border-sunflower focus:ring-sunflower bg-white/50"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="btn-primary backdrop-blur-sm flex items-center gap-2 w-full py-3 text-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Đang xử lý...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Đăng Ký Newsletter
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-leafGreen/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-leafGreen" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">
                  Đăng ký thành công!
                </h3>
                <p className="text-navy/70">
                  Chúng tôi sẽ gửi những thông tin hữu ích nhất đến email của bạn.
                </p>
              </div>
            )}
            
            <div className="mt-6 pt-6 border-t border-navy/10">
              <p className="text-sm text-navy/60 mb-4">
                Bạn cũng có thể liên hệ trực tiếp qua:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contact@virtualassistantpro.vn"
                  className="text-navy hover:text-sunflower transition-colors font-medium"
                >
                  contact@virtualassistantpro.vn
                </a>
                <a 
                  href="https://www.facebook.com/groups/1774549309585565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy hover:text-sunflower transition-colors font-medium"
                >
                  Facebook Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactNewsletter;