import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const adminEmail = "duyen.pham@virtualassistantpro.vn";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NotificationRequest {
  type: "contact" | "newsletter" | "registration";
  data: any;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Send notification function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, data }: NotificationRequest = await req.json();
    console.log("Notification type:", type, "Data:", data);

    let subject = "";
    let htmlContent = "";

    switch (type) {
      case "contact":
        subject = `Liên hệ mới từ ${data.name}`;
        htmlContent = `
          <h2>Liên hệ mới từ website</h2>
          <p><strong>Tên:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Điện thoại:</strong> ${data.phone || "Không có"}</p>
          <p><strong>Loại tư vấn:</strong> ${data.inquiryType || "Không xác định"}</p>
          <p><strong>Tin nhắn:</strong></p>
          <p>${data.message}</p>
        `;
        break;
      
      case "newsletter":
        subject = `Đăng ký newsletter mới: ${data.email}`;
        htmlContent = `
          <h2>Đăng ký newsletter mới</h2>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Nguồn:</strong> ${data.source}</p>
          <p><strong>Thời gian:</strong> ${new Date().toLocaleString("vi-VN")}</p>
        `;
        break;
      
      case "registration":
        subject = `Đăng ký khóa học mới từ ${data.fullName}`;
        htmlContent = `
          <h2>Đăng ký khóa học mới</h2>
          <p><strong>Họ tên:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Điện thoại:</strong> ${data.phone}</p>
          <p><strong>Kinh nghiệm:</strong> ${data.experience}</p>
          <p><strong>Động lực:</strong></p>
          <p>${data.motivation}</p>
        `;
        break;
      
      default:
        throw new Error("Invalid notification type");
    }

    // Send admin notification email
    const adminEmailResponse = await resend.emails.send({
      from: "Virtual Assistant Pro <noreply@virtualassistantpro.vn>",
      bcc: "duyenpham.jc@gmail.com",
      to: [adminEmail],
      subject: subject,
      html: htmlContent,
    });

    console.log("Admin email sent successfully:", adminEmailResponse);

    // Send welcome email to user for registration and newsletter types
    if (type === "registration") {
      const welcomeSubject = `Chào mừng bạn đến với Virtual Assistant Pro - Xác nhận đăng ký khóa học`;
      const welcomeHtmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #F4D03F, #58D68D); padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Virtual Assistant Pro</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Chào mừng bạn đến với cộng đồng VA chuyên nghiệp!</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #2C3E50; margin-bottom: 20px;">Xin chào ${data.fullName}!</h2>
            
            <p style="color: #34495E; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Cảm ơn bạn đã đăng ký khóa học <strong>Virtual Assistant Pro</strong>. Chúng tôi rất vui mừng được chào đón bạn vào cộng đồng những người mong muốn trở thành Virtual Assistant chuyên nghiệp.
            </p>
            
            <div style="background: #F8F9FA; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2C3E50; margin-top: 0;">Thông tin đăng ký của bạn:</h3>
              <ul style="color: #34495E; padding-left: 20px; margin: 0;">
                <li><strong>Họ tên:</strong> ${data.fullName}</li>
                <li><strong>Email:</strong> ${data.email}</li>
                <li><strong>Điện thoại:</strong> ${data.phone}</li>
                <li><strong>Kinh nghiệm:</strong> ${data.experience || "Chưa xác định"}</li>
              </ul>
            </div>
            
            <div style="background: #E8F5E8; padding: 20px; border-radius: 8px; border-left: 4px solid #58D68D; margin: 20px 0;">
              <h3 style="color: #2C3E50; margin-top: 0;">Các bước tiếp theo:</h3>
              <ol style="color: #34495E; padding-left: 20px; margin: 0;">
                <li>Chúng tôi sẽ liên hệ với bạn trong vòng <strong>24 giờ</strong> để tư vấn chi tiết</li>
                <li>Chuẩn bị thông tin cá nhân và mục tiêu nghề nghiệp</li>
                <li>Tham gia nhóm cộng đồng VAP để kết nối với các học viên khác</li>
              </ol>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://virtualassistantpro.vn" style="display: inline-block; background: linear-gradient(135deg, #58D68D, #F4D03F); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 16px;">
                Khám phá thêm về VAP
              </a>
            </div>
            
            <hr style="border: none; border-top: 1px solid #E5E5E5; margin: 30px 0;">
            
            <p style="color: #7F8C8D; font-size: 14px; text-align: center; margin: 0;">
              Bạn có thắc mắc? Liên hệ với chúng tôi qua:<br>
              📞 Zalo: <a href="https://zalo.me/0932548082" style="color: #3498DB;">0932 548 082</a><br>
              📧 Email: <a href="mailto:duyen.pham@virtualassistantpro.vn" style="color: #3498DB;">duyen.pham@virtualassistantpro.vn</a><br>
              🌐 Website: <a href="https://virtualassistantpro.vn" style="color: #3498DB;">virtualassistantpro.vn</a>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #95A5A6; font-size: 12px; margin: 0;">
              © 2025 Virtual Assistant Pro. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>
      `;

      const userEmailResponse = await resend.emails.send({
        from: "Virtual Assistant Pro <noreply@virtualassistantpro.vn>",
        bcc: "duyenpham.jc@gmail.com",
        to: [data.email],
        subject: welcomeSubject,
        html: welcomeHtmlContent,
      });

      console.log("Welcome email sent to user:", userEmailResponse);
    }

    // Send welcome email to user for newsletter subscription
    if (type === "newsletter") {
      const newsletterWelcomeSubject = `Chào mừng bạn đến với Virtual Assistant Pro - Xác nhận đăng ký newsletter`;
      const newsletterWelcomeHtmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #F4D03F, #58D68D); padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Virtual Assistant Pro</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Cảm ơn bạn đã đăng ký newsletter!</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #2C3E50; margin-bottom: 20px;">Xin chào!</h2>
            
            <p style="color: #34495E; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Cảm ơn bạn đã đăng ký nhận newsletter từ <strong>Virtual Assistant Pro</strong>. Chúng tôi sẽ gửi cho bạn những thông tin mới nhất về:
            </p>
            
            <div style="background: #F8F9FA; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <ul style="color: #34495E; padding-left: 20px; margin: 0;">
                <li>Tips và kỹ năng Virtual Assistant chuyên nghiệp</li>
                <li>Thông tin về các khóa học và workshop mới</li>
                <li>Cơ hội việc làm trong ngành VA</li>
                <li>Câu chuyện thành công của các học viên</li>
                <li>Xu hướng và cập nhật mới nhất trong ngành</li>
              </ul>
            </div>
            
            <div style="background: #E8F5E8; padding: 20px; border-radius: 8px; border-left: 4px solid #58D68D; margin: 20px 0;">
              <h3 style="color: #2C3E50; margin-top: 0;">Tham gia cộng đồng VAP:</h3>
              <p style="color: #34495E; margin: 10px 0;">
                Kết nối với hàng nghìn Virtual Assistant khác trong cộng đồng Facebook của chúng tôi để chia sẻ kinh nghiệm và học hỏi lẫn nhau.
              </p>
              <div style="text-align: center; margin: 15px 0;">
                <a href="https://www.facebook.com/groups/1774549309585565" style="display: inline-block; background: #4267B2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                  Tham gia nhóm Facebook
                </a>
              </div>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://virtualassistantpro.vn" style="display: inline-block; background: linear-gradient(135deg, #58D68D, #F4D03F); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 16px;">
                Khám phá VAP
              </a>
            </div>
            
            <hr style="border: none; border-top: 1px solid #E5E5E5; margin: 30px 0;">
            
            <p style="color: #7F8C8D; font-size: 14px; text-align: center; margin: 0;">
              Bạn có thắc mắc? Liên hệ với chúng tôi qua:<br>
              📞 Zalo: <a href="https://zalo.me/0932548082" style="color: #3498DB;">0932 548 082</a><br>
              📧 Email: <a href="mailto:duyen.pham@virtualassistantpro.vn" style="color: #3498DB;">duyen.pham@virtualassistantpro.vn</a><br>
              🌐 Website: <a href="https://virtualassistantpro.vn" style="color: #3498DB;">virtualassistantpro.vn</a>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #95A5A6; font-size: 12px; margin: 0;">
              © 2025 Virtual Assistant Pro. Tất cả quyền được bảo lưu.<br>
              <a href="mailto:duyen.pham@virtualassistantpro.vn?subject=Hủy%20đăng%20ký%20newsletter" style="color: #95A5A6; text-decoration: underline;">Hủy đăng ký</a>
            </p>
          </div>
        </div>
      `;

      const newsletterUserEmailResponse = await resend.emails.send({
        from: "Virtual Assistant Pro <noreply@virtualassistantpro.vn>",
        bcc: "duyenpham.jc@gmail.com",
        to: [data.email],
        subject: newsletterWelcomeSubject,
        html: newsletterWelcomeHtmlContent,
      });

      console.log("Newsletter welcome email sent to user:", newsletterUserEmailResponse);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-notification function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);