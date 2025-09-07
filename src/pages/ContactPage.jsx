import SEOHead from '../components/SEOHead';
import Contact from './Contact';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "La Sacristía",
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
    "openingHours": [
      "Tu-Su 13:00-16:00",
      "Tu-Su 20:00-00:00"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+34958123456",
        "email": "info@lasacristiagranada.com",
        "availableLanguage": ["Spanish", "English"],
        "areaServed": "Granada"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/lasacristiagranada",
      "https://www.instagram.com/lasacristiagranada"
    ]
  };

  return (
    <>
      <SEOHead
        title={`La Sacristía - ${t('contact.title')}`}
        description="Contacta con La Sacristía Granada. Calle del Sacramento 15, centro histórico. Teléfono +34 958 123 456. Horarios, ubicación y cómo llegar."
        keywords="contacto La Sacristía Granada, dirección restaurante Granada, teléfono La Sacristía, Calle Sacramento Granada, horarios restaurante, ubicación centro Granada"
        structuredData={contactStructuredData}
      />

      <div className="pt-16">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;