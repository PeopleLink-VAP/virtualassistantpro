
import { Helmet } from 'react-helmet';

interface SeoProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

const Seo = ({
  title = "Trang Chủ - Virtual Assistant Pro",
  description = "Hãy để mình cùng đồng hành với bạn trên hành trình thú vị nhưng cũng đầy cam go này!",
  canonicalUrl = "https://virtualassistantpro.vn/"
}: SeoProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:locale" content="vi_VN" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Virtual Assistant Pro" />
      <meta property="og:updated_time" content="2024-03-13T13:36:57+00:00" />
      <meta property="article:published_time" content="2023-07-13T06:54:34+00:00" />
      <meta property="article:modified_time" content="2024-03-13T13:36:57+00:00" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:label1" content="Viết bởi" />
      <meta name="twitter:data1" content="virtual_user" />
      <meta name="twitter:label2" content="Thời gian đọc" />
      <meta name="twitter:data2" content="9 phút" />
    </Helmet>
  );
};

export default Seo;
