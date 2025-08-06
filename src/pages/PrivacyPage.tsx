import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database, Users } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Chính Sách Bảo Mật - Virtual Assistant Pro</title>
        <meta name="description" content="Chính sách bảo mật thông tin cá nhân của Virtual Assistant Pro" />
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
                  <Shield className="w-8 h-8 text-navy" />
                </div>
                <h1 className="text-4xl font-bold text-navy mb-4">Chính Sách Bảo Mật</h1>
                <p className="text-navy/70">
                  Cập nhật lần cuối: 06 tháng 8, 2025
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 navy-shadow prose prose-lg max-w-none">
                <div className="space-y-8">
                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <Eye className="w-6 h-6 text-sunflower" />
                      <h2 className="text-2xl font-bold text-navy mb-0">1. Cam Kết Bảo Mật</h2>
                    </div>
                    <p className="text-navy/80">
                      Virtual Assistant Pro cam kết bảo vệ quyền riêng tư và thông tin cá nhân của bạn. Chính sách này giải thích cách chúng tôi thu thập, sử dụng, và bảo vệ thông tin của bạn khi sử dụng dịch vụ của chúng tôi.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4">2. Thông Tin Chúng Tôi Thu Thập</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-navy mb-2">2.1 Thông Tin Cá Nhân</h3>
                        <ul className="list-disc pl-6 text-navy/80 space-y-2">
                          <li>Họ tên, email, số điện thoại</li>
                          <li>Địa chỉ và thông tin liên hệ</li>
                          <li>Thông tin thanh toán (không lưu thông tin thẻ)</li>
                          <li>Kinh nghiệm và kỹ năng chuyên môn</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-navy mb-2">2.2 Thông Tin Tự Động</h3>
                        <ul className="list-disc pl-6 text-navy/80 space-y-2">
                          <li>Địa chỉ IP và thông tin trình duyệt</li>
                          <li>Hoạt động trên website (trang đã xem, thời gian truy cập)</li>
                          <li>Cookie và công nghệ theo dõi tương tự</li>
                          <li>Thiết bị và hệ điều hành sử dụng</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <Database className="w-6 h-6 text-sunflower" />
                      <h2 className="text-2xl font-bold text-navy mb-0">3. Cách Chúng Tôi Sử Dụng Thông Tin</h2>
                    </div>
                    <p className="text-navy/80 mb-4">
                      Chúng tôi sử dụng thông tin của bạn để:
                    </p>
                    <ul className="list-disc pl-6 text-navy/80 space-y-2">
                      <li>Cung cấp và cải thiện dịch vụ của chúng tôi</li>
                      <li>Xử lý đăng ký khóa học và thanh toán</li>
                      <li>Gửi thông báo quan trọng về khóa học</li>
                      <li>Cung cấp hỗ trợ khách hàng</li>
                      <li>Phân tích và cải thiện trải nghiệm người dùng</li>
                      <li>Gửi newsletter và thông tin marketing (với sự đồng ý)</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4">4. Chia Sẻ Thông Tin</h2>
                    <p className="text-navy/80 mb-4">
                      Chúng tôi không bán hoặc cho thuê thông tin cá nhân của bạn. Chúng tôi chỉ chia sẻ thông tin trong các trường hợp sau:
                    </p>
                    <ul className="list-disc pl-6 text-navy/80 space-y-2">
                      <li>Với sự đồng ý rõ ràng của bạn</li>
                      <li>Để tuân thủ pháp luật hoặc quy định</li>
                      <li>Với các nhà cung cấp dịch vụ đáng tin cậy (thanh toán, email)</li>
                      <li>Để bảo vệ quyền lợi và an toàn của tất cả người dùng</li>
                    </ul>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <Lock className="w-6 h-6 text-sunflower" />
                      <h2 className="text-2xl font-bold text-navy mb-0">5. Bảo Mật Thông Tin</h2>
                    </div>
                    <p className="text-navy/80 mb-4">
                      Chúng tôi thực hiện các biện pháp bảo mật kỹ thuật và tổ chức để bảo vệ thông tin của bạn:
                    </p>
                    <ul className="list-disc pl-6 text-navy/80 space-y-2">
                      <li>Mã hóa dữ liệu truyền tải bằng SSL/TLS</li>
                      <li>Lưu trữ dữ liệu trên máy chủ được bảo mật</li>
                      <li>Giới hạn truy cập thông tin chỉ cho nhân viên cần thiết</li>
                      <li>Thường xuyên cập nhật và kiểm tra hệ thống bảo mật</li>
                      <li>Sao lưu dữ liệu định kỳ và khôi phục khẩn cấp</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4">6. Cookie và Công Nghệ Theo Dõi</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-navy mb-2">6.1 Cookie Cần Thiết</h3>
                        <p className="text-navy/80">
                          Giúp website hoạt động và nhớ phiên đăng nhập của bạn.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-navy mb-2">6.2 Cookie Phân Tích</h3>
                        <p className="text-navy/80">
                          Giúp chúng tôi hiểu cách bạn sử dụng website để cải thiện dịch vụ.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-navy mb-2">6.3 Quản Lý Cookie</h3>
                        <p className="text-navy/80">
                          Bạn có thể điều chỉnh cài đặt cookie trong trình duyệt của mình.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-sunflower" />
                      <h2 className="text-2xl font-bold text-navy mb-0">7. Quyền Của Bạn</h2>
                    </div>
                    <p className="text-navy/80 mb-4">
                      Bạn có quyền:
                    </p>
                    <ul className="list-disc pl-6 text-navy/80 space-y-2">
                      <li>Truy cập và xem thông tin cá nhân của bạn</li>
                      <li>Yêu cầu sửa đổi hoặc cập nhật thông tin</li>
                      <li>Yêu cầu xóa tài khoản và dữ liệu cá nhân</li>
                      <li>Rút lại sự đồng ý nhận email marketing</li>
                      <li>Yêu cầu sao chép dữ liệu của bạn</li>
                      <li>Khiếu nại về việc xử lý dữ liệu</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4">8. Lưu Trữ Dữ Liệu</h2>
                    <p className="text-navy/80">
                      Chúng tôi chỉ lưu trữ thông tin của bạn trong thời gian cần thiết để cung cấp dịch vụ hoặc theo yêu cầu pháp luật. Dữ liệu cá nhân sẽ được xóa an toàn khi không còn cần thiết.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4">9. Thay Đổi Chính Sách</h2>
                    <p className="text-navy/80">
                      Chúng tôi có thể cập nhật chính sách bảo mật này để phản ánh những thay đổi trong dịch vụ hoặc yêu cầu pháp lý. Chúng tôi sẽ thông báo trước cho bạn về những thay đổi quan trọng.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4">10. Liên Hệ</h2>
                    <p className="text-navy/80">
                      Nếu bạn có câu hỏi về chính sách bảo mật này hoặc muốn thực hiện quyền của mình, vui lòng liên hệ:
                    </p>
                    <div className="bg-sunflower/10 rounded-lg p-4 mt-4">
                      <p className="text-navy font-medium">Data Protection Officer</p>
                      <p className="text-navy font-medium">Virtual Assistant Pro</p>
                      <p className="text-navy/80">Email: privacy@virtualassistantpro.com</p>
                      <p className="text-navy/80">Website: <Link to="/" className="text-sunflower hover:underline">virtualassistantpro.com</Link></p>
                    </div>
                  </section>

                  <section className="border-t border-navy/20 pt-8">
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                      <div className="flex items-center">
                        <Shield className="w-5 h-5 text-green-600 mr-2" />
                        <p className="text-green-800 font-medium">
                          Cam kết: Chúng tôi luôn đặt quyền riêng tư của bạn lên hàng đầu và tuân thủ nghiêm ngặt các quy định bảo vệ dữ liệu.
                        </p>
                      </div>
                    </div>
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

export default PrivacyPage;
