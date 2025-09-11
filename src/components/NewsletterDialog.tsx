import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Send, CheckCircle, Loader2, UserCheck, X, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { subscribeToNewsletter } from '@/utils/newsletterSubscription';
import { useCookies } from '@/hooks/useCookies';

interface NewsletterDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (email: string) => void;
  title?: string;
  description?: string;
  showNameField?: boolean;
  source?: string;
}

const NewsletterDialog: React.FC<NewsletterDialogProps> = ({
  isOpen,
  onClose,
  onSuccess,
  title = "Nhận Tài Liệu Miễn Phí",
  description = "Đăng ký nhận newsletter để cập nhật những thông tin mới nhất về khóa học, tips VA và cơ hội việc làm trong ngành Virtual Assistant",
  showNameField = false,
  source = 'newsletter_dialog'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isReturningUser, setIsReturningUser] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState('');
  const { toast } = useToast();
  const { getNewsletterData, setNewsletterData } = useCookies();

  // Check for existing registration on component mount
  useEffect(() => {
    if (isOpen) {
      const newsletterData = getNewsletterData();
      
      if (newsletterData.isRegistered && newsletterData.email) {
        setRegisteredEmail(newsletterData.email);
        setIsReturningUser(true);
        
        // If user is already registered, call onSuccess immediately
        if (onSuccess) {
          onSuccess(newsletterData.email);
          onClose();
          return;
        }
      }
    }
  }, [isOpen, getNewsletterData, onSuccess, onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailToSubmit = isReturningUser ? registeredEmail : formData.email;
    
    if (!emailToSubmit) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập email của bạn",
        variant: "destructive"
      });
      return;
    }
    
    if (showNameField && !isReturningUser && !formData.name) {
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
            name: showNameField ? formData.name : undefined,
            source: isReturningUser ? `${source}_returning` : source,
            isReturningUser: isReturningUser
          }
        }
      });

      if (emailResponse.error) {
        throw new Error(emailResponse.error.message);
      }

      // Also subscribe to newsletter system
      const result = await subscribeToNewsletter(emailToSubmit, isReturningUser ? `${source}_returning` : source);
      
      // Store registration data in cookies for new users
      if (!isReturningUser) {
        setNewsletterData(emailToSubmit, source);
      }
      
      setIsSubscribed(true);
      toast({
        title: "Đăng ký thành công!",
        description: isReturningUser 
          ? "Cảm ơn bạn đã đăng ký thêm newsletter!" 
          : "Cảm ơn bạn đã đăng ký newsletter!"
      });
      
      // Call success callback with email
      if (onSuccess) {
        onSuccess(emailToSubmit);
      }
      
      // Close dialog after a short delay
      setTimeout(() => {
        onClose();
        setIsSubscribed(false);
        setFormData({ name: '', email: '' });
      }, 2000);
      
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
    setIsReturningUser(false);
    setFormData({ name: '', email: '' });
  };

  const handleClose = () => {
    onClose();
    setIsSubscribed(false);
    setFormData({ name: '', email: '' });
    setIsReturningUser(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-6">
          <div className="bg-sunflower/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-sunflower" />
          </div>
          <h3 className="text-2xl font-bold text-navy mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">
            {description}
          </p>
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
                    className="w-full bg-sunflower hover:bg-sunflower/90 text-white font-semibold py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={20} className="animate-spin mr-2" />
                        Đang xử lý...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Tiếp tục
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
                {showNameField && (
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      name="name"
                      placeholder="Họ và tên"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunflower focus:border-transparent"
                      required
                    />
                  </div>
                )}
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email của bạn"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunflower focus:border-transparent"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-sunflower hover:bg-sunflower/90 text-white font-semibold py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin mr-2" />
                      Đang xử lý...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Đăng Ký Ngay
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
            <p className="text-navy/70 text-sm">
              Chúng tôi sẽ gửi những thông tin hữu ích nhất đến email của bạn.
            </p>
          </div>
        )}

        <p className="text-xs text-gray-500 text-center mt-4">
          Chúng tôi tôn trọng quyền riêng tư của bạn. Không spam, chỉ gửi nội dung hữu ích.
        </p>
      </div>
    </div>
  );
};

export default NewsletterDialog;