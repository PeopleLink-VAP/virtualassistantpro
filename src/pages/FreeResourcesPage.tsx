import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Seo from '@/components/Seo';

const FreeResourcesPage = () => {
  return (
    <>
      <Seo
        title="Tài Nguyên Miễn Phí - Virtual Assistant Pro"
        description="Khám phá các khóa học, cộng đồng và hỗ trợ dành cho Trợ lý ảo."

      />
      <Navbar />
      <ScrollToTop />
      <div className="relative bg-warmWhite py-20 pt-40">
        <div className="container mx-auto px-4">
          <nav className="mb-8 text-sm text-gray-500" aria-label="breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to="/" className="text-navy hover:underline">Homepage</Link>
                <ChevronRight className="h-4 w-4 mx-2" />
              </li>
              <li className="flex items-center">
                <span className="text-sunflower">Tài liệu Virtual Assistant</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-5xl font-bold text-navy mb-6 font-condensed">
            Tài Liệu Virtual Assistant Miễn Phí
          </h1>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Tại đây, bạn sẽ tìm thấy bộ sưu tập các công cụ, hướng dẫn và liên kết hữu ích có thể giúp bạn trên hành trình trở thành trợ lý ảo. 
          </p>

          {/* Photo Grid Card Layout - Placeholder */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src="/images/sunflower.png" alt="Khóa học Trợ lý ảo" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl text-navy mb-2">Khóa học Trợ lý ảo Toàn diện</h3>
                <p className="text-gray-700 text-base mb-4">Bắt đầu sự nghiệp trợ lý ảo của bạn với khóa học chuyên sâu, bao gồm các kỹ năng cần thiết và chiến lược tìm kiếm khách hàng.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sunflower hover:underline font-semibold">Tìm hiểu thêm &rarr;</a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src="/images/sunflower.png" alt="Cộng đồng Trợ lý ảo" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl text-navy mb-2">Cộng đồng Trợ lý ảo Việt Nam</h3>
                <p className="text-gray-700 text-base mb-4">Tham gia cộng đồng sôi nổi để kết nối, học hỏi kinh nghiệm và nhận được sự hỗ trợ từ các trợ lý ảo khác.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sunflower hover:underline font-semibold">Tham gia ngay &rarr;</a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src="/images/sunflower.png" alt="Hỗ trợ Trợ lý ảo" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl text-navy mb-2">Dịch vụ Hỗ trợ & Tư vấn Chuyên sâu</h3>
                <p className="text-gray-700 text-base mb-4">Nhận tư vấn 1-1 và hỗ trợ chuyên nghiệp để giải quyết các thách thức trong công việc trợ lý ảo của bạn.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sunflower hover:underline font-semibold">Liên hệ &rarr;</a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src="/images/sunflower.png" alt="Checklist Mẫu Miễn Phí" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl text-navy mb-2">Checklist Mẫu Miễn Phí cho VA</h3>
                <p className="text-gray-700 text-base mb-4">Tải về các checklist mẫu giúp bạn tổ chức công việc hiệu quả, từ quản lý dự án đến tương tác với khách hàng.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sunflower hover:underline font-semibold">Tải về &rarr;</a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src="/images/sunflower.png" alt="FAQ Trợ lý ảo" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl text-navy mb-2">FAQ: Các Câu Hỏi Thường Gặp về VA</h3>
                <p className="text-gray-700 text-base mb-4">Giải đáp mọi thắc mắc của bạn về nghề trợ lý ảo, từ cách bắt đầu đến phát triển sự nghiệp.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sunflower hover:underline font-semibold">Đọc thêm &rarr;</a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src="/images/sunflower.png" alt="Podcast Video VA" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl text-navy mb-2">Podcast & Video: Hành Trình Trợ lý ảo</h3>
                <p className="text-gray-700 text-base mb-4">Nghe các podcast và xem video chia sẻ kinh nghiệm, câu chuyện thành công từ các VA hàng đầu.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sunflower hover:underline font-semibold">Xem ngay &rarr;</a>
              </div>
            </div>

            {/* Add more cards as needed */}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FreeResourcesPage;