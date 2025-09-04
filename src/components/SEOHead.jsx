import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const SEOHead = ({ 
  title = '', 
  description = '', 
  keywords = '', 
  image = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  structuredData = null 
}) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  
  const baseUrl = 'https://lasacristiagranada.com';
  const currentUrl = `${baseUrl}${location.pathname}`;
  
  // Generate hreflang URLs based on current path
  const getHreflangUrls = () => {
    const pathMap = {
      '/': { es: '/', en: '/en/' },
      '/carta': { es: '/carta', en: '/en/menu' },
      '/reservas': { es: '/reservas', en: '/en/reservations' },
      '/contacto': { es: '/contacto', en: '/en/contact' }
    };
    
    return pathMap[location.pathname] || { es: location.pathname, en: `/en${location.pathname}` };
  };
  
  const hreflangUrls = getHreflangUrls();

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Hreflang tags */}
      <link rel="alternate" hreflang="es" href={`${baseUrl}${hreflangUrls.es}`} />
      <link rel="alternate" hreflang="en" href={`${baseUrl}${hreflangUrls.en}`} />
      <link rel="alternate" hreflang="x-default" href={`${baseUrl}${hreflangUrls.es}`} />
      
      {/* Open Graph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="La Sacristía" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={i18n.language === 'es' ? 'es_ES' : 'en_US'} />
      <meta property="og:locale:alternate" content={i18n.language === 'es' ? 'en_US' : 'es_ES'} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="La Sacristía - Restaurante Granada" />
      
      {/* Additional SEO meta tags */}
      <meta name="author" content="La Sacristía" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Geo tags for local SEO */}
      <meta name="geo.region" content="ES-AN" />
      <meta name="geo.placename" content="Granada" />
      <meta name="geo.position" content="37.1773;-3.5986" />
      <meta name="ICBM" content="37.1773, -3.5986" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;