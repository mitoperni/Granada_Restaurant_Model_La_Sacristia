import SEOHead from '../components/SEOHead';
import Home from './Home';
import Gallery from './Gallery';
import Reviews from './Reviews';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "La Sacristía",
    "description": t('hero.subtitle'),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle del Sacramento, 15",
      "addressLocality": "Granada",
      "addressRegion": "Andalucía",
      "postalCode": "18001",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.1773,
      "longitude": -3.5986
    },
    "telephone": "+34958123456",
    "email": "info@lasacristiagranada.com",
    "url": "https://lasacristiagranada.com",
    "servesCuisine": "Andalusian",
    "priceRange": "€€",
    "acceptsReservations": true,
    "openingHours": [
      "Tu-Su 13:00-16:00",
      "Tu-Su 20:00-00:00"
    ],
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5"
    },
    "sameAs": [
      "https://www.facebook.com/lasacristiagranada",
      "https://www.instagram.com/lasacristiagranada"
    ]
  };

  return (
    <>
      <SEOHead 
        title={`La Sacristía - ${t('hero.title')}`}
        description={`${t('hero.subtitle')} Restaurante de cocina tradicional andaluza en Granada. Ambiente único en el centro histórico con los mejores ingredientes locales.`}
        keywords="restaurante Granada, cocina tradicional andaluza, La Sacristía Granada, restaurante centro Granada, comida andaluza, tapas Granada, jamón ibérico"
        structuredData={homeStructuredData}
      />
      
      <Home />
      <Gallery />
      <Reviews />
    </>
  );
};

export default HomePage;