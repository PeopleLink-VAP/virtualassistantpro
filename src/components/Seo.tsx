
import { Helmet } from 'react-helmet';

interface SeoProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'course';
  noIndex?: boolean;
  structuredData?: object;
}

const Seo = ({
  title = "Trang Chủ - Virtual Assistant Pro",
  description = "Hãy để mình cùng đồng hành với bạn trên hành trình thú vị nhưng cũng đầy cam go này!",
  canonicalUrl = "https://virtualassistantpro.vn/",
  keywords = "virtual assistant, trợ lý ảo, khóa học VA, đào tạo virtual assistant, freelancer, làm việc online, kiếm tiền online, Fiverr, Upwork",
  image = "https://virtualassistantpro.vn/images/og-image.jpg",
  type = "website",
  noIndex = false,
  structuredData
}: SeoProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:locale" content="vi_VN" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Virtual Assistant Pro" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@VirtualAssistantPro" />
      <meta name="twitter:creator" content="@VirtualAssistantPro" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional SEO tags */}
      <meta name="author" content="Virtual Assistant Pro" />
      <meta name="language" content="vi" />
      <meta name="geo.region" content="VN" />
      <meta name="geo.country" content="Vietnam" />
      <meta name="theme-color" content="#F4A261" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;
