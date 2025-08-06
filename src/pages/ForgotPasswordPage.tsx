import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Mail } from 'lucide-react';

const forgotPasswordSchema = z.object({
  email: z.string().email('Email không hợp lệ').min(1, 'Email là bắt buộc'),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      
      if (error) {
        toast({
          title: "Lỗi",
          description: error.message || "Có lỗi xảy ra khi gửi email đặt lại mật khẩu",
          variant: "destructive",
        });
      } else {
        setEmailSent(true);
        toast({
          title: "Email đã được gửi",
          description: "Vui lòng kiểm tra email để đặt lại mật khẩu",
        });
      }
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Có lỗi xảy ra. Vui lòng thử lại.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Quên Mật Khẩu - Virtual Assistant Pro</title>
        <meta name="description" content="Đặt lại mật khẩu cho tài khoản Virtual Assistant Pro của bạn" />
      </Helmet>
      
      <div className="min-h-screen bg-warmWhite">
        <Navbar />
        
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <Link to="/login" className="inline-flex items-center text-navy/70 hover:text-sunflower transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Quay lại đăng nhập
                </Link>
              </div>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-navy" />
                </div>
                <h1 className="text-3xl font-bold text-navy mb-4">Quên Mật Khẩu?</h1>
                <p className="text-navy/70">
                  {emailSent 
                    ? "Chúng tôi đã gửi email hướng dẫn đặt lại mật khẩu đến địa chỉ email của bạn."
                    : "Nhập địa chỉ email của bạn để nhận hướng dẫn đặt lại mật khẩu"
                  }
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 navy-shadow">
                {!emailSent ? (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="example@domain.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? 'Đang gửi...' : 'Gửi Email Đặt Lại'}
                      </Button>
                    </form>
                  </Form>
                ) : (
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <Mail className="w-8 h-8 text-green-600" />
                    </div>
                    <p className="text-navy/80">
                      Email đã được gửi đi thành công! Vui lòng kiểm tra hộp thư và làm theo hướng dẫn.
                    </p>
                    <Link to="/login">
                      <Button variant="outline" className="w-full">
                        Quay lại đăng nhập
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default ForgotPasswordPage;
