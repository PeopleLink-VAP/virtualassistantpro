
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Phone, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      toast.success('Đăng nhập thành công');
      navigate('/courses');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) throw error;
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-warmWhite">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-md mx-auto">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 navy-shadow">
            <h2 className="text-2xl font-bold text-navy mb-6 text-center">Đăng Nhập Thành Viên</h2>
            
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-navy/70 mb-1 block">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-navy/40" />
                  <Input
                    type="email"
                    placeholder="Email của bạn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-navy/70 mb-1 block">
                  Số điện thoại
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-navy/40" />
                  <Input
                    type="tel"
                    placeholder="Số điện thoại của bạn"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-navy/70 mb-1 block">
                  Mật khẩu
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-navy/40" />
                  <Input
                    type="password"
                    placeholder="Mật khẩu của bạn"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full btn-primary" disabled={isLoading}>
                {isLoading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-navy/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white/70 text-navy/60">Hoặc</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full bg-white hover:bg-navy hover:text-white transition-colors"
              onClick={handleGoogleLogin}
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 mr-2" />
              Đăng nhập với Google
            </Button>

            <p className="mt-4 text-sm text-center text-navy/60">
              Chưa có tài khoản?{' '}
              <Link to="/register" className="text-sunflower hover:text-sunflower/80 font-medium">
                Đăng ký ngay
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
