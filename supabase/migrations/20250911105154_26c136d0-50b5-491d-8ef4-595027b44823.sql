-- Fix any remaining functions with search path issues
-- Update handle_new_user function to have proper search_path
CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public
AS $function$
BEGIN
  INSERT INTO public.profiles (
    user_id, 
    email, 
    full_name,
    membership_tier,
    role
  )
  VALUES (
    new.id,
    new.email,
    COALESCE(
      new.raw_user_meta_data ->> 'full_name', 
      new.raw_user_meta_data ->> 'name', 
      split_part(new.email, '@', 1)
    ),
    COALESCE(
      new.raw_user_meta_data ->> 'membership_tier',
      'basic'
    ),
    COALESCE(
      new.raw_user_meta_data ->> 'role',
      'member'
    )
  );
  RETURN new;
END;
$function$;