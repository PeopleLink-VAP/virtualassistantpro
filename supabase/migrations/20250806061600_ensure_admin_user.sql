-- Ensure there's at least one admin user
-- This will promote the first user to admin if no admin exists

DO $$
DECLARE
  admin_count INTEGER;
  user_to_promote UUID;
BEGIN
  -- Check if there are any admin users
  SELECT COUNT(*) INTO admin_count FROM profiles WHERE role = 'admin';
  
  -- If no admin users exist, promote the first user to admin
  IF admin_count = 0 THEN
    SELECT user_id INTO user_to_promote FROM profiles ORDER BY created_at ASC LIMIT 1;
    
    IF user_to_promote IS NOT NULL THEN
      UPDATE profiles SET role = 'admin' WHERE user_id = user_to_promote;
      RAISE NOTICE 'Promoted user % to admin role', user_to_promote;
    ELSE
      RAISE NOTICE 'No users found to promote to admin';
    END IF;
  ELSE
    RAISE NOTICE 'Admin users already exist (count: %)', admin_count;
  END IF;
END $$;
