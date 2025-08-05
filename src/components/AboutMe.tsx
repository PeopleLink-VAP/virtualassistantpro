import React from 'react';
import { Dog, Home, Utensils, BookOpen } from 'lucide-react';
import profileImage from '/images/duyen/profile_1.jpg';

const QuickFacts = () => (
  <section className="py-12 bg-warmWhite">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="md:w-1/2 flex justify-center">
        <img src={profileImage} alt="Profile" className="w-full max-w-sm h-auto rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-navy mb-8">Vài nét nhanh về <span className="text-sunflower">Duyên</span></h2>
        <p className="text-lg text-navy/80 max-w-3xl mx-auto mb-12">
          Tôi tin rằng cách tốt nhất để phát triển là đặt mình vào những tình huống mới. Tư duy đó đã định hình kinh nghiệm của tôi trong nhiều lĩnh vực và ngành nghề khác nhau. Một số trong đó có vẻ không liên quan đến chuyên ngành của tôi nhưng tất cả đều bổ trợ và tiếp tục mang lại lợi ích cho tôi và công việc kinh doanh của tôi ngày nay.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <Dog className="w-12 h-12 text-sunflower mb-3" />
            <p className="text-navy/80 text-center">Tôi hơi "cuồng" các chú cún</p>
          </div>
          <div className="flex flex-col items-center">
            <Home className="w-12 h-12 text-sunflower mb-3" />
            <p className="text-navy/80 text-center">Cô gái quê yêu cuộc sống thành thị</p>
          </div>
          <div className="flex flex-col items-center">
            <Utensils className="w-12 h-12 text-sunflower mb-3" />
            <p className="text-navy/80 text-center">Tôi không ngờ mình lại yêu nấu ăn đến thế</p>
          </div>
          <div className="flex flex-col items-center">
            <BookOpen className="w-12 h-12 text-sunflower mb-3" />
            <p className="text-navy/80 text-center">Kindle hay sách giấy – Bạn chọn cái nào?</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const milestones = [
  {
    year: '2011-2015',
    description: 'Học tập và làm việc bán thời gian trong ngành khách sạn tại Đà Nẵng',
  },
  {
    year: '2015 - 2020',
    description: 'Làm việc với khách hàng từ xa trên các nền tảng trực tuyến khác nhau như Fiverr, Upwork, tạo nền tảng kinh nghiệm cho sự nghiệp VA.',
  },
  {
    year: '2020',
    description: 'Chuyển đến TP.HCM - Hành trình mới bắt đầu',
  },
  {
    year: '2022-2025',
    description: 'Xây dựng cộng đồng VA, giảng dạy các khóa học VA trực tuyến.',
  },
];

const MyJourney = () => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-navy text-center mb-12">Hành Trình Trở Thành VA Của Tôi</h2>
      <div className="relative border-l-4 border-sunflower ml-4 md:ml-12">
        {milestones.map((milestone, index) => (
          <div key={index} className="mb-8 flex items-start w-full">
            <div className="flex-shrink-0 w-8 h-8 bg-sunflower rounded-full absolute -left-4 flex items-center justify-center text-white font-bold text-sm">
              {index + 1}
            </div>
            <div className="ml-8 md:ml-12 p-6 bg-white rounded-lg shadow-md flex-grow">
              <h3 className="text-xl font-semibold text-navy mb-2">{milestone.year}</h3>
              <p className="text-navy/80">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutMe = () => {
  return (
    <div className="bg-warmWhite">
      <QuickFacts />
      <MyJourney />
    </div>
  );
};

export default AboutMe;