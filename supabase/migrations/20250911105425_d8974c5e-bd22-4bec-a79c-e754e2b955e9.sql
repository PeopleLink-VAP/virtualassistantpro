-- Add missing columns to email_templates table to match the UI expectations
ALTER TABLE public.email_templates 
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS text_content TEXT;