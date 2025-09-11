-- Email Templates Table
CREATE TABLE IF NOT EXISTS public.email_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  subject TEXT NOT NULL,
  html_content TEXT NOT NULL,
  text_content TEXT,
  template_type TEXT NOT NULL DEFAULT 'general', -- 'newsletter_signup', 'welcome', 'general', 'notification'
  is_active BOOLEAN DEFAULT true,
  variables JSONB DEFAULT '[]'::jsonb, -- Array of variable names used in template
  created_by UUID NULL REFERENCES public.profiles(user_id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Email Template Variables Table (for dynamic content)
CREATE TABLE IF NOT EXISTS public.email_template_variables (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id UUID NOT NULL REFERENCES public.email_templates(id) ON DELETE CASCADE,
  variable_name TEXT NOT NULL,
  variable_type TEXT NOT NULL DEFAULT 'text', -- 'text', 'url', 'date', 'number'
  default_value TEXT,
  description TEXT,
  is_required BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE (template_id, variable_name)
);

-- Email Template Usage Log (track when templates are used)
CREATE TABLE IF NOT EXISTS public.email_template_usage (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id UUID NOT NULL REFERENCES public.email_templates(id) ON DELETE CASCADE,
  used_for TEXT, -- 'newsletter_signup', 'campaign', 'notification'
  recipient_email TEXT,
  variables_used JSONB,
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_email_templates_type ON public.email_templates(template_type);
CREATE INDEX IF NOT EXISTS idx_email_templates_active ON public.email_templates(is_active);
CREATE INDEX IF NOT EXISTS idx_email_template_variables_template ON public.email_template_variables(template_id);
CREATE INDEX IF NOT EXISTS idx_email_template_usage_template ON public.email_template_usage(template_id);
CREATE INDEX IF NOT EXISTS idx_email_template_usage_sent_at ON public.email_template_usage(sent_at);

-- Enable RLS (Row Level Security)
ALTER TABLE public.email_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_template_variables ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_template_usage ENABLE ROW LEVEL SECURITY;

-- RLS Policies for email_templates
CREATE POLICY "Admin can manage email templates" ON public.email_templates
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
    )
  );

-- RLS Policies for email_template_variables
CREATE POLICY "Admin can manage template variables" ON public.email_template_variables
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
    )
  );

-- RLS Policies for email_template_usage
CREATE POLICY "Admin can view template usage" ON public.email_template_usage
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
    )
  );

CREATE POLICY "System can log template usage" ON public.email_template_usage
  FOR INSERT WITH CHECK (true);

-- Insert default email templates
INSERT INTO public.email_templates (name, description, subject, html_content, text_content, template_type, variables) VALUES
(
  'Newsletter Signup Welcome',
  'Welcome email sent to new newsletter subscribers',
  'Welcome to Virtual Assistant Pro Newsletter!',
  '<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Welcome to Virtual Assistant Pro</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; margin-bottom: 30px;">
    <img src="https://virtualassistantpro.com/logos/logo_brown.svg" alt="Virtual Assistant Pro" style="max-width: 200px;">
  </div>
  
  <h1 style="color: #8B4513; text-align: center;">Welcome to Our Newsletter!</h1>
  
  <p>Hi {{subscriber_name}},</p>
  
  <p>Thank you for subscribing to the Virtual Assistant Pro newsletter! We''re excited to have you join our community of aspiring and professional virtual assistants.</p>
  
  <p>Here''s what you can expect from us:</p>
  <ul>
    <li>Weekly tips and strategies for virtual assistant success</li>
    <li>Industry insights and trends</li>
    <li>Exclusive training opportunities</li>
    <li>Job opportunities and career guidance</li>
  </ul>
  
  <p>As a welcome gift, here are some free resources to get you started:</p>
  <p style="text-align: center;">
    <a href="{{free_resources_url}}" style="background-color: #8B4513; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">Access Free Resources</a>
  </p>
  
  <p>If you have any questions, feel free to reach out to us at <a href="mailto:{{support_email}}">{{support_email}}</a>.</p>
  
  <p>Best regards,<br>The Virtual Assistant Pro Team</p>
  
  <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
  <p style="font-size: 12px; color: #666; text-align: center;">
    You received this email because you subscribed to our newsletter at {{website_url}}.<br>
    <a href="{{unsubscribe_url}}">Unsubscribe</a> | <a href="{{website_url}}">Visit our website</a>
  </p>
</body>
</html>',
  'Welcome to Virtual Assistant Pro Newsletter!

Hi {{subscriber_name}},

Thank you for subscribing to the Virtual Assistant Pro newsletter! We''re excited to have you join our community of aspiring and professional virtual assistants.

Here''s what you can expect from us:
- Weekly tips and strategies for virtual assistant success
- Industry insights and trends
- Exclusive training opportunities
- Job opportunities and career guidance

As a welcome gift, access our free resources at: {{free_resources_url}}

If you have any questions, feel free to reach out to us at {{support_email}}.

Best regards,
The Virtual Assistant Pro Team

---
You received this email because you subscribed to our newsletter at {{website_url}}.
Unsubscribe: {{unsubscribe_url}} | Visit our website: {{website_url}}',
  'newsletter_signup',
  '["subscriber_name", "free_resources_url", "support_email", "website_url", "unsubscribe_url"]'::jsonb
),
(
  'General Newsletter',
  'Template for regular newsletter campaigns',
  '{{newsletter_subject}}',
  '<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>{{newsletter_subject}}</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; margin-bottom: 30px;">
    <img src="https://virtualassistantpro.com/logos/logo_brown.svg" alt="Virtual Assistant Pro" style="max-width: 200px;">
  </div>
  
  <h1 style="color: #8B4513; text-align: center;">{{newsletter_subject}}</h1>
  
  <p>Hi {{subscriber_name}},</p>
  
  <div>
    {{newsletter_content}}
  </div>
  
  <p>Best regards,<br>The Virtual Assistant Pro Team</p>
  
  <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
  <p style="font-size: 12px; color: #666; text-align: center;">
    You received this email because you subscribed to our newsletter at {{website_url}}.<br>
    <a href="{{unsubscribe_url}}">Unsubscribe</a> | <a href="{{website_url}}">Visit our website</a>
  </p>
</body>
</html>',
  '{{newsletter_subject}}

Hi {{subscriber_name}},

{{newsletter_content}}

Best regards,
The Virtual Assistant Pro Team

---
You received this email because you subscribed to our newsletter at {{website_url}}.
Unsubscribe: {{unsubscribe_url}} | Visit our website: {{website_url}}',
  'general',
  '["newsletter_subject", "subscriber_name", "newsletter_content", "website_url", "unsubscribe_url"]'::jsonb
);

-- Insert default template variables
INSERT INTO public.email_template_variables (template_id, variable_name, variable_type, default_value, description, is_required)
SELECT 
  et.id,
  var.variable_name,
  var.variable_type,
  var.default_value,
  var.description,
  var.is_required
FROM public.email_templates et
CROSS JOIN (
  VALUES 
    ('subscriber_name', 'text', 'Valued Subscriber', 'Name of the newsletter subscriber', true),
    ('free_resources_url', 'url', 'https://virtualassistantpro.com/free-resources', 'URL to free resources page', true),
    ('support_email', 'text', 'support@virtualassistantpro.com', 'Support email address', true),
    ('website_url', 'url', 'https://virtualassistantpro.com', 'Main website URL', true),
    ('unsubscribe_url', 'url', 'https://virtualassistantpro.com/unsubscribe', 'Unsubscribe URL', true)
) AS var(variable_name, variable_type, default_value, description, is_required)
WHERE et.name = 'Newsletter Signup Welcome'

UNION ALL

SELECT 
  et.id,
  var.variable_name,
  var.variable_type,
  var.default_value,
  var.description,
  var.is_required
FROM public.email_templates et
CROSS JOIN (
  VALUES 
    ('newsletter_subject', 'text', 'Virtual Assistant Pro Newsletter', 'Subject line for the newsletter', true),
    ('subscriber_name', 'text', 'Valued Subscriber', 'Name of the newsletter subscriber', true),
    ('newsletter_content', 'text', 'Newsletter content goes here...', 'Main content of the newsletter', true),
    ('website_url', 'url', 'https://virtualassistantpro.com', 'Main website URL', true),
    ('unsubscribe_url', 'url', 'https://virtualassistantpro.com/unsubscribe', 'Unsubscribe URL', true)
) AS var(variable_name, variable_type, default_value, description, is_required)
WHERE et.name = 'General Newsletter';