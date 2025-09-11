import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Briefcase, Globe, Heart } from "lucide-react";

const VAJourneyPage = () => {
  return (
    <>
      <Helmet>
        <title>Hành trình VA từ số 0 - Virtual Assistant Pro</title>
        <meta 
          name="description" 
          content="Khám phá hành trình trở thành Virtual Assistant từ số 0 của Duyên - từ tốt nghiệp đến trở thành founder VA Agency và coach nghề VA chuyên nghiệp."
        />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-br from-warmWhite via-lightBlue to-paleBlue">
        {/* Hero Section */}
        <section className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-sunflower/5 to-lightBlue/10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-sunflower/10 rounded-full">
                <User className="w-5 h-5 text-sunflower" />
                <span className="text-navy font-medium">Câu chuyện cá nhân</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Hành trình VA từ số 0
              </h1>
              <p className="text-xl text-navy/70 mb-8 max-w-2xl mx-auto">
                Từ một cử nhân Tiếng Anh mới tốt nghiệp đến founder VA Agency và coach nghề VA - 
                đây là câu chuyện về hành trình khám phá và phát triển nghề Virtual Assistant.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12">
                <div className="prose prose-lg max-w-none text-navy">
                  <p className="text-lg leading-relaxed mb-8">
                    Từ những ngày đầu tốt nghiệp với tấm bằng Cử nhân Tiếng Anh – Đại học Ngoại Ngữ, Đại học Đà Nẵng, mình cũng như bao bạn trẻ khác: chưa biết mình thực sự muốn gì, phù hợp với nghề gì. Chỉ có một điều mình chắc chắn – mình thích giao tiếp, thích phụng sự và thích thử thách.
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-sunflower/20 rounded-full flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-sunflower" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy mb-0">Bén Duyên Với Nghề Trợ Lý</h2>
                  </div>

                  <p className="mb-6">
                    Khi bắt đầu đi làm, mình tình cờ biết đến công việc <strong>trợ lý</strong> – một vai trò vừa kết nối, vừa hỗ trợ. Chữ "trợ" vốn mang ý nghĩa trợ lực, trợ thủ, và điều đó hoàn toàn phù hợp với giá trị phụng sự mà mình theo đuổi. Mỗi người sếp, mỗi khách hàng lại có yêu cầu riêng, khiến mình liên tục được thử thách và trưởng thành.
                  </p>

                  <p className="mb-8">
                    Có những việc ban đầu mình nghĩ không bao giờ làm nổi, nhưng rồi vẫn hoàn thành tốt, có khi hơn kì vòng. Chính cảm giác được thử sức, được vượt qua giới hạn đã khiến mình gắn bó với nghề trợ lý.
                  </p>

                  <p className="mb-8">
                    Dù vậy, mình không dừng lại ở việc chỉ làm <strong>trợ lý văn phòng</strong>, mà đã kinh qua nhiều vị trí quản lý, founder, co-founder ở nhiều lĩnh vực khác nhau. Trong lòng vẫn mơ ước có thể xây dựng một công ty chuyên về <strong>Trợ lý (Assistant Agency)</strong> – nơi vừa được làm nghề, vừa làm chủ kinh doanh.
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-sunflower/20 rounded-full flex items-center justify-center">
                      <Globe className="w-4 h-4 text-sunflower" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy mb-0">Bén Duyên Với Freelancer Và Virtual Assistant</h2>
                  </div>

                  <p className="mb-6">
                    Trên hành trình tìm tòi, mình đặc biệt hứng thú với <strong>thương mại điện tử (e-commerce)</strong>. Một lần học Amazon, cô giáo gợi ý lên Fiverr thuê người viết listing sản phẩm chỉ với 5$. Thế là mình tò mò lập tài khoản… và bất ngờ nhận được khách hàng đầu tiên.
                  </p>

                  <p className="mb-8">
                    Từ vài dự án nhỏ lẻ, rồi dần có những khách hàng dài hạn, thu nhập khi đó thậm chí còn cao hơn cả lương full-time văn phòng. Đó là lúc mình quyết định chuyển hẳn sang làm <strong>Freelancer – Virtual Assistant toàn thời gian</strong>.
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-sunflower/20 rounded-full flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-sunflower" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy mb-0">Bén Duyên Với VA Agency</h2>
                  </div>

                  <p className="mb-6">
                    Khi đã ổn định hơn, mình bắt đầu hỗ trợ khách nước ngoài <strong>tìm, thuê và đào tạo VA Việt Nam</strong>. Nhiều khách chia sẻ: <em>"Ban đầu mọi người trong công ty phản đối thuê VA Việt Nam, nhưng giờ nửa team của tôi là người Việt rồi"</em>.
                  </p>

                  <p className="mb-8">
                    Điều này khiến mình nhận ra VA Việt Nam vừa giỏi, nói tiếng Anh khá, chịu khó như vậy thì sao không va chạm nhiều hơn? <strong>Khách hàng quốc tế</strong> vừa có đội ngũ VA chất lượng với chi phí hợp lý, trong khi các bạn trẻ Việt Nam lại có thêm cơ hội và thu nhập. Thế là mô hình <strong>VA Agency</strong> ra đời.
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-sunflower/20 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-sunflower" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy mb-0">Bén Duyên Với Cộng Đồng VA Việt Nam</h2>
                  </div>

                  <p className="mb-8">
                    Khi tìm tài liệu học hỏi, mình nhận thấy thiếu những nội dung thực sự chuyên sâu về <strong>Trợ lý ảo cho thị trường quốc tế</strong>. Đa phần chỉ nói về freelancer hoặc VA trong nước. Vì vậy, mình lập <strong>Cộng đồng VA - Virtual Assistant Việt Nam</strong> – nơi chia sẻ kiến thức, kinh nghiệm thực tế và cập nhật xu hướng nghề VA toàn cầu.
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-sunflower/20 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-sunflower" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy mb-0">Bén Duyên Với Coaching Nghề VA</h2>
                  </div>

                  <p className="mb-6">
                    Ban đầu, mình chỉ muốn chia sẻ miễn phí. Nhưng khi nhiều bạn mong muốn học bài bản hơn, mình đã phát triển khóa <strong>Virtual Assistant Pro (VAP)</strong> – chương trình đào tạo chuyên sâu giúp học viên xây dựng kỹ năng, mindset và con đường sự nghiệp bền vững.
                  </p>

                  <p className="mb-8">
                    Và đó là một trong những lựa chọn đúng đắn nhất đến giờ phút này của mình vì thông qua lớp VAP, mình không chỉ được hướng dẫn mà còn được học rất nhiều từ các học viên, đến từ mọi miền tổ quốc, từ nhiều hoàn cảnh khác nhau, mỗi người là một câu chuyện mà mình đọc mãi không chán.
                  </p>

                  <hr className="border-sunflower/30 my-12" />

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-sunflower/20 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-sunflower" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy mb-0">Kết Lại Hành Trình</h2>
                  </div>

                  <p className="mb-6">
                    Hơn 10 năm gắn bó với nhiều vai trò giúp mình thấu hiểu cả <strong>khách hàng lẫn học viên</strong> cần gì.
                  </p>

                  <p className="mb-6">
                    Mình là người thích thay đổi, nhưng vẫn kiên trì với nghề này vì <strong>Virtual Assistant</strong> luôn mang lại thử thách mới, hướng phát triển mới, và cơ hội được sống theo cách mình muốn.
                  </p>

                  <p className="mb-8">
                    Nếu bạn nghĩ bản thân đang bắt đầu bằng số 0 thì Duyên cũng từng như bạn, nhưng không sao cả.
                  </p>

                  <div className="bg-gradient-to-r from-sunflower/10 to-lightBlue/10 rounded-lg p-6 text-center">
                    <p className="text-xl font-semibold text-navy mb-0">
                      Bởi vì:<br/>
                      <span className="text-2xl font-bold text-sunflower">"Every master was once a beginner."</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default VAJourneyPage;