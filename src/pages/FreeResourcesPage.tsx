import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, X, Mail, User, Download, Lock } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Seo from '@/components/Seo';
const FreeResourcesPage = () => {
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ gửi tài liệu miễn phí qua email.');
    setShowEmailPopup(false);
    setFormData({
      name: '',
      email: ''
    });
    setIsSubmitting(false);
  };
  const handleFreeResourceClick = () => {
    setShowEmailPopup(true);
  };
  return <>
      <Seo title="Tài Nguyên Miễn Phí - Virtual Assistant Pro" description="Khám phá các khóa học, cộng đồng và hỗ trợ dành cho Trợ lý ảo." />
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
              Tổng hợp tài liệu giúp bạn khởi đầu với nghề Virtual Assistant.
            </p>
          </div>

          {/* Free Resources Section */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-navy font-condensed">Tài Liệu Miễn Phí</h2>
              <div className="flex items-center text-green-600">
                <Download className="w-5 h-5 mr-2" />
                <span className="font-semibold">100% Miễn Phí</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Red Flags Guide */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border-l-4 border-red-500">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-navy">4 hình thức lừa đảo phổ biến</h3>
                </div>
                <p className="text-gray-700 text-base mb-4">Hướng dẫn giúp bạn nhận biết các tín hiệu cảnh báo từ khách hàng scam, điều khoản thanh toán đáng ngờ và các nguyên tắc cơ bản về khi làm việc online.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">PDF • 7 trang</span>
                  <a href="/downloads/red-flags-guide.pdf" download className="text-sunflower hover:underline font-semibold">Tải về miễn phí &rarr;</a>
                </div>
              </div>
            </div>

            {/* Invoice + Contract Starter */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-gray-300 opacity-75">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-600">Invoice + Contract Starter</h3>
                </div>
                <p className="text-gray-500 text-base mb-4">Mẫu hóa đơn và hợp đồng cơ bản phù hợp với thị trường Việt Nam. Tuy vậy, vẫn khuyến nghị tìm kiếm tư vấn pháp lý chuyên nghiệp.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Word + PDF • 2 files</span>
                  <span className="text-gray-400 font-semibold">Sắp ra mắt</span>
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
                  <h3 className="font-bold text-xl text-navy">Top 7 lưu ý và mẫu câu cho Discovery call</h3>
                </div>
                <p className="text-gray-700 text-base mb-4">Hướng dẫn này cung cấp các bước chi tiết và mẫu câu hội thoại cho một buổi Discovery Call (gọi tìm hiểu nhu cầu khách hàng) dành cho freelancer, đặc biệt là những ai chưa tự tin với tiếng Anh khi làm việc với khách hàng quốc tế. </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">PDF • 11 trang</span>
                  <button onClick={handleFreeResourceClick} className="text-sunflower hover:underline font-semibold">Tải về miễn phí &rarr;</button>
                </div>
              </div>
            </div>

            {/* Micro-Onboarding Form */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-gray-300 opacity-75">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-600">Micro-Onboarding Form</h3>
                </div>
                <p className="text-gray-500 text-base mb-4">
                  Form onboarding cơ bản bao gồm các thông tin thiết yếu: quyền truy cập, deadline, files. 
                  Hệ thống onboarding đầy đủ chỉ có trong VAP.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Google Form Template</span>
                  <span className="text-gray-400 font-semibold">Sắp ra mắt</span>
                </div>
              </div>
            </div>

            {/* Industry Tag Library */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-gray-300 opacity-75">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-600">Industry Tag Library</h3>
                </div>
                <p className="text-gray-500 text-base mb-4">20 ý tưởng dịch vụ được phân loại theo ngành (ecom, SaaS, creators) dành cho các VA, đặc biệt tại thị trường Việt Nam.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Excel • 50 items</span>
                  <span className="text-gray-400 font-semibold">Sắp ra mắt</span>
                </div>
              </div>
            </div>

            {/* First 30 Days Habit Tracker */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-gray-300 opacity-75">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-600">First 30 Days Habit Tracker for VA</h3>
                </div>
                <p className="text-gray-500 text-base mb-4">
                  Tracker đơn giản trên Notion để theo dõi hoạt động outreach hàng ngày, 
                  quá trình học tập và ghi lại tiến độ trong 30 ngày đầu.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Notion Template</span>
                  <span className="text-gray-400 font-semibold">Sắp ra mắt</span>
                </div>
              </div>
            </div>

            {/* FAQ for Virtual Assistants */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-gray-300 opacity-75 md:col-span-2 lg:col-span-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-600">FAQ cho VA</h3>
                </div>
                <p className="text-gray-500 text-base mb-4">
                  Tổng hợp các câu hỏi thường gặp nhất từ người mới bắt đầu, 
                  bao gồm cách định giá, tìm khách hàng và xây dựng portfolio.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">PDF • 5 trang</span>
                  <span className="text-gray-400 font-semibold">Sắp ra mắt</span>
                </div>
              </div>
            </div>
            </div>
          </section>

          {/* Paid Resources Section */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-navy font-condensed">Tài Liệu Chuyên Sâu</h2>
              <div className="flex items-center text-sunflower">
                <Lock className="w-5 h-5 mr-2" />
                <span className="font-semibold">Có Phí</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Advanced VA Playbook */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-gray-300 opacity-75">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-xl text-gray-600">Advanced VA Playbook</h3>
                  </div>
                  <p className="text-gray-500 text-base mb-4">
                    Hệ thống đầy đủ từ A-Z: Sales scripts, onboarding process, pricing strategies, và client management system.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">PDF + Templates • 50+ trang</span>
                  </div>
                  <button disabled className="w-full mt-4 bg-gray-300 text-gray-500 py-2 px-4 rounded-lg cursor-not-allowed">
                    Sắp ra mắt
                  </button>
                </div>
              </div>

              {/* VA Business Accelerator */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-gray-300 opacity-75">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-xl text-gray-600">VA Business Accelerator</h3>
                  </div>
                  <p className="text-gray-500 text-base mb-4">
                    Khóa học video 6 tuần với mentoring 1-1, bao gồm live Q&A sessions và access vào private community.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Video Course + Mentoring</span>
                  </div>
                  <button disabled className="w-full mt-4 bg-gray-300 text-gray-500 py-2 px-4 rounded-lg cursor-not-allowed">
                    Sắp ra mắt
                  </button>
                </div>
              </div>

              {/* Premium VA Toolkit */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-gray-300 opacity-75">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-xl text-gray-600">Premium VA Toolkit</h3>
                  </div>
                  <p className="text-gray-500 text-base mb-4">
                    Bộ công cụ hoàn chỉnh: 20+ templates, automation scripts, client portal setup, và lifetime updates.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Complete Toolkit + Updates</span>
                  </div>
                  <button disabled className="w-full mt-4 bg-gray-300 text-gray-500 py-2 px-4 rounded-lg cursor-not-allowed">
                    Sắp ra mắt
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-navy to-navy/90 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4 font-condensed">Muốn Có Hệ Thống Đầy Đủ?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Nhận thêm các bài viết, tài liệu miễn phí về nghề VA và hành trình Freelance qua email.
            </p>
          </div>

          {/* Email Popup Modal */}
          {showEmailPopup && <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
                <button onClick={() => setShowEmailPopup(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
                
                <div className="text-center mb-6">
                  <div className="bg-sunflower/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-sunflower" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Nhận Tài Liệu Miễn Phí & Tham Gia Cộng Đồng VA</h3>
                  <p className="text-gray-600">
                    Đăng ký để nhận ngay các tài liệu VA miễn phí, tham gia cộng đồng Virtual Assistant và nhận cập nhật mới nhất về nghề VA tại Việt Nam.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="text" placeholder="Họ và tên" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunflower focus:border-transparent" required />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="email" placeholder="Email của bạn" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunflower focus:border-transparent" required />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-sunflower text-white py-3 px-6 rounded-lg font-semibold hover:bg-sunflower/90 transition-colors disabled:opacity-50">
                    {isSubmitting ? 'Đang gửi...' : 'Nhận tài liệu miễn phí'}
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Chúng tôi tôn trọng quyền riêng tư của bạn. Không spam, chỉ gửi nội dung hữu ích.
                </p>
              </div>
            </div>}
        </div>
      </div>
      <Footer />
    </>;
};
export default FreeResourcesPage;