
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CareerOpportunitiesPage = () => {
  return (
    <div className="min-h-screen bg-warmWhite">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-8 text-center">Cơ Hội Nghề Nghiệp</h1>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Triển Vọng Nghề Nghiệp Trợ Lý Ảo 2025</h2>
            <p className="mb-4">
              Trong bối cảnh số hóa nhanh chóng, vai trò của Trợ Lý Ảo (Virtual Assistant) đang ngày càng 
              trở nên quan trọng đối với doanh nghiệp và cá nhân trên toàn cầu. Tại Việt Nam, nhu cầu về 
              Trợ Lý Ảo có kỹ năng cao đang tăng mạnh.
            </p>
            <p>
              Sau khi hoàn thành chương trình đào tạo của chúng tôi, học viên sẽ được kết nối với mạng lưới 
              đối tác doanh nghiệp rộng lớn, tạo cơ hội việc làm phong phú trong lĩnh vực này.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Vị Trí Công Việc Hiện Có</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <h3 className="font-medium">Trợ Lý Ảo Hành Chính</h3>
                <p>Hỗ trợ quản lý lịch trình, email, và các nhiệm vụ hành chính từ xa.</p>
              </li>
              <li>
                <h3 className="font-medium">Trợ Lý Ảo Marketing</h3>
                <p>Hỗ trợ quản lý mạng xã hội, chiến dịch email, và nội dung marketing.</p>
              </li>
              <li>
                <h3 className="font-medium">Trợ Lý Ảo Dịch Vụ Khách Hàng</h3>
                <p>Cung cấp hỗ trợ khách hàng qua email, chat và điện thoại.</p>
              </li>
              <li>
                <h3 className="font-medium">Trợ Lý Ảo Chuyên Ngành</h3>
                <p>Hỗ trợ trong các lĩnh vực chuyên biệt như y tế, luật pháp, bất động sản, v.v.</p>
              </li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Đăng Ký Thông Tin</h2>
            <p className="mb-4">
              Để nhận thông tin về các cơ hội việc làm mới nhất và được ưu tiên giới thiệu đến đối tác của chúng tôi, 
              vui lòng điền thông tin của bạn vào mẫu dưới đây:
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Họ và tên</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1">Số điện thoại</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="0901234567"
                />
              </div>
              <div>
                <label htmlFor="interest" className="block mb-1">Vị trí quan tâm</label>
                <select 
                  id="interest" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">-- Chọn vị trí --</option>
                  <option value="admin">Trợ Lý Ảo Hành Chính</option>
                  <option value="marketing">Trợ Lý Ảo Marketing</option>
                  <option value="customer-service">Trợ Lý Ảo Dịch Vụ Khách Hàng</option>
                  <option value="specialized">Trợ Lý Ảo Chuyên Ngành</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Đăng Ký Ngay
              </button>
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CareerOpportunitiesPage;
