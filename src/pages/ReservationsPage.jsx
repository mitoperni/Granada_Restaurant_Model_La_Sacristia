import SEOHead from '../components/SEOHead';
import Reservations from './Reservations';
import { useTranslation } from 'react-i18next';

const ReservationsPage = () => {
  const { t } = useTranslation();

  const reservationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "La Sacristía",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle del Sacramento, 15",
      "addressLocality": "Granada",
      "postalCode": "18001",
      "addressCountry": "ES"
    },
    "telephone": "+34958123456",
    "acceptsReservations": true,
    "reservationService": [
      {
        "@type": "ContactPoint",
        "contactType": "reservations",
        "telephone": "+34958123456",
        "availableLanguage": ["Spanish", "English"]
      }
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wa.me/34666555444?text={reservation_message}",
        "actionPlatform": "WhatsApp"
      }
    }
  };

  return (
    <>
      <SEOHead
        title={`La Sacristía - ${t('reservations.title')}`}
        description="Reserve su mesa en La Sacristía Granada. Reserva fácil por WhatsApp o teléfono. Cocina tradicional andaluza con ambiente único en el centro histórico."
        keywords="reservas La Sacristía Granada, reservar mesa restaurante, WhatsApp reservas, teléfono reservas, restaurante centro Granada"
        structuredData={reservationStructuredData}
      />

      <div className="pt-16">
        <Reservations />
      </div>
    </>
  );
};

export default ReservationsPage;