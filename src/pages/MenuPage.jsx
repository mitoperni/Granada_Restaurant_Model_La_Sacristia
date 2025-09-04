import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import Menu from './Menu';
import { useTranslation } from 'react-i18next';

const MenuPage = () => {
  const { t, i18n } = useTranslation(['common', 'menu']);
  
  const menuStructuredData = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": t('menu:title'),
    "description": "Carta del restaurante La Sacristía con cocina tradicional andaluza",
    "inLanguage": i18n.language,
    "provider": {
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
      "priceRange": "€€",
      "servesCuisine": "Andalusian"
    },
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": t('menu:categories.starters'),
        "description": "Entrantes tradicionales andaluces"
      },
      {
        "@type": "MenuSection", 
        "name": t('menu:categories.meats'),
        "description": "Carnes selectas de la región"
      },
      {
        "@type": "MenuSection",
        "name": t('menu:categories.fish'), 
        "description": "Pescados frescos del Mediterráneo"
      },
      {
        "@type": "MenuSection",
        "name": t('menu:categories.desserts'),
        "description": "Postres tradicionales granadinos"
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title={`La Sacristía - ${t('menu:title')}`}
        description="Descubre nuestra carta de cocina tradicional andaluza. Jamón ibérico, cordero a la miel, lubina a la sal y postres artesanales en Granada."
        keywords="carta restaurante Granada, menú andaluz, jamón ibérico, cordero miel, lubina sal, paella mariscos, pionono Santa Fe, cocina tradicional"
        structuredData={menuStructuredData}
      />
      
      <div className="pt-16">
        <Breadcrumbs />
        <Menu />
      </div>
    </>
  );
};

export default MenuPage;