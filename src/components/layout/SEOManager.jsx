import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

function SEOManager() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const getCanonicalUrl = () => {
    const path = location.pathname;
    const baseUrl = 'https://lasacristiagranada.com';

    if (path === '/' || path === '/en') {
      return path === '/en' ? `${baseUrl}/en` : baseUrl;
    }
    return `${baseUrl}${path}`;
  };

  const getAlternateUrls = () => {
    const path = location.pathname;
    const baseUrl = 'https://lasacristiagranada.com';

    if (path === '/' || path === '/en') {
      return {
        es: baseUrl,
        en: `${baseUrl}/en`
      };
    } else if (path === '/carta' || path === '/en/menu') {
      return {
        es: `${baseUrl}/carta`,
        en: `${baseUrl}/en/menu`
      };
    } else if (path === '/reservas' || path === '/en/reservations') {
      return {
        es: `${baseUrl}/reservas`,
        en: `${baseUrl}/en/reservations`
      };
    } else if (path === '/contacto' || path === '/en/contact') {
      return {
        es: `${baseUrl}/contacto`,
        en: `${baseUrl}/en/contact`
      };
    }

    return { es: `${baseUrl}${path}`, en: `${baseUrl}${path}` };
  };

  const alternateUrls = getAlternateUrls();

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>La Sacristía - {t("hero.title")}</title>
      <meta name="description" content={t("hero.subtitle")} />
      <meta
        name="keywords"
        content="restaurante, Granada, cocina tradicional, andaluza, tapas, jamón ibérico"
      />

      <meta property="og:type" content="restaurant" />
      <meta property="og:title" content={`La Sacristía - ${t("hero.title")}`} />
      <meta property="og:description" content={t("hero.subtitle")} />
      <meta property="og:url" content="https://lasacristiagranada.com" />
      <meta property="og:site_name" content="La Sacristía" />
      <meta
        property="og:image"
        content="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      />
      <meta
        property="og:locale"
        content={i18n.language === "es" ? "es_ES" : "en_US"}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={`La Sacristía - ${t("hero.title")}`}
      />
      <meta name="twitter:description" content={t("hero.subtitle")} />
      <meta
        name="twitter:image"
        content="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      />

      <link rel="canonical" href={getCanonicalUrl()} />
      <link rel="alternate" hrefLang="es" href={alternateUrls.es} />
      <link rel="alternate" hrefLang="en" href={alternateUrls.en} />
      <link rel="alternate" hrefLang="x-default" href={alternateUrls.es} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "La Sacristía",
          description: t("hero.subtitle"),
          address: {
            "@type": "PostalAddress",
            streetAddress: "Calle del Sacramento, 15",
            addressLocality: "Granada",
            postalCode: "18001",
            addressCountry: "ES",
          },
          telephone: "+34958123456",
          url: "https://lasacristiagranada.com",
          openingHours: ["Tu-Su 13:00-16:00", "Tu-Su 20:00-24:00"],
          servesCuisine: "Andalusian",
          priceRange: "€€",
          image:
            "https://www.granadadigital.es/wp-content/uploads/2019/11/Foto-dentro-2.jpg",
        })}
      </script>
    </Helmet>
  );
}

export default SEOManager;