-- Add registration confirmation email template
INSERT INTO public.email_templates (name, description, subject, html_content, text_content, template_type, variables) VALUES
(
  'Course Registration Confirmation',
  'Confirmation email sent to users who register for the VAP course',
  'Đăng Ký Khóa Học VAP Thành Công - Chào Mừng {{full_name}}!',
  '<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Đăng Ký Khóa Học VAP Thành Công</title>
  <style>
    body {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #2C3E50;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #FEF7ED;
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
      padding: 20px;
      background: linear-gradient(135deg, #FDD31E, #8FBC8F);
      border-radius: 15px;
    }
    .logo {
      max-width: 200px;
      margin-bottom: 15px;
    }
    .welcome-title {
      color: #2C3E50;
      font-size: 28px;
      font-weight: bold;
      margin: 0;
    }
    .content {
      background: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      margin-bottom: 20px;
    }
    .highlight-box {
      background: linear-gradient(135deg, #FDD31E20, #8FBC8F20);
      padding: 20px;
      border-radius: 10px;
      border-left: 4px solid #FDD31E;
      margin: 20px 0;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin: 20px 0;
    }
    .info-item {
      background: #F8F9FA;
      padding: 15px;
      border-radius: 8px;
      border-left: 3px solid #8FBC8F;
    }
    .info-label {
      font-weight: bold;
      color: #2C3E50;
      font-size: 14px;
      margin-bottom: 5px;
    }
    .info-value {
      color: #5D6D7E;
      font-size: 16px;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #8FBC8F, #FDD31E);
      color: white;
      padding: 15px 30px;
      text-decoration: none;
      border-radius: 25px;
      font-weight: bold;
      text-align: center;
      margin: 10px 5px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;
    }
    .cta-button:hover {
      transform: translateY(-2px);
    }
    .next-steps {
      background: #E8F5E8;
      padding: 20px;
      border-radius: 10px;
      margin: 20px 0;
    }
    .step {
      display: flex;
      align-items: center;
      margin: 10px 0;
      padding: 10px;
      background: white;
      border-radius: 8px;
    }
    .step-number {
      background: #8FBC8F;
      color: white;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      margin-right: 15px;
      flex-shrink: 0;
    }
    .footer {
      text-align: center;
      padding: 20px;
      color: #7F8C8D;
      font-size: 12px;
      border-top: 1px solid #E5E5E5;
      margin-top: 30px;
    }
    .contact-info {
      background: #F8F9FA;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      margin: 20px 0;
    }
    @media (max-width: 600px) {
      .info-grid {
        grid-template-columns: 1fr;
      }
      .cta-button {
        display: block;
        margin: 10px 0;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <img src="https://virtualassistantpro.com/logos/logo_brown.svg" alt="Virtual Assistant Pro" class="logo">
    <h1 class="welcome-title">🎉 Chào Mừng Bạn Đến Với VAP!</h1>
  </div>
  
  <div class="content">
    <p style="font-size: 18px; color: #2C3E50;">Xin chào <strong>{{full_name}}</strong>,</p>
    
    <p>Cảm ơn bạn đã đăng ký khóa học <strong>Virtual Assistant Pro</strong>! Chúng tôi rất vui mừng được chào đón bạn vào cộng đồng những người muốn trở thành Virtual Assistant chuyên nghiệp.</p>
    
    <div class="highlight-box">
      <h3 style="color: #2C3E50; margin-top: 0;">✅ Đăng ký của bạn đã được xác nhận thành công!</h3>
      <p style="margin-bottom: 0;">Chúng tôi đã nhận được thông tin đăng ký và sẽ liên hệ với bạn trong vòng <strong>24 giờ</strong> để tư vấn chi tiết về chương trình học.</p>
    </div>
    
    <h3 style="color: #2C3E50;">📋 Thông Tin Đăng Ký Của Bạn:</h3>
    <div class="info-grid">
      <div class="info-item">
        <div class="info-label">👤 Họ và tên:</div>
        <div class="info-value">{{full_name}}</div>
      </div>
      <div class="info-item">
        <div class="info-label">📧 Email:</div>
        <div class="info-value">{{email}}</div>
      </div>
      <div class="info-item">
        <div class="info-label">📱 Số điện thoại:</div>
        <div class="info-value">{{phone}}</div>
      </div>
      <div class="info-item">
        <div class="info-label">💼 Kinh nghiệm:</div>
        <div class="info-value">{{experience_display}}</div>
      </div>
    </div>
    
    <div class="next-steps">
      <h3 style="color: #2C3E50; margin-top: 0;">🚀 Các Bước Tiếp Theo:</h3>
      
      <div class="step">
        <div class="step-number">1</div>
        <div>
          <strong>Chờ cuộc gọi tư vấn</strong><br>
          <span style="color: #7F8C8D;">Chúng tôi sẽ gọi điện tư vấn qua số {{phone}} trong vòng 24 giờ</span>
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">2</div>
        <div>
          <strong>Tham gia nhóm Facebook</strong><br>
          <span style="color: #7F8C8D;">Kết nối với cộng đồng học viên VAP và nhận thông tin mới nhất</span>
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">3</div>
        <div>
          <strong>Chuẩn bị bắt đầu học</strong><br>
          <span style="color: #7F8C8D;">Sau khi tư vấn, bạn sẽ được hướng dẫn chi tiết về lịch học và tài liệu</span>
        </div>
      </div>
    </div>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="{{course_details_url}}" class="cta-button">📚 Xem Chi Tiết Khóa Học</a>
      <a href="{{facebook_group_url}}" class="cta-button">👥 Tham Gia Nhóm Facebook</a>
    </div>
    
    <div class="contact-info">
      <h4 style="color: #2C3E50; margin-top: 0;">📞 Liên Hệ Trực Tiếp</h4>
      <p style="margin: 10px 0;">Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại liên hệ với chúng tôi:</p>
      <p style="margin: 5px 0;"><strong>📱 Zalo:</strong> <a href="https://zalo.me/0932548082" style="color: #8FBC8F;">0932 548 082</a></p>
      <p style="margin: 5px 0;"><strong>📘 Facebook:</strong> <a href="https://www.facebook.com/duyen.pham.1048" style="color: #8FBC8F;">Duyên Phạm</a></p>
      <p style="margin: 5px 0;"><strong>✉️ Email:</strong> <a href="mailto:{{support_email}}" style="color: #8FBC8F;">{{support_email}}</a></p>
    </div>
    
    <p style="font-style: italic; color: #7F8C8D; text-align: center; margin-top: 30px;">
      "Hành trình trở thành Virtual Assistant chuyên nghiệp bắt đầu từ hôm nay. Chúng tôi sẽ đồng hành cùng bạn trên con đường thành công!" 🌟
    </p>
  </div>
  
  <div class="footer">
    <p>Email này được gửi tự động từ hệ thống Virtual Assistant Pro.</p>
    <p>Nếu bạn không đăng ký khóa học này, vui lòng bỏ qua email này.</p>
    <p>© 2024 Virtual Assistant Pro. All rights reserved.</p>
    <p><a href="{{website_url}}" style="color: #8FBC8F;">{{website_url}}</a></p>
  </div>
</body>
</html>',
  'ĐĂNG KÝ KHÓA HỌC VAP THÀNH CÔNG

Xin chào {{full_name}},

Cảm ơn bạn đã đăng ký khóa học Virtual Assistant Pro! Chúng tôi rất vui mừng được chào đón bạn vào cộng đồng những người muốn trở thành Virtual Assistant chuyên nghiệp.

THÔNG TIN ĐĂNG KÝ CỦA BẠN:
- Họ và tên: {{full_name}}
- Email: {{email}}
- Số điện thoại: {{phone}}
- Kinh nghiệm: {{experience_display}}

CÁC BƯỚC TIẾP THEO:
1. Chờ cuộc gọi tư vấn - Chúng tôi sẽ gọi điện tư vấn qua số {{phone}} trong vòng 24 giờ
2. Tham gia nhóm Facebook - Kết nối với cộng đồng học viên VAP
3. Chuẩn bị bắt đầu học - Sau khi tư vấn, bạn sẽ được hướng dẫn chi tiết

LIÊN HỆ TRỰC TIẾP:
- Zalo: 0932 548 082 (https://zalo.me/0932548082)
- Facebook: Duyên Phạm (https://www.facebook.com/duyen.pham.1048)
- Email: {{support_email}}

Xem chi tiết khóa học: {{course_details_url}}
Tham gia nhóm Facebook: {{facebook_group_url}}

"Hành trình trở thành Virtual Assistant chuyên nghiệp bắt đầu từ hôm nay. Chúng tôi sẽ đồng hành cùng bạn trên con đường thành công!"

---
Email này được gửi tự động từ hệ thống Virtual Assistant Pro.
Nếu bạn không đăng ký khóa học này, vui lòng bỏ qua email này.
© 2024 Virtual Assistant Pro. All rights reserved.
{{website_url}}',
  'registration_confirmation',
  '["full_name", "email", "phone", "experience_display", "course_details_url", "facebook_group_url", "support_email", "website_url"]'
);

-- Insert template variables for the registration confirmation template
INSERT INTO public.email_template_variables (template_id, variable_name, variable_type, default_value, description, is_required)
SELECT 
  t.id,
  variable_data.name,
  variable_data.type,
  variable_data.default_val,
  variable_data.desc,
  variable_data.required
FROM public.email_templates t
CROSS JOIN (
  VALUES 
    ('full_name', 'text', '', 'Họ và tên của người đăng ký', true),
    ('email', 'text', '', 'Email của người đăng ký', true),
    ('phone', 'text', '', 'Số điện thoại của người đăng ký', true),
    ('experience_display', 'text', 'Chưa có kinh nghiệm', 'Mức độ kinh nghiệm hiển thị', false),
    ('course_details_url', 'url', 'https://virtualassistantpro.com/vap-course', 'Link đến trang chi tiết khóa học', false),
    ('facebook_group_url', 'url', 'https://www.facebook.com/groups/virtualassistantpro', 'Link đến nhóm Facebook VAP', false),
    ('support_email', 'text', 'support@virtualassistantpro.com', 'Email hỗ trợ khách hàng', false),
    ('website_url', 'url', 'https://virtualassistantpro.com', 'URL trang web chính', false)
) AS variable_data(name, type, default_val, desc, required)
WHERE t.name = 'Course Registration Confirmation';