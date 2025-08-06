-- Add Subscriber membership tier for newsletter subscribers
INSERT INTO public.membership_tiers (name, description, features) VALUES
('Subscriber', 'Newsletter subscriber with limited access', ARRAY['Newsletter access', 'Public content viewing', 'Community participation'])
ON CONFLICT (name) DO NOTHING;
