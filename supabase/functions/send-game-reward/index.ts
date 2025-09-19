import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface GameRewardRequest {
  name: string;
  email: string;
  playerType?: string;
  score?: number;
  timeLeft?: number;
  isWinner: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, playerType, score, timeLeft, isWinner }: GameRewardRequest = await req.json();

    console.log(`Sending ${isWinner ? 'winner' : 'loser'} email to:`, email);

    if (isWinner) {
      // Send winner email with reward
      const emailResponse = await resend.emails.send({
        from: "VirtualAssistantPro <onboarding@resend.dev>",
        to: [email],
        subject: "Chúc mừng! Đây là phần quà từ VirtualAssistantPro",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #2563eb; text-align: center;">🎉 Chúc mừng ${name}!</h1>
            
            <p>Bạn đã hoàn thành trò chơi VA thật xuất sắc! 🎉</p>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Kết quả của bạn:</h3>
              <ul>
                <li><strong>Điểm số:</strong> ${score || 0} điểm</li>
                <li><strong>Thời gian còn lại:</strong> ${timeLeft || 0} giây</li>
                <li><strong>Loại hình:</strong> ${playerType || 'Không xác định'}</li>
              </ul>
            </div>
            
            <div style="background-color: #dcfce7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>🎁 Phần quà của bạn:</h3>
              <p><strong>✅ Checklist khởi đầu cùng VA (PDF)</strong></p>
              <p>File PDF này sẽ giúp bạn hiểu rõ hơn về cách bắt đầu với Virtual Assistant và tối ưu hóa công việc của mình.</p>
              <p><em>*Lưu ý: Đây là phần quà mô phỏng trong demo game. Trong thực tế, file PDF sẽ được đính kèm.</em></p>
            </div>
            
            <p>Cảm ơn bạn đã tham gia trò chơi! Nếu quan tâm đến khóa học VA chuyên nghiệp, hãy ghé thăm website của chúng tôi.</p>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://virtualassistantpro.vn/vap-course" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Tìm hiểu khóa học VA
              </a>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
              <p>Best regards,<br><strong>The VirtualAssistantPro Team</strong></p>
            </div>
          </div>
        `,
      });

      console.log("Winner email sent successfully:", emailResponse);
    } else {
      // Send encouraging email for those who didn't complete the game
      const emailResponse = await resend.emails.send({
        from: "VirtualAssistantPro <onboarding@resend.dev>",
        to: [email],
        subject: "Chưa qua ải lần này, nhưng VA giỏi cũng luyện từ từ thôi!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #2563eb; text-align: center;">😅 Chưa sao đâu ${name}!</h1>
            
            <p>Không sao nếu bạn chưa hoàn thành trò chơi lần này 😅.</p>
            
            <p>Nghề VA cũng giống vậy, cần luyện tập, kỹ năng và cả sự kiên nhẫn. Những VA giỏi nhất cũng đều bắt đầu từ những bước đi nhỏ và học hỏi từng ngày.</p>
            
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>💡 Một số tips để bạn cải thiện:</h3>
              <ul>
                <li>Tìm hiểu kỹ về từng loại công việc VA</li>
                <li>Luyện tập kỹ năng quản lý thời gian</li>
                <li>Học cách phân loại và ưu tiên công việc</li>
                <li>Tham gia khóa học chuyên nghiệp để có kiến thức nền tảng</li>
              </ul>
            </div>
            
            <p>Nếu bạn muốn tìm hiểu sâu hơn về nghề VA và cách phát triển kỹ năng, chúng tôi có khóa học chuyên nghiệp dành cho bạn!</p>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://virtualassistantpro.vn/vap-course" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Tìm hiểu khóa học VA
              </a>
            </div>
            
            <div style="text-align: center; margin-top: 15px;">
              <a href="https://virtualassistantpro.vn/games/game-of-the-week" style="color: #2563eb; text-decoration: none;">
                🎮 Thử lại trò chơi
              </a>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
              <p>Best regards,<br><strong>The VirtualAssistantPro Team</strong></p>
            </div>
          </div>
        `,
      });

      console.log("Encouragement email sent successfully:", emailResponse);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-game-reward function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);