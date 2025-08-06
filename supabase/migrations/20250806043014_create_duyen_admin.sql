-- Create admin user account for duyen@gmail.com
-- This migration will create the admin user with specified credentials

DO $$
DECLARE
    user_uid UUID;
    existing_user_id UUID;
BEGIN
    -- Check if user already exists
    SELECT id INTO existing_user_id 
    FROM auth.users 
    WHERE email = 'duyen@gmail.com';
    
    IF existing_user_id IS NOT NULL THEN
        -- User exists, update their role to admin
        UPDATE public.profiles 
        SET role = 'admin', membership_tier = 'vip'
        WHERE user_id = existing_user_id;
        
        RAISE NOTICE 'Updated existing user DP to admin role';
    ELSE
        -- Create new user in auth.users
        user_uid := gen_random_uuid();
        
        INSERT INTO auth.users (
            id, 
            instance_id, 
            aud, 
            role, 
            email, 
            encrypted_password, 
            email_confirmed_at, 
            recovery_sent_at, 
            last_sign_in_at, 
            raw_app_meta_data, 
            raw_user_meta_data, 
            created_at, 
            updated_at, 
            confirmation_token, 
            email_change, 
            email_change_token_new, 
            recovery_token
        ) VALUES (
            user_uid,
            '00000000-0000-0000-0000-000000000000',
            'authenticated',
            'authenticated',
            'duyen@gmail.com',
            crypt('normaluser', gen_salt('bf')),
            NOW(),
            NOW(),
            NOW(),
            '{"provider": "email", "providers": ["email"]}',
            '{"full_name": "Duyen Pham"}',
            NOW(),
            NOW(),
            '',
            '',
            '',
            ''
        );

        -- Create profile with admin role (the trigger should handle this, but let's ensure it)
        INSERT INTO public.profiles (
            user_id,
            email,
            full_name,
            role,
            membership_tier
        ) VALUES (
            user_uid,
            'duyen@gmail.com',
            'Duyen Pham',
            'admin',
            'vip'
        ) ON CONFLICT (user_id) DO UPDATE SET
            role = 'admin',
            membership_tier = 'vip',
            full_name = 'Duyen Pham';
        
        RAISE NOTICE 'Created new admin user duyen@gmail.com with default password';
    END IF;
END $$;
