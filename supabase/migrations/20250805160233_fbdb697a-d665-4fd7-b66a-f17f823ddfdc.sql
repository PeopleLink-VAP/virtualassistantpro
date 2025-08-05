-- Create blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  author TEXT NOT NULL DEFAULT 'Virtual Assistant Pro',
  published_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Blog posts are publicly readable" 
ON public.blog_posts 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content) VALUES
('Hành trình VA từ số 0', 'hanh-trinh-va-tu-so-0', 'Khám phá hành trình trở thành Virtual Assistant chuyên nghiệp từ những bước đầu tiên', 'Đây là nội dung chi tiết về hành trình VA từ số 0...'),
('Kỹ năng cần thiết cho VA', 'ky-nang-can-thiet-cho-va', 'Những kỹ năng quan trọng mà mọi Virtual Assistant cần phải có', 'Nội dung chi tiết về các kỹ năng cần thiết...'),
('Cách xây dựng portfolio VA', 'cach-xay-dung-portfolio-va', 'Hướng dẫn tạo portfolio ấn tượng để thu hút khách hàng', 'Nội dung hướng dẫn xây dựng portfolio...');