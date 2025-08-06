import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const quotes = [
  "'Hành trình vạn dặm bắt đầu từ một bước chân. Hãy bắt đầu ngay hôm nay!'",
  "'Thành công không phải là đích đến, mà là cả một quá trình không ngừng học hỏi và phát triển.'",
  "'Đừng chờ đợi cơ hội, hãy tự mình tạo ra chúng.'",
  "'Sự kiên trì và đam mê là chìa khóa để mở cánh cửa thành công.'",
  "'Mỗi thử thách là một cơ hội để bạn trở nên mạnh mẽ hơn.'"
];

const BlogHero = () => {
  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, []);

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      {/* Floating Decorative Elements - adapted from HeroLanding.tsx */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-sunflower/20 animate-spin-slow"></div>
      <div className="absolute top-40 left-10 w-16 h-16 rounded-full bg-sunflower/30 animate-float"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-sunflower/10 animate-spin-slow"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-sunflower/20 animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Column 1: Light CTA */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-navy mb-4">Bắt đầu hành trình của bạn</h2>
            <p className="text-navy/70 mb-6">Khám phá các khóa học và tài nguyên của chúng tôi.</p>
            <Link to="/free-resources">
              <Button className="btn-primary">Tài nguyên miễn phí</Button>
            </Link>
          </div>

          {/* Column 2: Random Quote from Duyen */}
          <div className="text-center">
            <blockquote className="text-xl italic text-navy/80 font-semibold leading-relaxed">
              {currentQuote}
            </blockquote>
            <p className="text-navy/60 mt-2">— Duyen Pham</p>
          </div>

          {/* Column 3: Duyen's Avatar */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/duyen/profile_3.png"
              alt="Duyen Nguyen Avatar"
              className="w-64 h-64 md:w-64 md:h-64 object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;