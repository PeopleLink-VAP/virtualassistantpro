-- Fix circular dependency in RLS policies
-- The issue: is_admin() function queries profiles table, but profiles table RLS calls is_admin()
-- Solution: Use SECURITY DEFINER to bypass RLS when checking admin status

-- First drop all policies that depend on the is_admin function
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can insert profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can manage membership tiers" ON public.membership_tiers;

-- Drop blog_posts policies if they exist
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'blog_posts' AND table_schema = 'public') THEN
    EXECUTE 'DROP POLICY IF EXISTS "Admins can manage blog posts" ON public.blog_posts';
  END IF;
END $$;

-- Drop newsletter policies if they exist
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'newsletter_campaigns' AND table_schema = 'public') THEN
    EXECUTE 'DROP POLICY IF EXISTS "Admins can manage newsletter campaigns" ON public.newsletter_campaigns';
    EXECUTE 'DROP POLICY IF EXISTS "Admins can manage email lists" ON public.newsletter_email_lists';
    EXECUTE 'DROP POLICY IF EXISTS "Admins can manage email list members" ON public.newsletter_email_list_members';
    EXECUTE 'DROP POLICY IF EXISTS "Admins can manage newsletter recipients" ON public.newsletter_recipients';
    EXECUTE 'DROP POLICY IF EXISTS "Admins can view newsletter interactions" ON public.newsletter_interactions';
  END IF;
END $$;

-- Drop virtual assistants policies if they exist
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'virtual_assistants' AND table_schema = 'public') THEN
    EXECUTE 'DROP POLICY IF EXISTS "Admins can manage virtual assistants" ON public.virtual_assistants';
  END IF;
END $$;

-- Now we can drop the function
DROP FUNCTION IF EXISTS public.is_admin();

-- Create new admin check function that bypasses RLS
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Use SECURITY DEFINER to bypass RLS and check admin role directly
  RETURN EXISTS (
    SELECT 1 
    FROM profiles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  );
END;
$$;

-- Grant execute permissions
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin() TO anon;

-- Recreate the policies (they should now work without circular dependency)
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
CREATE POLICY "Admins can view all profiles" 
ON public.profiles 
FOR SELECT 
USING (public.is_admin());

DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;
CREATE POLICY "Admins can update all profiles" 
ON public.profiles 
FOR UPDATE 
USING (public.is_admin());

-- Also add INSERT policy for admins to create users
DROP POLICY IF EXISTS "Admins can insert profiles" ON public.profiles;
CREATE POLICY "Admins can insert profiles" 
ON public.profiles 
FOR INSERT 
WITH CHECK (public.is_admin());

-- Ensure the membership_tiers policies also work
DROP POLICY IF EXISTS "Admins can manage membership tiers" ON public.membership_tiers;
CREATE POLICY "Admins can manage membership tiers" 
ON public.membership_tiers 
FOR ALL 
USING (public.is_admin());

-- Update blog_posts policies if the table exists
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'blog_posts' AND table_schema = 'public') THEN
    EXECUTE 'DROP POLICY IF EXISTS "Admins can manage blog posts" ON public.blog_posts';
    EXECUTE 'CREATE POLICY "Admins can manage blog posts" ON public.blog_posts FOR ALL USING (public.is_admin())';
  END IF;
END $$;

-- Recreate newsletter policies if tables exist
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'newsletter_campaigns' AND table_schema = 'public') THEN
    EXECUTE 'CREATE POLICY "Admins can manage newsletter campaigns" ON public.newsletter_campaigns FOR ALL USING (public.is_admin())';
    EXECUTE 'CREATE POLICY "Admins can manage email lists" ON public.newsletter_email_lists FOR ALL USING (public.is_admin())';
    EXECUTE 'CREATE POLICY "Admins can manage email list members" ON public.newsletter_email_list_members FOR ALL USING (public.is_admin())';
    EXECUTE 'CREATE POLICY "Admins can manage newsletter recipients" ON public.newsletter_recipients FOR ALL USING (public.is_admin())';
    EXECUTE 'CREATE POLICY "Admins can view newsletter interactions" ON public.newsletter_interactions FOR SELECT USING (public.is_admin())';
  END IF;
END $$;

-- Recreate virtual assistants policies if table exists
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'virtual_assistants' AND table_schema = 'public') THEN
    EXECUTE 'CREATE POLICY "Admins can manage virtual assistants" ON public.virtual_assistants FOR ALL USING (public.is_admin())';
  END IF;
END $$;
