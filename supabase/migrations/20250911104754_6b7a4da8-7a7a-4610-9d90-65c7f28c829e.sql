-- ================================================
-- COURSE REGISTRATIONS TABLE
-- ================================================
CREATE TABLE public.course_registrations (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    experience TEXT,
    motivation TEXT,
    status TEXT DEFAULT 'pending'::text,
    notes TEXT,
    contacted_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.course_registrations ENABLE ROW LEVEL SECURITY;

-- RLS Policies for course registrations
CREATE POLICY "Admins can manage all course registrations" 
ON public.course_registrations 
FOR ALL 
USING (is_admin());

-- ================================================
-- EMAIL TEMPLATES TABLE  
-- ================================================
CREATE TABLE public.email_templates (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    subject TEXT NOT NULL,
    html_content TEXT NOT NULL,
    template_type TEXT DEFAULT 'custom'::text,
    is_active BOOLEAN DEFAULT true,
    variables TEXT[] DEFAULT '{}',
    created_by UUID REFERENCES public.profiles(user_id),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.email_templates ENABLE ROW LEVEL SECURITY;

-- RLS Policies for email templates
CREATE POLICY "Admins can manage email templates" 
ON public.email_templates 
FOR ALL 
USING (is_admin());

-- ================================================
-- SYSTEM EMAIL TEMPLATES TABLE (for Supabase auth emails)
-- ================================================
CREATE TABLE public.system_email_templates (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    template_key TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    subject TEXT NOT NULL,
    html_content TEXT NOT NULL,
    template_type TEXT DEFAULT 'auth'::text,
    is_active BOOLEAN DEFAULT true,
    is_system BOOLEAN DEFAULT true,
    variables TEXT[] DEFAULT '{}',
    default_subject TEXT NOT NULL,
    default_html_content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.system_email_templates ENABLE ROW LEVEL SECURITY;

-- RLS Policies for system email templates
CREATE POLICY "Admins can manage system email templates" 
ON public.system_email_templates 
FOR ALL 
USING (is_admin());

-- ================================================
-- NEWSLETTER SUBSCRIPTION LINKING
-- ================================================
-- Add subscription tracking to profiles
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS newsletter_subscribed BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS subscription_source TEXT DEFAULT 'direct',
ADD COLUMN IF NOT EXISTS subscribed_at TIMESTAMP WITH TIME ZONE;

-- ================================================
-- COURSE REGISTRATION FUNCTION
-- ================================================
CREATE OR REPLACE FUNCTION public.handle_course_registration(
    p_email TEXT,
    p_full_name TEXT,
    p_phone TEXT,
    p_experience TEXT DEFAULT NULL,
    p_motivation TEXT DEFAULT NULL
) RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_registration_id UUID;
    v_profile_exists BOOLEAN;
    v_user_id UUID;
    v_password TEXT;
    v_result JSON;
BEGIN
    -- Check if user already exists
    SELECT EXISTS(SELECT 1 FROM profiles WHERE email = p_email) INTO v_profile_exists;
    
    -- Create course registration record
    INSERT INTO course_registrations (
        email, full_name, phone, experience, motivation, status
    ) VALUES (
        p_email, p_full_name, p_phone, p_experience, p_motivation, 'pending'
    ) RETURNING id INTO v_registration_id;
    
    -- If user doesn't exist, we'll track they need account creation
    IF NOT v_profile_exists THEN
        -- Update registration to indicate account creation needed
        UPDATE course_registrations 
        SET notes = COALESCE(notes || '; ', '') || 'Account creation needed'
        WHERE id = v_registration_id;
    END IF;
    
    -- Return registration details
    v_result := json_build_object(
        'registration_id', v_registration_id,
        'email', p_email,
        'full_name', p_full_name,
        'user_exists', v_profile_exists,
        'status', 'success'
    );
    
    RETURN v_result;
EXCEPTION
    WHEN OTHERS THEN
        RETURN json_build_object(
            'status', 'error',
            'error', SQLERRM
        );
END;
$$;

-- ================================================
-- UPDATE TRIGGERS
-- ================================================
-- Add update triggers for timestamps
CREATE TRIGGER update_course_registrations_updated_at
    BEFORE UPDATE ON public.course_registrations
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_email_templates_updated_at
    BEFORE UPDATE ON public.email_templates
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_system_email_templates_updated_at
    BEFORE UPDATE ON public.system_email_templates
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- ================================================
-- SEED DEFAULT SYSTEM EMAIL TEMPLATES
-- ================================================
INSERT INTO public.system_email_templates (
    template_key, name, description, subject, html_content, 
    default_subject, default_html_content, variables
) VALUES 
(
    'confirmation',
    'Email Confirmation',
    'Email sent when user needs to confirm their email address',
    'Confirm your email address',
    '<h2>Confirm your signup</h2><p>Follow this link to confirm your user:</p><p><a href="{{ .ConfirmationURL }}">Confirm your email</a></p>',
    'Confirm your email address',
    '<h2>Confirm your signup</h2><p>Follow this link to confirm your user:</p><p><a href="{{ .ConfirmationURL }}">Confirm your email</a></p>',
    ARRAY['ConfirmationURL', 'Email', 'Name']
),
(
    'invite',
    'User Invitation',
    'Email sent when inviting a new user',
    'You have been invited',
    '<h2>You have been invited</h2><p>You have been invited to create a user on {{ .SiteURL }}.</p><p><a href="{{ .ConfirmationURL }}">Accept the invite</a></p>',
    'You have been invited',
    '<h2>You have been invited</h2><p>You have been invited to create a user on {{ .SiteURL }}.</p><p><a href="{{ .ConfirmationURL }}">Accept the invite</a></p>',
    ARRAY['ConfirmationURL', 'SiteURL', 'Email', 'Name']
),
(
    'magic_link',
    'Magic Link Login',
    'Email sent for passwordless login via magic link',
    'Your magic link',
    '<h2>Magic Link</h2><p>Follow this link to login:</p><p><a href="{{ .ConfirmationURL }}">Log In</a></p>',
    'Your magic link',
    '<h2>Magic Link</h2><p>Follow this link to login:</p><p><a href="{{ .ConfirmationURL }}">Log In</a></p>',
    ARRAY['ConfirmationURL', 'Email', 'Name']
),
(
    'recovery',
    'Password Recovery',
    'Email sent when user requests password reset',
    'Reset your password',
    '<h2>Reset Password</h2><p>Follow this link to reset the password for your user:</p><p><a href="{{ .ConfirmationURL }}">Reset Password</a></p>',
    'Reset your password',
    '<h2>Reset Password</h2><p>Follow this link to reset the password for your user:</p><p><a href="{{ .ConfirmationURL }}">Reset Password</a></p>',
    ARRAY['ConfirmationURL', 'Email', 'Name']
),
(
    'email_change',
    'Email Address Change',
    'Email sent when user wants to change their email address',
    'Confirm email address change',
    '<h2>Confirm Change of Email</h2><p>Follow this link to confirm the update of your email from {{ .Email }} to {{ .NewEmail }}:</p><p><a href="{{ .ConfirmationURL }}">Change Email</a></p>',
    'Confirm email address change',
    '<h2>Confirm Change of Email</h2><p>Follow this link to confirm the update of your email from {{ .Email }} to {{ .NewEmail }}:</p><p><a href="{{ .ConfirmationURL }}">Change Email</a></p>',
    ARRAY['ConfirmationURL', 'Email', 'NewEmail', 'Name']
);