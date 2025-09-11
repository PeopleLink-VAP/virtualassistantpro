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

    const emailResponse = await resend.emails.send({
      from: "Virtual Assistant Pro <noreply@virtualassistantpro.vn>",
      to: [adminEmail],
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

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