-- Seed 5 Vietnamese users with detailed profiles and virtual assistant records
-- This migration creates users in auth.users, profiles, and virtual_assistants tables

DO $$
DECLARE
    admin_user_id UUID;
    user_uuid1 UUID;
    user_uuid2 UUID;
    user_uuid3 UUID;
    user_uuid4 UUID;
    user_uuid5 UUID;
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

    -- Generate UUIDs for all users
    user_uuid1 := gen_random_uuid();
    user_uuid2 := gen_random_uuid();
    user_uuid3 := gen_random_uuid();
    user_uuid4 := gen_random_uuid();
    user_uuid5 := gen_random_uuid();

    -- Create User 1: Nguyen Thi Linh (Project Manager)
    IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'nguyen.thi.linh@gmail.com') THEN
        -- Insert into auth.users
        INSERT INTO auth.users (
            id, instance_id, aud, role, email, encrypted_password,
            email_confirmed_at, recovery_sent_at, last_sign_in_at,
            raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
            confirmation_token, email_change, email_change_token_new, recovery_token
        ) VALUES (
            user_uuid1, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
            'nguyen.thi.linh@gmail.com', crypt('password123', gen_salt('bf')),
            NOW(), NOW(), NOW(),
            '{"provider": "email", "providers": ["email"]}',
            '{"full_name": "Nguyễn Thị Linh"}',
            NOW(), NOW(), '', '', '', ''
        );

        -- Update the auto-created profile with detailed information
        UPDATE public.profiles SET
            full_name = 'Nguyễn Thị Linh',
            role = 'member',
            membership_tier = 'premium',
            bio = 'Chuyên gia quản lý dự án với 5 năm kinh nghiệm trong lĩnh vực công nghệ. Thành thạo tiếng Anh và có kinh nghiệm làm việc với khách hàng quốc tế. Tôi chuyên về quản lý timeline, resource planning và stakeholder communication.',
            skills = ARRAY['Project Management', 'Stakeholder Communication', 'Timeline Planning', 'Risk Management', 'Agile/Scrum'],
            country_of_origin = 'Vietnam',
            avatar_url = 'https://ui-avatars.com/api/?name=Nguyễn+Thị+Linh&size=200&background=random'
        WHERE user_id = user_uuid1;

        -- Insert into virtual_assistants
        INSERT INTO public.virtual_assistants (
            profile_id, va_status, verification_date, verified_by, experience_years, hourly_rate,
            currency, availability_hours, timezone, avatar_url, specializations, languages,
            tools_proficiency, success_rate, completed_projects, client_rating, response_time_hours,
            featured, preferred_contact_method, phone_number, whatsapp_number, linkedin_profile, admin_notes
        ) VALUES (
            user_uuid1, 'approved', NOW() - INTERVAL '15 days', admin_user_id, 5, 25.00,
            'USD', 40, 'Asia/Ho_Chi_Minh',
            'https://ui-avatars.com/api/?name=Nguyễn+Thị+Linh&size=400&background=random',
            ARRAY['Project Management', 'Business Analysis', 'Client Relations', 'Process Improvement'],
            ARRAY['Vietnamese', 'English (Business Level)', 'Japanese (Basic)'],
            ARRAY['MS Project', 'Jira', 'Trello', 'Slack', 'Google Workspace', 'Zoom'],
            92.5, 35, 4.8, 6, true, 'email', '+84-912-345-678', '+84-912-345-678',
            'https://linkedin.com/in/nguyen-thi-linh-pm',
            'Verified Vietnamese VA with 5 years experience. Strong communication skills and proven track record.'
        );

        RAISE NOTICE 'Created Vietnamese user: Nguyễn Thị Linh with VA profile';
    END IF;

    -- Create User 2: Tran Van Duc (Data Analyst)
    IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'tran.van.duc@gmail.com') THEN
        INSERT INTO auth.users (
            id, instance_id, aud, role, email, encrypted_password,
            email_confirmed_at, recovery_sent_at, last_sign_in_at,
            raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
            confirmation_token, email_change, email_change_token_new, recovery_token
        ) VALUES (
            user_uuid2, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
            'tran.van.duc@gmail.com', crypt('password123', gen_salt('bf')),
            NOW(), NOW(), NOW(),
            '{"provider": "email", "providers": ["email"]}',
            '{"full_name": "Trần Văn Đức"}',
            NOW(), NOW(), '', '', '', ''
        );

        UPDATE public.profiles SET
            full_name = 'Trần Văn Đức',
            role = 'member',
            membership_tier = 'premium',
            bio = 'Virtual Assistant chuyên về data analysis và customer support. Có background về finance và kế toán. Thành thạo Excel, Power BI và các tool CRM. Kinh nghiệm 4 năm hỗ trợ các công ty startup và SME.',
            skills = ARRAY['Data Analysis', 'Customer Support', 'Financial Analysis', 'CRM Management', 'Excel/Power BI'],
            country_of_origin = 'Vietnam',
            avatar_url = 'https://ui-avatars.com/api/?name=Trần+Văn+Đức&size=200&background=random'
        WHERE user_id = user_uuid2;

        INSERT INTO public.virtual_assistants (
            profile_id, va_status, verification_date, verified_by, experience_years, hourly_rate,
            currency, availability_hours, timezone, avatar_url, specializations, languages,
            tools_proficiency, success_rate, completed_projects, client_rating, response_time_hours,
            featured, preferred_contact_method, phone_number, whatsapp_number, linkedin_profile, admin_notes
        ) VALUES (
            user_uuid2, 'approved', NOW() - INTERVAL '20 days', admin_user_id, 4, 20.00,
            'USD', 42, 'Asia/Ho_Chi_Minh',
            'https://ui-avatars.com/api/?name=Trần+Văn+Đức&size=400&background=random',
            ARRAY['Data Analysis', 'Customer Service', 'Financial Reporting', 'CRM Administration'],
            ARRAY['Vietnamese', 'English (Fluent)', 'Chinese (Conversational)'],
            ARRAY['Excel', 'Power BI', 'Salesforce', 'HubSpot', 'QuickBooks', 'Tableau'],
            89.2, 28, 4.6, 4, false, 'whatsapp', '+84-987-654-321', '+84-987-654-321',
            'https://linkedin.com/in/tran-van-duc-analyst',
            'Verified Vietnamese VA with 4 years experience. Strong communication skills and proven track record.'
        );

        RAISE NOTICE 'Created Vietnamese user: Trần Văn Đức with VA profile';
    END IF;

    -- Create User 3: Le Thi Mai (Content Creator)
    IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'le.thi.mai@gmail.com') THEN
        INSERT INTO auth.users (
            id, instance_id, aud, role, email, encrypted_password,
            email_confirmed_at, recovery_sent_at, last_sign_in_at,
            raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
            confirmation_token, email_change, email_change_token_new, recovery_token
        ) VALUES (
            user_uuid3, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
            'le.thi.mai@gmail.com', crypt('password123', gen_salt('bf')),
            NOW(), NOW(), NOW(),
            '{"provider": "email", "providers": ["email"]}',
            '{"full_name": "Lê Thị Mai"}',
            NOW(), NOW(), '', '', '', ''
        );

        UPDATE public.profiles SET
            full_name = 'Lê Thị Mai',
            role = 'member',
            membership_tier = 'premium',
            bio = 'Content Creator và Social Media Manager với passion về digital marketing. Chuyên tạo nội dung tiếng Việt và tiếng Anh cho các platform khác nhau. Có kinh nghiệm quản lý fanpage với hơn 100K followers.',
            skills = ARRAY['Content Creation', 'Social Media Management', 'SEO/SEM', 'Graphic Design', 'Community Management'],
            country_of_origin = 'Vietnam',
            avatar_url = 'https://ui-avatars.com/api/?name=Lê+Thị+Mai&size=200&background=random'
        WHERE user_id = user_uuid3;

        INSERT INTO public.virtual_assistants (
            profile_id, va_status, verification_date, verified_by, experience_years, hourly_rate,
            currency, availability_hours, timezone, avatar_url, specializations, languages,
            tools_proficiency, success_rate, completed_projects, client_rating, response_time_hours,
            featured, preferred_contact_method, phone_number, whatsapp_number, linkedin_profile, admin_notes
        ) VALUES (
            user_uuid3, 'approved', NOW() - INTERVAL '25 days', admin_user_id, 3, 18.00,
            'USD', 38, 'Asia/Ho_Chi_Minh',
            'https://ui-avatars.com/api/?name=Lê+Thị+Mai&size=400&background=random',
            ARRAY['Content Marketing', 'Social Media Strategy', 'Brand Management', 'Creative Direction'],
            ARRAY['Vietnamese', 'English (Native Level)', 'French (Basic)'],
            ARRAY['Canva', 'Adobe Creative Suite', 'Hootsuite', 'Buffer', 'Google Analytics', 'Facebook Ads'],
            94.1, 42, 4.9, 3, true, 'telegram', '+84-901-234-567', '+84-901-234-567',
            'https://linkedin.com/in/le-thi-mai-content',
            'Verified Vietnamese VA with 3 years experience. Strong communication skills and proven track record.'
        );

        RAISE NOTICE 'Created Vietnamese user: Lê Thị Mai with VA profile';
    END IF;

    -- Create User 4: Pham Van Khang (E-commerce Specialist)
    IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'pham.van.khang@gmail.com') THEN
        INSERT INTO auth.users (
            id, instance_id, aud, role, email, encrypted_password,
            email_confirmed_at, recovery_sent_at, last_sign_in_at,
            raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
            confirmation_token, email_change, email_change_token_new, recovery_token
        ) VALUES (
            user_uuid4, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
            'pham.van.khang@gmail.com', crypt('password123', gen_salt('bf')),
            NOW(), NOW(), NOW(),
            '{"provider": "email", "providers": ["email"]}',
            '{"full_name": "Phạm Văn Khang"}',
            NOW(), NOW(), '', '', '', ''
        );

        UPDATE public.profiles SET
            full_name = 'Phạm Văn Khang',
            role = 'member',
            membership_tier = 'premium',
            bio = 'E-commerce specialist với expertise về Shopify, WooCommerce và Amazon FBA. Đã hỗ trợ nhiều brand xây dựng và scale online business. Thành thạo inventory management, order processing và customer service.',
            skills = ARRAY['E-commerce Management', 'Shopify/WooCommerce', 'Amazon FBA', 'Inventory Management', 'Digital Marketing'],
            country_of_origin = 'Vietnam',
            avatar_url = 'https://ui-avatars.com/api/?name=Phạm+Văn+Khang&size=200&background=random'
        WHERE user_id = user_uuid4;

        INSERT INTO public.virtual_assistants (
            profile_id, va_status, verification_date, verified_by, experience_years, hourly_rate,
            currency, availability_hours, timezone, avatar_url, specializations, languages,
            tools_proficiency, success_rate, completed_projects, client_rating, response_time_hours,
            featured, preferred_contact_method, phone_number, whatsapp_number, linkedin_profile, admin_notes
        ) VALUES (
            user_uuid4, 'approved', NOW() - INTERVAL '10 days', admin_user_id, 6, 30.00,
            'USD', 45, 'Asia/Ho_Chi_Minh',
            'https://ui-avatars.com/api/?name=Phạm+Văn+Khang&size=400&background=random',
            ARRAY['E-commerce Operations', 'Online Marketing', 'Supply Chain', 'Customer Acquisition'],
            ARRAY['Vietnamese', 'English (Fluent)', 'Thai (Conversational)'],
            ARRAY['Shopify', 'WooCommerce', 'Amazon Seller Central', 'Google Ads', 'Mailchimp', 'Klaviyo'],
            96.8, 67, 4.7, 8, true, 'email', '+84-976-543-210', '+84-976-543-210',
            'https://linkedin.com/in/pham-van-khang-ecom',
            'Verified Vietnamese VA with 6 years experience. Strong communication skills and proven track record.'
        );

        RAISE NOTICE 'Created Vietnamese user: Phạm Văn Khang with VA profile';
    END IF;

    -- Create User 5: Hoang Thi Ngan (Administrative Support)
    IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'hoang.thi.ngan@gmail.com') THEN
        INSERT INTO auth.users (
            id, instance_id, aud, role, email, encrypted_password,
            email_confirmed_at, recovery_sent_at, last_sign_in_at,
            raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
            confirmation_token, email_change, email_change_token_new, recovery_token
        ) VALUES (
            user_uuid5, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
            'hoang.thi.ngan@gmail.com', crypt('password123', gen_salt('bf')),
            NOW(), NOW(), NOW(),
            '{"provider": "email", "providers": ["email"]}',
            '{"full_name": "Hoàng Thị Ngân"}',
            NOW(), NOW(), '', '', '', ''
        );

        UPDATE public.profiles SET
            full_name = 'Hoàng Thị Ngân',
            role = 'member',
            membership_tier = 'premium',
            bio = 'Administrative Support Expert với background trong HR và operations. Chuyên về calendar management, travel planning, document preparation và event coordination. Có kinh nghiệm làm việc với C-level executives.',
            skills = ARRAY['Administrative Support', 'Calendar Management', 'Travel Planning', 'Event Coordination', 'HR Operations'],
            country_of_origin = 'Vietnam',
            avatar_url = 'https://ui-avatars.com/api/?name=Hoàng+Thị+Ngân&size=200&background=random'
        WHERE user_id = user_uuid5;

        INSERT INTO public.virtual_assistants (
            profile_id, va_status, verification_date, verified_by, experience_years, hourly_rate,
            currency, availability_hours, timezone, avatar_url, specializations, languages,
            tools_proficiency, success_rate, completed_projects, client_rating, response_time_hours,
            featured, preferred_contact_method, phone_number, whatsapp_number, linkedin_profile, admin_notes
        ) VALUES (
            user_uuid5, 'approved', NOW() - INTERVAL '35 days', admin_user_id, 7, 22.00,
            'USD', 40, 'Asia/Ho_Chi_Minh',
            'https://ui-avatars.com/api/?name=Hoàng+Thị+Ngân&size=400&background=random',
            ARRAY['Executive Support', 'Office Management', 'Process Optimization', 'Team Coordination'],
            ARRAY['Vietnamese', 'English (Advanced)', 'Korean (Basic)'],
            ARRAY['MS Office Suite', 'Google Workspace', 'Calendly', 'Docusign', 'Notion', 'Asana'],
            91.3, 54, 4.5, 5, false, 'whatsapp', '+84-965-432-109', '+84-965-432-109',
            'https://linkedin.com/in/hoang-thi-ngan-admin',
            'Verified Vietnamese VA with 7 years experience. Strong communication skills and proven track record.'
        );

        RAISE NOTICE 'Created Vietnamese user: Hoàng Thị Ngân with VA profile';
    END IF;
    
    RAISE NOTICE 'Completed seeding 5 Vietnamese users and virtual assistants';
END $$;
