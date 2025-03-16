
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Briefcase, Award, GraduationCap, Heart } from 'lucide-react';

const instructors = [
  {
    name: 'Duyên Nguyễn',
    role: 'Founder & Giám Đốc Đào Tạo',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Hơn 10 năm kinh nghiệm trong lĩnh vực hành chính văn phòng và phát triển kinh doanh quốc tế. Duyên đã đào tạo hơn 60 VA chuyên nghiệp và điều hành cộng đồng VA Việt Nam với hơn 5,000 thành viên.',
    specialties: ['Chiến lược phát triển VA', 'Marketing cá nhân', 'Quản lý khách hàng quốc tế'],
    experience: [
      'Founder Virtual Assistant Việt Nam',
      'Hoàn thành gần 200 đơn hàng trên Fiverr',
      'Fiverr\'s Choice Seller',
      'Co-founder War & Peace Homestay'
    ]
  },
  {
    name: 'Minh Trần',
    role: 'Chuyên Gia Kỹ Thuật Số',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Minh chuyên về công nghệ và các công cụ số giúp nâng cao hiệu suất làm việc của VA. Với hơn 8 năm kinh nghiệm trong lĩnh vực IT, Minh đã giúp nhiều VA tự động hóa quy trình làm việc và tối ưu hóa năng suất.',
    specialties: ['Tự động hóa quy trình', 'Quản lý dự án trực tuyến', 'Công cụ marketing số'],
    experience: [
      'Senior Developer tại công ty phần mềm hàng đầu',
      'Đào tạo hơn 200 người về công nghệ số',
      'Phát triển 15+ công cụ tự động cho VA'
    ]
  },
  {
    name: 'Lan Phương',
    role: 'Chuyên Gia Content Marketing',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Lan Phương có hơn 6 năm kinh nghiệm trong lĩnh vực sáng tạo nội dung, biên tập và marketing. Cô chuyên hướng dẫn các VA về chiến lược nội dung hiệu quả, viết email, và thương hiệu cá nhân.',
    specialties: ['Content Marketing', 'Email Copywriting', 'Xây dựng thương hiệu cá nhân'],
    experience: [
      'Content Manager tại tập đoàn truyền thông',
      'Đã xuất bản hơn 500 bài viết chuyên ngành',
      'Tư vấn xây dựng thương hiệu cho 30+ doanh nghiệp'
    ]
  },
  {
    name: 'Quang Đạt',
    role: 'Chuyên Gia Tài Chính & Kế Toán VA',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Quang Đạt có chuyên môn sâu về quản lý tài chính, kế toán và chiến lược định giá dịch vụ cho freelancer. Với kiến thức chuyên sâu về tài chính quốc tế, anh giúp các VA định giá dịch vụ và quản lý thu nhập hiệu quả.',
    specialties: ['Định giá dịch vụ VA', 'Kế toán freelancer', 'Quản lý tài chính cá nhân'],
    experience: [
      'CFO tại công ty tư vấn tài chính',
      'Tư vấn tài chính cho hơn 50 freelancer và doanh nghiệp nhỏ',
      'Tác giả sách về quản lý tài chính cho freelancer'
    ]
  }
];

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Đội Ngũ Đào Tạo - Virtual Assistant Pro</title>
        <meta name="description" content="Gặp gỡ đội ngũ giảng viên nhiều kinh nghiệm của Virtual Assistant Pro, những người sẽ đồng hành cùng bạn trên hành trình trở thành Trợ Lý Ảo chuyên nghiệp." />
      </Helmet>
      
      <div className="min-h-screen bg-warmWhite">
        <Navbar />
        
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-navy mb-4">Đội Ngũ Đào Tạo</h1>
              <p className="text-navy/70 max-w-2xl mx-auto">
                Gặp gỡ những chuyên gia sẽ đồng hành cùng bạn trên hành trình trở thành Trợ Lý Ảo chuyên nghiệp
              </p>
            </div>
            
            <div className="mb-20">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl navy-shadow p-8 md:p-10">
                <h2 className="text-2xl font-bold text-navy mb-6">Tại sao học với chúng tôi?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4">
                      <Briefcase className="h-8 w-8 text-navy" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Kinh Nghiệm Thực Tế</h3>
                    <p className="text-navy/70">Đội ngũ giảng viên là những người đang làm việc thực tế trong ngành VA</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4">
                      <Award className="h-8 w-8 text-navy" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Chuyên Môn Đa Dạng</h3>
                    <p className="text-navy/70">Mỗi giảng viên có lĩnh vực chuyên môn riêng, mang đến kiến thức toàn diện</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4">
                      <GraduationCap className="h-8 w-8 text-navy" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Phương Pháp Thực Tiễn</h3>
                    <p className="text-navy/70">Học thông qua thực hành và các dự án thực tế, không chỉ lý thuyết suông</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-16 h-16 bg-sunflower/20 rounded-full flex items-center justify-center mb-4">
                      <Heart className="h-8 w-8 text-navy" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Hỗ Trợ Liên Tục</h3>
                    <p className="text-navy/70">Được hỗ trợ và tư vấn cá nhân trong suốt quá trình học và sau khi tốt nghiệp</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-12">
              <h2 className="text-2xl font-bold text-navy text-center mb-10">Giảng Viên Chuyên Nghiệp</h2>
              
              {instructors.map((instructor, index) => (
                <div 
                  key={index} 
                  className={`bg-white/70 backdrop-blur-sm rounded-2xl navy-shadow overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex`}
                >
                  <div className="md:w-1/3 h-64 md:h-auto relative">
                    <img src={instructor.image} alt={instructor.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <h3 className="text-2xl font-bold text-navy mb-1">{instructor.name}</h3>
                    <p className="text-sunflower font-medium mb-4">{instructor.role}</p>
                    <p className="text-navy/80 mb-6">{instructor.bio}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-navy mb-2">Chuyên Môn:</h4>
                        <ul className="list-disc list-inside text-navy/70 space-y-1">
                          {instructor.specialties.map((specialty, idx) => (
                            <li key={idx}>{specialty}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-navy mb-2">Kinh Nghiệm:</h4>
                        <ul className="list-disc list-inside text-navy/70 space-y-1">
                          {instructor.experience.map((exp, idx) => (
                            <li key={idx}>{exp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default TeamPage;
