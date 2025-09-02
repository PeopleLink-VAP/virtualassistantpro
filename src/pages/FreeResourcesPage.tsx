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
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-navy mb-6 font-condensed">
              Tài Liệu & Công Cụ Miễn Phí
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Bộ sưu tập các tài liệu thiết yếu giúp bạn khởi đầu hành trình trở thành Virtual Assistant chuyên nghiệp. 
              Tất cả đều miễn phí và được thiết kế đặc biệt cho thị trường Việt Nam.
            </p>
            <div className="bg-sunflower/10 border border-sunflower/20 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-sm text-gray-600">
                <strong>Lưu ý:</strong> Các tài liệu này là phiên bản cơ bản. Để có được hệ thống đầy đủ và chuyên sâu, 
                hãy tham gia <strong>Virtual Assistant Pro Program</strong>.
              </p>
            </div>
          </div>

          {/* Free Resources Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Red Flags Guide */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border-l-4 border-red-500">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-navy">"Red Flags" Guide</h3>
                </div>
                <p className="text-gray-700 text-base mb-4">
                  Hướng dẫn 1 trang giúp bạn nhận biết các tín hiệu cảnh báo từ khách hàng tiềm năng, 
                  điều khoản thanh toán đáng ngờ và các nguyên tắc cơ bản về kill-fee.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">PDF • 1 trang</span>
                  <a href="#" className="text-sunflower hover:underline font-semibold">Tải về miễn phí &rarr;</a>
                </div>
              </div>
            </div>

            {/* Invoice + Contract Starter */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border-l-4 border-blue-500">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-navy">Invoice + Contract Starter</h3>
                </div>
                <p className="text-gray-700 text-base mb-4">
                  Mẫu hóa đơn và hợp đồng cơ bản phù hợp với thị trường Việt Nam. 
                  Bao gồm disclaimer khuyến nghị tìm kiếm tư vấn pháp lý chuyên nghiệp.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Word + PDF • 2 files</span>
                  <a href="#" className="text-sunflower hover:underline font-semibold">Tải về miễn phí &rarr;</a>
                </div>
              </div>
            </div>

            {/* Client Discovery Script */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border-l-4 border-green-500">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-navy">Client Discovery Script Lite</h3>
                </div>
                <p className="text-gray-700 text-base mb-4">
                  7 câu hỏi đơn giản giúp bạn đánh giá và phân loại khách hàng tiềm năng. 
                  Phiên bản cơ bản không bao gồm đào tạo sales chuyên sâu.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">PDF • 2 trang</span>
                  <a href="#" className="text-sunflower hover:underline font-semibold">Tải về miễn phí &rarr;</a>
                </div>
              </div>
            </div>

            {/* Micro-Onboarding Form */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border-l-4 border-purple-500">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-navy">Micro-Onboarding Form</h3>
                </div>
                <p className="text-gray-700 text-base mb-4">
                  Form onboarding cơ bản bao gồm các thông tin thiết yếu: quyền truy cập, deadline, files. 
                  Hệ thống onboarding đầy đủ chỉ có trong VAP.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Google Form Template</span>
                  <a href="#" className="text-sunflower hover:underline font-semibold">Sao chép template &rarr;</a>
                </div>
              </div>
            </div>

            {/* Industry Tag Library */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border-l-4 border-orange-500">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-navy">Industry Tag Library</h3>
                </div>
                <p className="text-gray-700 text-base mb-4">
                  50 ý tưởng dịch vụ được phân loại theo ngành (ecom, SaaS, creators) để khơi gợi định vị. 
                  Playbook chi tiết chỉ có trong VAP.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Excel • 50 items</span>
                  <a href="#" className="text-sunflower hover:underline font-semibold">Tải về miễn phí &rarr;</a>
                </div>
              </div>
            </div>

            {/* First 30 Days Habit Tracker */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border-l-4 border-teal-500">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-navy">First 30 Days Habit Tracker</h3>
                </div>
                <p className="text-gray-700 text-base mb-4">
                  Tracker đơn giản trên Notion để theo dõi hoạt động outreach hàng ngày, 
                  quá trình học tập và ghi lại tiến độ trong 30 ngày đầu.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Notion Template</span>
                  <a href="#" className="text-sunflower hover:underline font-semibold">Sao chép template &rarr;</a>
                </div>
              </div>
            </div>

            {/* FAQ for Virtual Assistants */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border-l-4 border-indigo-500 md:col-span-2 lg:col-span-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-navy">FAQ cho Virtual Assistants</h3>
                </div>
                <p className="text-gray-700 text-base mb-4">
                  Tổng hợp các câu hỏi thường gặp nhất từ người mới bắt đầu, 
                  bao gồm cách định giá, tìm khách hàng và xây dựng portfolio.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">PDF • 5 trang</span>
                  <a href="#" className="text-sunflower hover:underline font-semibold">Đọc ngay &rarr;</a>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-navy to-navy/90 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4 font-condensed">Muốn Có Hệ Thống Đầy Đủ?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Các tài liệu miễn phí này chỉ là khởi đầu. Để có được hệ thống hoàn chỉnh, 
              quy trình chuyên nghiệp và hỗ trợ 1-1, hãy tham gia Virtual Assistant Pro Program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/training" 
                className="bg-sunflower text-navy px-8 py-3 rounded-lg font-semibold hover:bg-sunflower/90 transition duration-300"
              >
                Xem Chương Trình VAP
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy transition duration-300"
              >
                Tư Vấn Miễn Phí
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FreeResourcesPage;