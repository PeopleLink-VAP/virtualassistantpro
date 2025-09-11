import React from 'react';
import { Users, Award, Star, Clock } from 'lucide-react';
const CourseStats = () => {
  return <section className="py-20 bg-navy relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-sunflower/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-sunflower/10 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-sunflower/20 rounded-full animate-float animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">
            Thành Tựu Ấn Tượng
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Những con số biết nói về chất lượng và hiệu quả của khóa học VAP
          </p>
        </div>
        
        {/* Clean Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat 1 */}
          <div className="group text-center animate-fade-in-up" style={{
          animationDelay: "0.4s"
        }}>
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-sunflower rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-sunflower mb-2">
                150+
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Học Viên</h3>
              <p className="text-white/80 text-sm">Đã tham gia và hoàn thành khóa học thành công</p>
            </div>
          </div>
          
          {/* Stat 2 */}
          <div className="group text-center animate-fade-in-up" style={{
          animationDelay: "0.5s"
        }}>
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-sunflower mb-2">70 - 85%</div>
              <h3 className="text-lg font-semibold text-white mb-2">Đồng hành với nghề VA</h3>
              <p className="text-white/80 text-sm">Sau khi sắp xếp đủ nguồn lực và thời gian </p>
            </div>
          </div>
          
          {/* Stat 3 */}
          <div className="group text-center animate-fade-in-up" style={{
          animationDelay: "0.6s"
        }}>
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-sunflower rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-sunflower mb-2">
                4.9/5
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Đánh Giá</h3>
              <p className="text-white/80 text-sm">Điểm đánh giá trung bình từ học viên</p>
            </div>
          </div>
          
          {/* Stat 4 */}
          <div className="group text-center animate-fade-in-up" style={{
          animationDelay: "0.7s"
        }}>
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-sunflower mb-2">
                15+
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Khóa Học</h3>
              <p className="text-white/80 text-sm">Đã được tổ chức với chất lượng cao</p>
            </div>
          </div>
        </div>
        
        {/* Student Income Levels */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-700">
          <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-10 border border-white/20 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8">💼 Các cấp thu nhập của Học Viên *</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stage 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-sunflower mb-3">$100 - $250</div>
                <div className="text-lg font-semibold text-white mb-3">Giai đoạn 1</div>
                <p className="text-white/90 leading-relaxed text-sm">
                  Thời lượng làm việc ít. Thực hiện các task nhỏ lẻ để làm quen với môi trường làm việc.
                </p>
              </div>
              
              {/* Stage 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-sunflower mb-3">$300 - $900</div>
                <div className="text-lg font-semibold text-white mb-3">Giai đoạn 2</div>
                <p className="text-white/90 leading-relaxed text-sm">
                  Khối lượng công việc tăng lên. Tìm được ngách chuyên môn và tệp khách hàng phù hợp.
                </p>
              </div>
              
              {/* Stage 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-sunflower mb-3">$1k - $4k+</div>
                <div className="text-lg font-semibold text-white mb-3">Giai đoạn 3</div>
                <p className="text-white/90 leading-relaxed text-sm">
                  Mở rộng tệp khách hàng. Hiểu và cân bằng task lâu dài & ngắn hạn. Bắt đầu phát triển đội nhóm.
                </p>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/20">
              <p className="text-white/70 text-sm italic">
                *Tùy thuộc vào ngách chuyên môn, khối lượng công việc và đối tượng khách hàng
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CourseStats;