-- System Email Templates Table for managing Supabase auth email templates
CREATE TABLE IF NOT EXISTS public.system_email_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_key TEXT NOT NULL UNIQUE, -- e.g., 'confirmation', 'recovery', 'magic_link', etc.
  name TEXT NOT NULL,
  description TEXT,
  subject TEXT NOT NULL,
  html_content TEXT NOT NULL,
  template_type TEXT NOT NULL DEFAULT 'system', -- Always 'system' for these templates
  is_active BOOLEAN DEFAULT true,
  is_system BOOLEAN DEFAULT true, -- Cannot be deleted if true
  variables JSONB DEFAULT '[]'::jsonb, -- Array of Supabase variable names like ["ConfirmationURL", "Token", "Email"]
  default_subject TEXT NOT NULL, -- Store original default for reset functionality
  default_html_content TEXT NOT NULL, -- Store original default for reset functionality
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_system_email_templates_key ON public.system_email_templates(template_key);
CREATE INDEX IF NOT EXISTS idx_system_email_templates_active ON public.system_email_templates(is_active);

-- Enable RLS (Row Level Security)
ALTER TABLE public.system_email_templates ENABLE ROW LEVEL SECURITY;

-- RLS Policies for system_email_templates
CREATE POLICY "Admin can manage system email templates" ON public.system_email_templates
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
    )
  );

-- Insert default system email templates based on our Vietnamese templates
INSERT INTO public.system_email_templates (
  template_key, 
  name, 
  description, 
  subject, 
  html_content, 
  variables,
  default_subject,
  default_html_content
) VALUES
(
  'confirmation',
  'Xác nhận đăng ký tài khoản',
  'Email xác nhận gửi cho người dùng mới đăng ký',
  'Xác nhận đăng ký tài khoản - Virtual Assistant Pro',
  '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #1e3a8a; margin: 0; font-size: 24px;">Virtual Assistant Pro</h1>
      <p style="color: #64748b; margin: 5px 0 0 0;">Trung tâm đào tạo Trợ lý ảo chuyên nghiệp</p>
    </div>
    <h2 style="color: #1e3a8a; margin-bottom: 20px;">Chào mừng bạn đến với Virtual Assistant Pro!</h2>
    <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">Cảm ơn bạn đã đăng ký tài khoản tại Virtual Assistant Pro. Để hoàn tất quá trình đăng ký và bắt đầu hành trình trở thành Trợ lý ảo chuyên nghiệp, vui lòng xác nhận địa chỉ email của bạn.</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{{ .ConfirmationURL }}" style="background-color: #fbbf24; color: #1e3a8a; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Xác nhận địa chỉ email</a>
    </div>
    <p style="color: #6b7280; font-size: 14px; line-height: 1.5;">Nếu bạn không thể nhấp vào nút trên, hãy sao chép và dán liên kết sau vào trình duyệt của bạn:<br>
    <span style="word-break: break-all;">{{ .ConfirmationURL }}</span></p>
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    <p style="color: #6b7280; font-size: 12px; text-align: center;">© 2024 Virtual Assistant Pro. Trung tâm đào tạo Trợ lý ảo hàng đầu Việt Nam.</p>
  </div>
</div>',
  '["ConfirmationURL"]'::jsonb,
  'Xác nhận đăng ký tài khoản - Virtual Assistant Pro',
  '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #1e3a8a; margin: 0; font-size: 24px;">Virtual Assistant Pro</h1>
      <p style="color: #64748b; margin: 5px 0 0 0;">Trung tâm đào tạo Trợ lý ảo chuyên nghiệp</p>
    </div>
    <h2 style="color: #1e3a8a; margin-bottom: 20px;">Chào mừng bạn đến với Virtual Assistant Pro!</h2>
    <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">Cảm ơn bạn đã đăng ký tài khoản tại Virtual Assistant Pro. Để hoàn tất quá trình đăng ký và bắt đầu hành trình trở thành Trợ lý ảo chuyên nghiệp, vui lòng xác nhận địa chỉ email của bạn.</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{{ .ConfirmationURL }}" style="background-color: #fbbf24; color: #1e3a8a; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Xác nhận địa chỉ email</a>
    </div>
    <p style="color: #6b7280; font-size: 14px; line-height: 1.5;">Nếu bạn không thể nhấp vào nút trên, hãy sao chép và dán liên kết sau vào trình duyệt của bạn:<br>
    <span style="word-break: break-all;">{{ .ConfirmationURL }}</span></p>
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    <p style="color: #6b7280; font-size: 12px; text-align: center;">© 2024 Virtual Assistant Pro. Trung tâm đào tạo Trợ lý ảo hàng đầu Việt Nam.</p>
  </div>
</div>'
),
(
  'recovery',
  'Đặt lại mật khẩu',
  'Email đặt lại mật khẩu cho người dùng',
  'Đặt lại mật khẩu - Virtual Assistant Pro',
  '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #1e3a8a; margin: 0; font-size: 24px;">Virtual Assistant Pro</h1>
      <p style="color: #64748b; margin: 5px 0 0 0;">Trung tâm đào tạo Trợ lý ảo chuyên nghiệp</p>
    </div>
    <h2 style="color: #1e3a8a; margin-bottom: 20px;">Yêu cầu đặt lại mật khẩu</h2>
    <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu cho tài khoản Virtual Assistant Pro của bạn. Nếu bạn đã yêu cầu điều này, vui lòng nhấp vào nút bên dưới để tạo mật khẩu mới.</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{{ .ConfirmationURL }}" style="background-color: #fbbf24; color: #1e3a8a; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Đặt lại mật khẩu</a>
    </div>
    <p style="color: #dc2626; font-size: 14px; line-height: 1.5; background-color: #fef2f2; padding: 15px; border-radius: 6px; border-left: 4px solid #dc2626;">⚠️ Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này. Mật khẩu của bạn sẽ không thay đổi.</p>
    <p style="color: #6b7280; font-size: 14px; line-height: 1.5;">Liên kết này sẽ hết hạn sau 24 giờ vì lý do bảo mật.</p>
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    <p style="color: #6b7280; font-size: 12px; text-align: center;">© 2024 Virtual Assistant Pro. Trung tâm đào tạo Trợ lý ảo hàng đầu Việt Nam.</p>
  </div>
</div>',
  '["ConfirmationURL"]'::jsonb,
  'Đặt lại mật khẩu - Virtual Assistant Pro',
  '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #1e3a8a; margin: 0; font-size: 24px;">Virtual Assistant Pro</h1>
      <p style="color: #64748b; margin: 5px 0 0 0;">Trung tâm đào tạo Trợ lý ảo chuyên nghiệp</p>
    </div>
    <h2 style="color: #1e3a8a; margin-bottom: 20px;">Yêu cầu đặt lại mật khẩu</h2>
    <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu cho tài khoản Virtual Assistant Pro của bạn. Nếu bạn đã yêu cầu điều này, vui lòng nhấp vào nút bên dưới để tạo mật khẩu mới.</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{{ .ConfirmationURL }}" style="background-color: #fbbf24; color: #1e3a8a; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Đặt lại mật khẩu</a>
    </div>
    <p style="color: #dc2626; font-size: 14px; line-height: 1.5; background-color: #fef2f2; padding: 15px; border-radius: 6px; border-left: 4px solid #dc2626;">⚠️ Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này. Mật khẩu của bạn sẽ không thay đổi.</p>
    <p style="color: #6b7280; font-size: 14px; line-height: 1.5;">Liên kết này sẽ hết hạn sau 24 giờ vì lý do bảo mật.</p>
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    <p style="color: #6b7280; font-size: 12px; text-align: center;">© 2024 Virtual Assistant Pro. Trung tâm đào tạo Trợ lý ảo hàng đầu Việt Nam.</p>
  </div>
</div>'
),
(
  'magic_link',
  'Liên kết đăng nhập nhanh',
  'Email chứa liên kết đăng nhập nhanh',
  'Liên kết đăng nhập - Virtual Assistant Pro',
  '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #1e3a8a; margin: 0; font-size: 24px;">Virtual Assistant Pro</h1>
      <p style="color: #64748b; margin: 5px 0 0 0;">Trung tâm đào tạo Trợ lý ảo chuyên nghiệp</p>
    </div>
    <h2 style="color: #1e3a8a; margin-bottom: 20px;">Liên kết đăng nhập nhanh</h2>
    <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">Chúng tôi đã tạo một liên kết đăng nhập nhanh cho tài khoản Virtual Assistant Pro của bạn. Nhấp vào nút bên dưới để truy cập ngay vào tài khoản của bạn.</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{{ .ConfirmationURL }}" style="background-color: #fbbf24; color: #1e3a8a; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Đăng nhập ngay</a>
    </div>
    <p style="color: #6b7280; font-size: 14px; line-height: 1.5;">Liên kết này sẽ hết hạn sau 1 giờ vì lý do bảo mật. Nếu bạn không yêu cầu đăng nhập, vui lòng bỏ qua email này.</p>
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    <p style="color: #6b7280; font-size: 12px; text-align: center;">© 2024 Virtual Assistant Pro. Trung tâm đào tạo Trợ lý ảo hàng đầu Việt Nam.</p>
  </div>
</div>',
  '["ConfirmationURL"]'::jsonb,
  'Liên kết đăng nhập - Virtual Assistant Pro',
  '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #1e3a8a; margin: 0; font-size: 24px;">Virtual Assistant Pro</h1>
      <p style="color: #64748b; margin: 5px 0 0 0;">Trung tâm đào tạo Trợ lý ảo chuyên nghiệp</p>
    </div>
    <h2 style="color: #1e3a8a; margin-bottom: 20px;">Liên kết đăng nhập nhanh</h2>
    <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">Chúng tôi đã tạo một liên kết đăng nhập nhanh cho tài khoản Virtual Assistant Pro của bạn. Nhấp vào nút bên dưới để truy cập ngay vào tài khoản của bạn.</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{{ .ConfirmationURL }}" style="background-color: #fbbf24; color: #1e3a8a; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Đăng nhập ngay</a>
    </div>
    <p style="color: #6b7280; font-size: 14px; line-height: 1.5;">Liên kết này sẽ hết hạn sau 1 giờ vì lý do bảo mật. Nếu bạn không yêu cầu đăng nhập, vui lòng bỏ qua email này.</p>
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    <p style="color: #6b7280; font-size: 12px; text-align: center;">© 2024 Virtual Assistant Pro. Trung tâm đào tạo Trợ lý ảo hàng đầu Việt Nam.</p>
  </div>
</div>'
),
(
  'email_change',
  'Xác nhận thay đổi email',
  'Email xác nhận khi người dùng thay đổi địa chỉ email',
  'Xác nhận thay đổi email - Virtual Assistant Pro',
  '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #1e3a8a; margin: 0; font-size: 24px;">Virtual Assistant Pro</h1>
      <p style="color: #64748b; margin: 5px 0 0 0;">Trung tâm đào tạo Trợ lý ảo chuyên nghiệp</p>
    </div>
    <h2 style="color: #1e3a8a; margin-bottom: 20px;">Xác nhận thay đổi địa chỉ email</h2>
    <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">Chúng tôi đã nhận được yêu cầu thay đổi địa chỉ email cho tài khoản Virtual Assistant Pro của bạn từ <strong>{{ .Email }}</strong> sang <strong>{{ .NewEmail }}</strong>.</p>
    <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">Để hoàn tất việc thay đổi, vui lòng xác nhận bằng cách nhấp vào nút bên dưới:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{{ .ConfirmationURL }}" style="background-color: #fbbf24; color: #1e3a8a; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Xác nhận thay đổi email</a>
    </div>
    <p style="color: #dc2626; font-size: 14px; line-height: 1.5; background-color: #fef2f2; padding: 15px; border-radius: 6px; border-left: 4px solid #dc2626;">⚠️ Nếu bạn không yêu cầu thay đổi email, vui lòng bỏ qua email này và liên hệ với chúng tôi ngay lập tức.</p>
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    <p style="color: #6b7280; font-size: 12px; text-align: center;">© 2024 Virtual Assistant Pro. Trung tâm đào tạo Trợ lý ảo hàng đầu Việt Nam.</p>
  </div>
</div>',
  '["ConfirmationURL", "Email", "NewEmail"]'::jsonb,
  'Xác nhận thay đổi email - Virtual Assistant Pro',
  '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #1e3a8a; margin: 0; font-size: 24px;">Virtual Assistant Pro</h1>
      <p style="color: #64748b; margin: 5px 0 0 0;">Trung tâm đào tạo Trợ lý ảo chuyên nghiệp</p>
    </div>
    <h2 style="color: #1e3a8a; margin-bottom: 20px;">Xác nhận thay đổi địa chỉ email</h2>
    <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">Chúng tôi đã nhận được yêu cầu thay đổi địa chỉ email cho tài khoản Virtual Assistant Pro của bạn từ <strong>{{ .Email }}</strong> sang <strong>{{ .NewEmail }}</strong>.</p>
    <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">Để hoàn tất việc thay đổi, vui lòng xác nhận bằng cách nhấp vào nút bên dưới:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{{ .ConfirmationURL }}" style="background-color: #fbbf24; color: #1e3a8a; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Xác nhận thay đổi email</a>
    </div>
    <p style="color: #dc2626; font-size: 14px; line-height: 1.5; background-color: #fef2f2; padding: 15px; border-radius: 6px; border-left: 4px solid #dc2626;">⚠️ Nếu bạn không yêu cầu thay đổi email, vui lòng bỏ qua email này và liên hệ với chúng tôi ngay lập tức.</p>
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    <p style="color: #6b7280; font-size: 12px; text-align: center;">© 2024 Virtual Assistant Pro. Trung tâm đào tạo Trợ lý ảo hàng đầu Việt Nam.</p>
  </div>
</div>'
),
(
  'invite',
  'Lời mời tham gia',
  'Email mời người dùng tham gia hệ thống',
  'Lời mời tham gia - Virtual Assistant Pro',
  '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #1e3a8a; margin: 0; font-size: 24px;">Virtual Assistant Pro</h1>
      <p style="color: #64748b; margin: 5px 0 0 0;">Trung tâm đào tạo Trợ lý ảo chuyên nghiệp</p>
    </div>
    <h2 style="color: #1e3a8a; margin-bottom: 20px;">Bạn đã được mời tham gia!</h2>
    <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">Chúc mừng! Bạn đã được mời tạo tài khoản tại Virtual Assistant Pro - nền tảng đào tạo Trợ lý ảo hàng đầu Việt Nam.</p>
    <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">Đây là cơ hội tuyệt vời để bạn bắt đầu hành trình trở thành một Trợ lý ảo chuyên nghiệp với thu nhập ổn định từ 500$ - 2000$/tháng.</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{{ .ConfirmationURL }}" style="background-color: #fbbf24; color: #1e3a8a; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Chấp nhận lời mời</a>
    </div>
    <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 20px 0;">
      <h3 style="color: #1e3a8a; margin: 0 0 10px 0; font-size: 16px;">🎯 Bạn sẽ nhận được:</h3>
      <ul style="color: #374151; margin: 0; padding-left: 20px;">
        <li>Khóa học VA chuyên nghiệp 12 tuần</li>
        <li>Hướng dẫn tìm kiếm khách hàng quốc tế</li>
        <li>Hỗ trợ xây dựng portfolio ấn tượng</li>
        <li>Cộng đồng VA Việt Nam năng động</li>
      </ul>
    </div>
    <p style="color: #6b7280; font-size: 14px; line-height: 1.5;">Lời mời này có hiệu lực trong 7 ngày. Đừng bỏ lỡ cơ hội thay đổi cuộc sống của bạn!</p>
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    <p style="color: #6b7280; font-size: 12px; text-align: center;">© 2024 Virtual Assistant Pro. Trung tâm đào tạo Trợ lý ảo hàng đầu Việt Nam.</p>
  </div>
</div>',
  '["ConfirmationURL", "SiteURL"]'::jsonb,
  'Lời mời tham gia - Virtual Assistant Pro',
  '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #1e3a8a; margin: 0; font-size: 24px;">Virtual Assistant Pro</h1>
      <p style="color: #64748b; margin: 5px 0 0 0;">Trung tâm đào tạo Trợ lý ảo chuyên nghiệp</p>
    </div>
    <h2 style="color: #1e3a8a; margin-bottom: 20px;">Bạn đã được mời tham gia!</h2>
    <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">Chúc mừng! Bạn đã được mời tạo tài khoản tại Virtual Assistant Pro - nền tảng đào tạo Trợ lý ảo hàng đầu Việt Nam.</p>
    <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">Đây là cơ hội tuyệt vời để bạn bắt đầu hành trình trở thành một Trợ lý ảo chuyên nghiệp với thu nhập ổn định từ 500$ - 2000$/tháng.</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{{ .ConfirmationURL }}" style="background-color: #fbbf24; color: #1e3a8a; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Chấp nhận lời mời</a>
    </div>
    <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 20px 0;">
      <h3 style="color: #1e3a8a; margin: 0 0 10px 0; font-size: 16px;">🎯 Bạn sẽ nhận được:</h3>
      <ul style="color: #374151; margin: 0; padding-left: 20px;">
        <li>Khóa học VA chuyên nghiệp 12 tuần</li>
        <li>Hướng dẫn tìm kiếm khách hàng quốc tế</li>
        <li>Hỗ trợ xây dựng portfolio ấn tượng</li>
        <li>Cộng đồng VA Việt Nam năng động</li>
      </ul>
    </div>
    <p style="color: #6b7280; font-size: 14px; line-height: 1.5;">Lời mời này có hiệu lực trong 7 ngày. Đừng bỏ lỡ cơ hội thay đổi cuộc sống của bạn!</p>
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    <p style="color: #6b7280; font-size: 12px; text-align: center;">© 2024 Virtual Assistant Pro. Trung tâm đào tạo Trợ lý ảo hàng đầu Việt Nam.</p>
  </div>
</div>'
),
(
  'reauthentication',
  'Xác thực lại tài khoản',
  'Email chứa mã xác thực khi người dùng cần xác thực lại',
  'Xác thực lại tài khoản - Virtual Assistant Pro',
  '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #1e3a8a; margin: 0; font-size: 24px;">Virtual Assistant Pro</h1>
      <p style="color: #64748b; margin: 5px 0 0 0;">Trung tâm đào tạo Trợ lý ảo chuyên nghiệp</p>
    </div>
    <h2 style="color: #1e3a8a; margin-bottom: 20px;">Xác thực lại tài khoản</h2>
    <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">Để đảm bảo tính bảo mật cho tài khoản Virtual Assistant Pro của bạn, vui lòng nhập mã xác thực bên dưới:</p>
    <div style="text-align: center; margin: 30px 0; background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 2px dashed #cbd5e1;">
      <p style="color: #64748b; margin: 0 0 10px 0; font-size: 14px;">Mã xác thực của bạn:</p>
      <div style="font-size: 32px; font-weight: bold; color: #1e3a8a; letter-spacing: 8px; font-family: monospace;">{{ .Token }}</div>
    </div>
    <p style="color: #dc2626; font-size: 14px; line-height: 1.5; background-color: #fef2f2; padding: 15px; border-radius: 6px; border-left: 4px solid #dc2626;">⚠️ Mã này sẽ hết hạn sau 10 phút. Nếu bạn không yêu cầu xác thực, vui lòng liên hệ với chúng tôi ngay lập tức.</p>
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    <p style="color: #6b7280; font-size: 12px; text-align: center;">© 2024 Virtual Assistant Pro. Trung tâm đào tạo Trợ lý ảo hàng đầu Việt Nam.</p>
  </div>
</div>',
  '["Token"]'::jsonb,
  'Xác thực lại tài khoản - Virtual Assistant Pro',
  '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #1e3a8a; margin: 0; font-size: 24px;">Virtual Assistant Pro</h1>
      <p style="color: #64748b; margin: 5px 0 0 0;">Trung tâm đào tạo Trợ lý ảo chuyên nghiệp</p>
    </div>
    <h2 style="color: #1e3a8a; margin-bottom: 20px;">Xác thực lại tài khoản</h2>
    <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">Để đảm bảo tính bảo mật cho tài khoản Virtual Assistant Pro của bạn, vui lòng nhập mã xác thực bên dưới:</p>
    <div style="text-align: center; margin: 30px 0; background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 2px dashed #cbd5e1;">
      <p style="color: #64748b; margin: 0 0 10px 0; font-size: 14px;">Mã xác thực của bạn:</p>
      <div style="font-size: 32px; font-weight: bold; color: #1e3a8a; letter-spacing: 8px; font-family: monospace;">{{ .Token }}</div>
    </div>
    <p style="color: #dc2626; font-size: 14px; line-height: 1.5; background-color: #fef2f2; padding: 15px; border-radius: 6px; border-left: 4px solid #dc2626;">⚠️ Mã này sẽ hết hạn sau 10 phút. Nếu bạn không yêu cầu xác thực, vui lòng liên hệ với chúng tôi ngay lập tức.</p>
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    <p style="color: #6b7280; font-size: 12px; text-align: center;">© 2024 Virtual Assistant Pro. Trung tâm đào tạo Trợ lý ảo hàng đầu Việt Nam.</p>
  </div>
</div>'
);

-- Add trigger for updated_at
CREATE TRIGGER update_system_email_templates_updated_at
BEFORE UPDATE ON public.system_email_templates
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();