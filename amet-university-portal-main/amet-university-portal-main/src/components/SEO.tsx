import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/lovable-uploads/1a294b6d-6a71-456c-a90a-b59eb24fb117.png',
  ogType = 'website',
  noIndex = false
}) => {
  const baseUrl = 'https://www.ametuniv.ac.in';
  const fullTitle = `${title} | AMET University`;
  const fullCanonicalUrl = canonicalUrl 
    ? `${baseUrl}${canonicalUrl}` 
    : undefined;
  const fullOgImage = ogImage.startsWith('http') 
    ? ogImage 
    : `${baseUrl}${ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}
      <meta property="og:site_name" content="AMET University" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
    </Helmet>
  );
};

export default SEO;
