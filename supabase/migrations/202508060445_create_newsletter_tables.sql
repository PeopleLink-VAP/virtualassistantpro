-- Newsletter Campaigns
CREATE TABLE IF NOT EXISTS public.newsletter_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  scheduled_at TIMESTAMP WITH TIME ZONE,
  sent_at TIMESTAMP WITH TIME ZONE,
  created_by UUID NULL REFERENCES public.profiles(user_id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  open_rate NUMERIC DEFAULT 0,
  click_rate NUMERIC DEFAULT 0,
  UNIQUE (title, created_at)
);

-- Email List Definition
CREATE TABLE IF NOT EXISTS public.newsletter_email_lists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  created_by UUID NULL REFERENCES public.profiles(user_id),
  filter_criteria JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Email List Members - Many-to-Many with profiles
CREATE TABLE IF NOT EXISTS public.newsletter_email_list_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  list_id UUID NOT NULL REFERENCES public.newsletter_email_lists(id) ON DELETE CASCADE,
  profile_id UUID NOT NULL REFERENCES public.profiles(user_id) ON DELETE CASCADE,
  added_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE (list_id, profile_id)
);

-- Recipients of campaigns
CREATE TABLE IF NOT EXISTS public.newsletter_recipients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID NOT NULL REFERENCES public.newsletter_campaigns(id) ON DELETE CASCADE,
  profile_id UUID NULL REFERENCES public.profiles(user_id),
  email TEXT NOT NULL,
  list_id UUID NULL REFERENCES public.newsletter_email_lists(id),
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  open_count INTEGER DEFAULT 0,
  click_count INTEGER DEFAULT 0,
  open_last TIMESTAMP WITH TIME ZONE,
  click_last TIMESTAMP WITH TIME ZONE
);

-- Interaction tracking (opens/clicks)
CREATE TABLE IF NOT EXISTS public.newsletter_interactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  recipient_id UUID NOT NULL REFERENCES public.newsletter_recipients(id) ON DELETE CASCADE,
  event TEXT NOT NULL CHECK (event IN ('open','click')),
  url TEXT NULL,
  user_agent TEXT,
  occurred_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on all newsletter tables
ALTER TABLE public.newsletter_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_email_lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_email_list_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_recipients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_interactions ENABLE ROW LEVEL SECURITY;

-- Create policies for newsletter_campaigns
CREATE POLICY "Admins can manage newsletter campaigns" 
ON public.newsletter_campaigns 
FOR ALL 
USING (public.is_admin());

-- Create policies for newsletter_email_lists
CREATE POLICY "Admins can manage email lists" 
ON public.newsletter_email_lists 
FOR ALL 
USING (public.is_admin());

-- Create policies for newsletter_email_list_members
CREATE POLICY "Admins can manage email list members" 
ON public.newsletter_email_list_members 
FOR ALL 
USING (public.is_admin());

-- Create policies for newsletter_recipients
CREATE POLICY "Admins can manage newsletter recipients" 
ON public.newsletter_recipients 
FOR ALL 
USING (public.is_admin());

-- Create policies for newsletter_interactions
CREATE POLICY "Admins can view newsletter interactions" 
ON public.newsletter_interactions 
FOR SELECT 
USING (public.is_admin());

CREATE POLICY "Anyone can record newsletter interactions" 
ON public.newsletter_interactions 
FOR INSERT 
WITH CHECK (true);

-- Add triggers for updated_at
CREATE TRIGGER update_newsletter_campaigns_updated_at
BEFORE UPDATE ON public.newsletter_campaigns
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_newsletter_email_lists_updated_at
BEFORE UPDATE ON public.newsletter_email_lists
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
