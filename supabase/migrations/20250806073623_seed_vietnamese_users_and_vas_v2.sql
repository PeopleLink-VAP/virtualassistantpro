-- This migration creates users in auth.users, profiles, and virtual_assistants tables

DO $$
DECLARE
    admin_user_id UUID;
    user_uuid UUID;
    i INT;
    user_email TEXT;
    full_name_var TEXT;
    bio_text TEXT;
    skills_array TEXT[];
    specializations_array TEXT[];
    languages_array TEXT[];
    tools_array TEXT[];
    experience_years_val INT;
    hourly_rate_val NUMERIC;
    success_rate_val NUMERIC;
    completed_projects_val INT;
    client_rating_val NUMERIC;
    response_time_hours_val INT;
    featured_val BOOLEAN;
    preferred_contact_method_val TEXT;
    phone_number_val TEXT;
    whatsapp_number_val TEXT;
    linkedin_profile_val TEXT;
    admin_notes_val TEXT;
BEGIN
    -- Get the admin user ID for verification
    SELECT user_id INTO admin_user_id 
    FROM public.profiles 
    WHERE role = 'admin' 
    LIMIT 1;
    
    -- If no admin found, use a default UUID (this shouldn't happen in production)
    IF admin_user_id IS NULL THEN
        admin_user_id := gen_random_uuid();
    END IF;

    FOR i IN 1..50 LOOP
        user_uuid := gen_random_uuid();
        user_email := 'vietnamese.va.' || i || '@example.com';
        full_name_var := 'VA Nguyễn Thị ' || i;

        -- Randomize VA details
        experience_years_val := floor(random() * 7) + 1; -- 1 to 7 years
        hourly_rate_val := (floor(random() * 20) + 15) + (floor(random() * 100) / 100.0); -- 15.00 to 34.99
        success_rate_val := (floor(random() * 1000) / 10.0) + 90.0; -- 90.0 to 99.9
        IF success_rate_val > 99.9 THEN success_rate_val := 99.9; END IF; -- Cap at 99.9
        completed_projects_val := floor(random() * 50) + 10; -- 10 to 59 projects
        client_rating_val := (floor(random() * 50) / 10.0) + 4.0; -- 4.0 to 4.9
        IF client_rating_val > 4.9 THEN client_rating_val := 4.9; END IF; -- Cap at 4.9
        response_time_hours_val := floor(random() * 8) + 1; -- 1 to 8 hours
        featured_val := (random() < 0.3); -- 30% chance of being featured

        -- Example dynamic content for bio, skills, etc.
        bio_text := 'Chuyên gia hỗ trợ ảo người Việt với ' || experience_years_val || ' năm kinh nghiệm. Cung cấp dịch vụ chất lượng cao cho khách hàng toàn cầu.';
        skills_array := ARRAY['Administrative Support', 'Data Entry', 'Customer Service', 'Social Media Management', 'Content Creation', 'Project Coordination'];
        specializations_array := ARRAY['General VA', 'Marketing VA', 'Admin VA', 'E-commerce VA', 'Tech Support VA'];
        languages_array := ARRAY['Vietnamese', 'English (Fluent)', 'Japanese (Basic)', 'Korean (Basic)', 'Chinese (Basic)'];
        tools_array := ARRAY['Google Workspace', 'Microsoft Office', 'Slack', 'Zoom', 'Trello', 'Asana', 'Canva', 'HubSpot'];
        preferred_contact_method_val := CASE floor(random() * 3) WHEN 0 THEN 'email' WHEN 1 THEN 'whatsapp' ELSE 'telegram' END;
        phone_number_val := '+84-9' || lpad(floor(random() * 1000000000)::TEXT, 9, '0');
        whatsapp_number_val := phone_number_val;
        linkedin_profile_val := 'https://linkedin.com/in/vietnamese-va-' || i;
        admin_notes_val := 'Dynamically generated Vietnamese VA profile ' || i || '.';

        IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = user_email) THEN
            -- Insert into auth.users
            INSERT INTO auth.users (
                id, instance_id, aud, role, email, encrypted_password,
                email_confirmed_at, recovery_sent_at, last_sign_in_at,
                raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
                confirmation_token, email_change, email_change_token_new, recovery_token
            ) VALUES (
                user_uuid, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
                user_email, crypt('password123', gen_salt('bf')),
                NOW(), NOW(), NOW(),
                jsonb_build_object('provider', 'email', 'providers', jsonb_build_array('email')),
                jsonb_build_object('full_name', full_name_var),
                NOW(), NOW(), '', '', '', ''
            );

            -- Update the auto-created profile with detailed information
            UPDATE public.profiles SET
                full_name = full_name_var,
                role = 'member',
                membership_tier = 'premium',
                bio = bio_text,
                skills = skills_array,
                country_of_origin = 'Vietnam',
                avatar_url = 'https://ui-avatars.com/api/?name=' || replace(full_name_var, ' ', '+') || '&size=200&background=random'
            WHERE user_id = user_uuid;

            -- Insert into virtual_assistants
            INSERT INTO public.virtual_assistants (
                profile_id, va_status, verification_date, verified_by, experience_years, hourly_rate,
                currency, availability_hours, timezone, avatar_url, specializations, languages,
                tools_proficiency, success_rate, completed_projects, client_rating, response_time_hours,
                featured, preferred_contact_method, phone_number, whatsapp_number, linkedin_profile, admin_notes
            ) VALUES (
                user_uuid, 'approved', NOW() - (floor(random() * 60) + 1)::INT * INTERVAL '1 day', admin_user_id, experience_years_val, hourly_rate_val,
                'USD', floor(random() * 20) + 20, 'Asia/Ho_Chi_Minh',
                'https://ui-avatars.com/api/?name=' || replace(full_name_var, ' ', '+') || '&size=400&background=random',
                specializations_array,
                languages_array,
                tools_array,
                success_rate_val, completed_projects_val, client_rating_val, response_time_hours_val,
                featured_val, preferred_contact_method_val, phone_number_val, whatsapp_number_val, linkedin_profile_val,
                admin_notes_val
            );

            RAISE NOTICE 'Created Vietnamese user: % with VA profile', full_name_var;
        END IF;
    END LOOP;
    
    RAISE NOTICE 'Completed seeding 50 Vietnamese users and virtual assistants';
END $$;