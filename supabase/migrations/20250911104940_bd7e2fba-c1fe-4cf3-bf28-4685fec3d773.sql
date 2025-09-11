-- Fix function search path security issues
-- Update existing functions to have proper search_path

-- Fix create_talent_activity function
CREATE OR REPLACE FUNCTION public.create_talent_activity(p_talent_id uuid, p_activity_type text, p_description text, p_metadata jsonb DEFAULT '{}'::jsonb)
 RETURNS uuid
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public
AS $function$
DECLARE
  activity_id UUID;
BEGIN
  INSERT INTO public.talent_activities (
    talent_id,
    activity_type,
    description,
    metadata,
    created_by
  ) VALUES (
    p_talent_id,
    p_activity_type,
    p_description,
    p_metadata,
    auth.uid()
  ) RETURNING id INTO activity_id;
  
  RETURN activity_id;
END;
$function$;

-- Fix bootstrap_admin function  
CREATE OR REPLACE FUNCTION public.bootstrap_admin()
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public
AS $function$
DECLARE
  admin_exists boolean;
BEGIN
  SELECT EXISTS (SELECT 1 FROM public.profiles WHERE role = 'admin') INTO admin_exists;

  IF admin_exists THEN
    RETURN false; -- No action: an admin already exists
  END IF;

  -- Ensure the current authenticated user has a profile and promote to admin
  UPDATE public.profiles
  SET role = 'admin', membership_tier = COALESCE(membership_tier, 'pro'), updated_at = now()
  WHERE user_id = auth.uid();

  IF NOT FOUND THEN
    INSERT INTO public.profiles (user_id, email, full_name, role, membership_tier)
    VALUES (
      auth.uid(),
      (SELECT email FROM auth.users WHERE id = auth.uid()),
      COALESCE((SELECT raw_user_meta_data->>'full_name' FROM auth.users WHERE id = auth.uid()),
               (SELECT raw_user_meta_data->>'name' FROM auth.users WHERE id = auth.uid()),
               split_part((SELECT email FROM auth.users WHERE id = auth.uid()), '@', 1)),
      'admin',
      'pro'
    );
  END IF;

  RETURN true;
END;
$function$;