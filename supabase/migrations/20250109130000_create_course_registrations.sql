-- Create course registrations table
CREATE TABLE IF NOT EXISTS public.course_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  experience TEXT,
  motivation TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'enrolled', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  contacted_at TIMESTAMP WITH TIME ZONE,
  notes TEXT
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_course_registrations_email ON public.course_registrations(email);
CREATE INDEX IF NOT EXISTS idx_course_registrations_status ON public.course_registrations(status);
CREATE INDEX IF NOT EXISTS idx_course_registrations_created_at ON public.course_registrations(created_at);

-- Enable RLS (Row Level Security)
ALTER TABLE public.course_registrations ENABLE ROW LEVEL SECURITY;

-- RLS Policies for course_registrations
CREATE POLICY "Admin can manage course registrations" ON public.course_registrations
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() 
      AND is_admin = true
    )
  );

-- Allow public to insert registrations (for the registration form)
CREATE POLICY "Anyone can register for courses" ON public.course_registrations
  FOR INSERT WITH CHECK (true);

-- Create function to handle course registration
CREATE OR REPLACE FUNCTION public.handle_course_registration(
  p_full_name TEXT,
  p_email TEXT,
  p_phone TEXT,
  p_experience TEXT DEFAULT NULL,
  p_motivation TEXT DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_registration_id UUID;
  v_template_id UUID;
  v_experience_display TEXT;
  v_result JSON;
BEGIN
  -- Insert the registration
  INSERT INTO public.course_registrations (
    full_name, email, phone, experience, motivation
  ) VALUES (
    p_full_name, p_email, p_phone, p_experience, p_motivation
  ) RETURNING id INTO v_registration_id;
  
  -- Map experience to display text
  v_experience_display := CASE 
    WHEN p_experience = 'beginner' THEN 'Mới bắt đầu (0-1 năm)'
    WHEN p_experience = 'intermediate' THEN 'Trung cấp (1-3 năm)'
    WHEN p_experience = 'advanced' THEN 'Có kinh nghiệm (3+ năm)'
    WHEN p_experience = 'expert' THEN 'Chuyên gia (5+ năm)'
    ELSE 'Chưa có kinh nghiệm'
  END;
  
  -- Get the registration confirmation template
  SELECT id INTO v_template_id 
  FROM public.email_templates 
  WHERE name = 'Course Registration Confirmation' 
  AND is_active = true
  LIMIT 1;
  
  -- Log template usage (if template exists)
  IF v_template_id IS NOT NULL THEN
    INSERT INTO public.email_template_usage (
      template_id, 
      recipient_email, 
      variables_used
    ) VALUES (
      v_template_id,
      p_email,
      jsonb_build_object(
        'full_name', p_full_name,
        'email', p_email,
        'phone', p_phone,
        'experience_display', v_experience_display,
        'course_details_url', 'https://virtualassistantpro.com/vap-course',
        'facebook_group_url', 'https://www.facebook.com/groups/virtualassistantpro',
        'support_email', 'support@virtualassistantpro.com',
        'website_url', 'https://virtualassistantpro.com'
      )
    );
  END IF;
  
  -- Return success response with template info
  v_result := jsonb_build_object(
    'success', true,
    'registration_id', v_registration_id,
    'template_id', v_template_id,
    'message', 'Registration successful',
    'email_variables', jsonb_build_object(
      'full_name', p_full_name,
      'email', p_email,
      'phone', p_phone,
      'experience_display', v_experience_display,
      'course_details_url', 'https://virtualassistantpro.com/vap-course',
      'facebook_group_url', 'https://www.facebook.com/groups/virtualassistantpro',
      'support_email', 'support@virtualassistantpro.com',
      'website_url', 'https://virtualassistantpro.com'
    )
  );
  
  RETURN v_result;
  
EXCEPTION
  WHEN OTHERS THEN
    RETURN jsonb_build_object(
      'success', false,
      'error', SQLERRM,
      'message', 'Registration failed'
    );
END;
$$;

-- Grant execute permission to authenticated and anonymous users
GRANT EXECUTE ON FUNCTION public.handle_course_registration TO authenticated, anon;