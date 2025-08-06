import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale, Shield, Users } from 'lucide-react';

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Điều Khoản Dịch Vụ - Virtual Assistant Pro</title>
        <meta name="description" content="Điều khoản và điều kiện sử dụng dịch vụ của Virtual Assistant Pro" />
      </Helmet>
      
      <div className="min-h-screen bg-warmWhite">
        <Navbar />
        
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Link to="/login" className="inline-flex items-center text-navy/70 hover:text-sunflower transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Quay lại
                </Link>
              </div>

              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-navy" />
                </div>
                <h1 className="text-4xl font-bold text-navy mb-4">Điều Khoản Dịch Vụ</h1>
                <p className="text-navy/70">
                  Cập nhật lần cuối: 06 tháng 8, 2025
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 navy-shadow prose prose-lg max-w-none">
                <div className="space-y-8">
                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-sunflower" />
                      <h2 className="text-2xl font-bold text-navy mb-0">1. Chấp Nhận Điều Khoản</h2>
                    </div>
                    <p className="text-navy/80">
                      Bằng cách truy cập và sử dụng trang web Virtual Assistant Pro, bạn đồng ý tuân thủ các điều khoản và điều kiện được nêu trong tài liệu này. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng không sử dụng dịch vụ của chúng tôi.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4">2. Mô Tả Dịch Vụ</h2>
                    <p className="text-navy/80 mb-4">
                      Virtual Assistant Pro cung cấp các dịch vụ sau:
                    </p>
                    <ul className="list-disc pl-6 text-navy/80 space-y-2">
                      <li>Khóa học đào tạo Virtual Assistant chuyên nghiệp</li>
                      <li>Kết nối mạng lưới VA và khách hàng</li>
                      <li>Tài nguyên và hướng dẫn miễn phí</li>
                      <li>Hỗ trợ tư vấn và coaching cá nhân</li>
                      <li>Cơ hội việc làm và phát triển nghề nghiệp</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4">3. Tài Khoản Người Dùng</h2>
                    <p className="text-navy/80 mb-4">
                      Khi tạo tài khoản với chúng tôi, bạn phải:
                    </p>
                    <ul className="list-disc pl-6 text-navy/80 space-y-2">
                      <li>Cung cấp thông tin chính xác, đầy đủ và cập nhật</li>
                      <li>Bảo mật thông tin đăng nhập của bạn</li>
                      <li>Chịu trách nhiệm về tất cả hoạt động dưới tài khoản của bạn</li>
                      <li>Thông báo ngay lập tức nếu phát hiện việc sử dụng trái phép</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4">4. Thanh Toán và Hoàn Tiền</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-navy mb-2">4.1 Học Phí</h3>
                        <p className="text-navy/80">
                          Học phí các khóa học được niêm yết rõ ràng trên website. Bạn có thể thanh toán qua các hình thức: chuyển khoản ngân hàng, ví điện tử hoặc thẻ tín dụng.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-navy mb-2">4.2 Chính Sách Hoàn Tiền</h3>
                        <p className="text-navy/80">
                          Chúng tôi cung cấp chính sách hoàn tiền 100% trong vòng 7 ngày đầu tiên nếu bạn không hài lòng với khóa học (áp dụng cho lần đăng ký đầu tiên).
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4">5. Quyền Sở Hữu Trí Tuệ</h2>
                    <p className="text-navy/80">
                      Tất cả nội dung, tài liệu, logo, và thiết kế trên website Virtual Assistant Pro đều thuộc quyền sở hữu của chúng tôi. Bạn không được sao chép, phân phối hoặc sử dụng cho mục đích thương mại mà không có sự đồng ý bằng văn bản.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4">6. Hành Vi Cấm</h2>
                    <p className="text-navy/80 mb-4">
                      Bạn cam kết không thực hiện các hành vi sau:
                    </p>
                    <ul className="list-disc pl-6 text-navy/80 space-y-2">
                      <li>Chia sẻ nội dung khóa học với bên thứ ba</li>
                      <li>Sử dụng dịch vụ cho mục đích bất hợp pháp</li>
                      <li>Spam, quấy rối các thành viên khác</li>
                      <li>Tấn công hệ thống hoặc phá hoại website</li>
                      <li>Mạo danh hoặc cung cấp thông tin sai lệch</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4">7. Giới Hạn Trách Nhiệm</h2>
                    <p className="text-navy/80">
                      Virtual Assistant Pro không chịu trách nhiệm về:
                    </p>
                    <ul className="list-disc pl-6 text-navy/80 space-y-2">
                      <li>Kết quả cụ thể từ việc học các khóa học</li>
                      <li>Tổn thất gián tiếp hoặc hậu quả</li>
                      <li>Gián đoạn dịch vụ do bảo trì hoặc nâng cấp</li>
                      <li>Hành vi của các thành viên khác trong cộng đồng</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4">8. Sửa Đổi Điều Khoản</h2>
                    <p className="text-navy/80">
                      Chúng tôi có quyền cập nhật các điều khoản này bất cứ lúc nào. Các thay đổi sẽ có hiệu lực ngay khi được đăng tải trên website. Bạn nên kiểm tra thường xuyên để cập nhật những thay đổi mới nhất.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4">9. Liên Hệ</h2>
                    <p className="text-navy/80">
                      Nếu bạn có bất kỳ câu hỏi nào về các điều khoản này, vui lòng liên hệ với chúng tôi:
                    </p>
                    <div className="bg-sunflower/10 rounded-lg p-4 mt-4">
                      <p className="text-navy font-medium">Virtual Assistant Pro</p>
                      <p className="text-navy/80">Email: support@virtualassistantpro.com</p>
                      <p className="text-navy/80">Website: <Link to="/" className="text-sunflower hover:underline">virtualassistantpro.com</Link></p>
                    </div>
                  </section>

                  <section className="border-t border-navy/20 pt-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-6 h-6 text-sunflower" />
                      <h2 className="text-2xl font-bold text-navy mb-0">Cam Kết Của Chúng Tôi</h2>
                    </div>
                    <p className="text-navy/80">
                      Virtual Assistant Pro cam kết cung cấp dịch vụ chất lượng cao và bảo vệ quyền lợi của tất cả học viên. Chúng tôi luôn nỗ lực để tạo ra một môi trường học tập an toàn, chuyên nghiệp và hiệu quả.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default TermsPage;
