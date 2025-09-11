import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Send, CheckCircle, Loader2, UserCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { subscribeToNewsletter } from '@/utils/newsletterSubscription';
import { useCookies } from '@/hooks/useCookies';

const ContactNewsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isReturningUser, setIsReturningUser] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState('');
  const [registeredName, setRegisteredName] = useState('');
  const { toast } = useToast();
  const { getNewsletterData, setNewsletterData, deleteCookie, getCookie, setCookie } = useCookies();

  // Check for existing registration on component mount
  useEffect(() => {
    const newsletterData = getNewsletterData();
    const savedName = getCookie('vap_newsletter_name');
    
    if (newsletterData.isRegistered && newsletterData.email) {
      setRegisteredEmail(newsletterData.email);
      setRegisteredName(savedName || '');
      setIsReturningUser(true);
    } else {
      // Pre-fill form for new users if they have partial data
      const savedEmail = getCookie('vap_newsletter_email');
      if (savedEmail || savedName) {
        setEmail(savedEmail || '');
        setName(savedName || '');
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailToSubmit = isReturningUser ? registeredEmail : email;
    const nameToSubmit = isReturningUser ? registeredName : name;
    
    if (!emailToSubmit) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập email của bạn",
        variant: "destructive"
      });
      return;
    }
    
    if (!nameToSubmit) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập tên của bạn",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      // Send notification email to admin
      const emailResponse = await supabase.functions.invoke('send-notification', {
        body: {
          type: 'newsletter',
          data: {
            email: emailToSubmit,
            name: nameToSubmit,
            source: isReturningUser ? 'newsletter_form_returning' : 'newsletter_form',
            isReturningUser: isReturningUser
          }
        }
      });

      if (emailResponse.error) {
        throw new Error(emailResponse.error.message);
      }

      // Also subscribe to newsletter system
      const result = await subscribeToNewsletter(emailToSubmit, isReturningUser ? 'newsletter_form_returning' : 'newsletter_form');
      
      // Store registration data in cookies for new users
      if (!isReturningUser) {
        setNewsletterData(emailToSubmit, 'newsletter_form');
      }
      
      setIsSubscribed(true);
      toast({
        title: "Đăng ký thành công!",
        description: isReturningUser 
          ? "Cảm ơn bạn đã đăng ký thêm newsletter!" 
          : "Cảm ơn bạn đã đăng ký newsletter!"
      });
      
      if (!isReturningUser) {
        setEmail('');
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

  const handleNewRegistration = () => {
    // Clear newsletter cookies
    deleteCookie('vap_newsletter_email');
    deleteCookie('vap_newsletter_date');
    deleteCookie('vap_newsletter_source');
    
    // Reset UI state
    setIsReturningUser(false);
    setRegisteredEmail('');
    setEmail('');
    setIsSubscribed(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-navy/10 to-sunflower/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-sunflower/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-10 right-20 w-16 h-16 bg-leafGreen/20 rounded-full animate-float"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-['Roboto_Condensed'] text-navy mb-4">
            <span className="text-sunflower font-condensed">Liên hệ ngay!</span>
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
              <>
                {isReturningUser ? (
                  <div className="space-y-4">
                    <div className="bg-leafGreen/10 border border-leafGreen/20 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <UserCheck className="text-leafGreen" size={20} />
                        <span className="text-leafGreen font-medium">Chào mừng bạn quay lại!</span>
                      </div>
                      <p className="text-navy/70 text-sm">
                        Email đã đăng ký: <span className="font-medium text-navy">{registeredEmail}</span>
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                            Đăng Ký Thêm
                          </>
                        )}
                      </Button>
                    </form>
                    
                    <div className="text-center">
                      <button
                        onClick={handleNewRegistration}
                        className="text-navy/60 hover:text-navy text-sm underline transition-colors"
                      >
                        Sử dụng email khác?
                      </button>
                    </div>
                  </div>
                ) : (
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
                )}
              </>
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