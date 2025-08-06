-- Create virtual assistants table for vetted VA members
CREATE TABLE public.virtual_assistants (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  profile_id UUID REFERENCES public.profiles(user_id) ON DELETE CASCADE NOT NULL,
  
  -- Basic Information
  va_status TEXT DEFAULT 'pending' CHECK (va_status IN ('pending', 'approved', 'rejected', 'suspended')),
  verification_date TIMESTAMP WITH TIME ZONE,
  verified_by UUID REFERENCES public.profiles(user_id),
  
  -- Professional Information
  experience_years INTEGER DEFAULT 0,
  hourly_rate DECIMAL(10,2),
  currency TEXT DEFAULT 'USD',
  availability_hours INTEGER DEFAULT 40, -- hours per week
  timezone TEXT,
  
  -- Documents
  cv_url TEXT,
  portfolio_url TEXT,
  certifications TEXT[],
  
  -- Visual Assets
  avatar_url TEXT,
  cover_image_url TEXT,
  
  -- Tagging and Categorization
  specializations TEXT[], -- e.g., ['Data Entry', 'Customer Support', 'Content Writing']
  languages TEXT[], -- e.g., ['English', 'Vietnamese', 'Spanish']
  tools_proficiency TEXT[], -- e.g., ['MS Office', 'Salesforce', 'Photoshop']
  
  -- Performance Metrics
  success_rate DECIMAL(5,2) DEFAULT 0, -- percentage
  completed_projects INTEGER DEFAULT 0,
  client_rating DECIMAL(3,2) DEFAULT 0, -- out of 5
  response_time_hours INTEGER DEFAULT 24,
  
  -- Administrative fields
  admin_notes TEXT,
  tags TEXT[], -- admin-managed tags for quick filtering
  featured BOOLEAN DEFAULT FALSE,
  
  -- Contact preferences
  preferred_contact_method TEXT DEFAULT 'email' CHECK (preferred_contact_method IN ('email', 'phone', 'whatsapp', 'telegram')),
  phone_number TEXT,
  whatsapp_number TEXT,
  telegram_handle TEXT,
  linkedin_profile TEXT,
  
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.virtual_assistants ENABLE ROW LEVEL SECURITY;

-- Create policies for virtual_assistants
CREATE POLICY "Admins can manage virtual assistants" 
ON public.virtual_assistants 
FOR ALL 
USING (public.is_admin());

-- Allow approved VAs to view their own record
CREATE POLICY "VAs can view their own record" 
ON public.virtual_assistants 
FOR SELECT 
USING (
  auth.uid() = profile_id AND va_status = 'approved'
);

-- Allow approved VAs to update their own professional info (simplified policy)
-- Note: For more granular control, we can implement this via stored functions
CREATE POLICY "VAs can update their own professional info" 
ON public.virtual_assistants 
FOR UPDATE 
USING (auth.uid() = profile_id AND va_status = 'approved');

-- Allow clients/public to view approved VAs (for future client portal)
CREATE POLICY "Public can view approved virtual assistants" 
ON public.virtual_assistants 
FOR SELECT 
USING (va_status = 'approved');

-- Add updated_at trigger
CREATE TRIGGER update_virtual_assistants_updated_at
BEFORE UPDATE ON public.virtual_assistants
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for performance
CREATE INDEX idx_virtual_assistants_profile_id ON public.virtual_assistants(profile_id);
CREATE INDEX idx_virtual_assistants_status ON public.virtual_assistants(va_status);
CREATE INDEX idx_virtual_assistants_specializations ON public.virtual_assistants USING GIN(specializations);
CREATE INDEX idx_virtual_assistants_tags ON public.virtual_assistants USING GIN(tags);
CREATE INDEX idx_virtual_assistants_featured ON public.virtual_assistants(featured);
CREATE INDEX idx_virtual_assistants_client_rating ON public.virtual_assistants(client_rating DESC);

-- Add country_of_origin to profiles table if not exists
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='profiles' AND column_name='country_of_origin') THEN
        ALTER TABLE public.profiles ADD COLUMN country_of_origin TEXT;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='profiles' AND column_name='avatar_url') THEN
        ALTER TABLE public.profiles ADD COLUMN avatar_url TEXT;
    END IF;
END $$;
