import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight } from 'lucide-react';

const CoursePricing = () => {
  return (
    <section className="py-20 bg-warmWhite">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-navy mb-12 animate-fade-in">Học Phí Khóa Học</h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-100 max-w-md mx-auto animate-fade-in-up">
          <p className="text-gray-600 text-base mb-4">TRỌN GÓI KHÓA HỌC VIRTUAL ASSISTANT PRO</p>
          <p className="text-4xl font-bold text-navy mb-6">8,000,000 VND</p>
          <p className="text-gray-600 mb-6">Bao gồm toàn bộ nội dung học, tài liệu, hỗ trợ và quyền lợi đặc biệt.</p>
          <Link to="/login">
            <Button className="btn-primary backdrop-blur-sm flex items-center gap-2 hover:scale-105 transition-all mx-auto">
              <BookOpen className="h-4 w-4" />
              Đăng Ký Ngay
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursePricing;