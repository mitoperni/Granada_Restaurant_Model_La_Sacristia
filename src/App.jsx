import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ReservationsPage from './pages/ReservationsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

import './i18n';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="App">
          <Helmet>
            <html lang={i18n.language} />
            <title>La Sacristía - {t('hero.title')}</title>
            <meta name="description" content={t('hero.subtitle')} />
            <meta name="keywords" content="restaurante, Granada, cocina tradicional, andaluza, tapas, jamón ibérico" />
            
            <meta property="og:type" content="restaurant" />
            <meta property="og:title" content={`La Sacristía - ${t('hero.title')}`} />
            <meta property="og:description" content={t('hero.subtitle')} />
            <meta property="og:url" content="https://lasacristiagranada.com" />
            <meta property="og:site_name" content="La Sacristía" />
            <meta property="og:image" content="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
            <meta property="og:locale" content={i18n.language === 'es' ? 'es_ES' : 'en_US'} />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`La Sacristía - ${t('hero.title')}`} />
            <meta name="twitter:description" content={t('hero.subtitle')} />
            <meta name="twitter:image" content="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
            
            <link rel="canonical" href="https://lasacristiagranada.com" />
            
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Restaurant",
                "name": "La Sacristía",
                "description": t('hero.subtitle'),
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Calle del Sacramento, 15",
                  "addressLocality": "Granada",
                  "postalCode": "18001",
                  "addressCountry": "ES"
                },
                "telephone": "+34958123456",
                "url": "https://lasacristiagranada.com",
                "openingHours": [
                  "Tu-Su 13:00-16:00",
                  "Tu-Su 20:00-24:00"
                ],
                "servesCuisine": "Andalusian",
                "priceRange": "€€",
                "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              })}
            </script>
          </Helmet>

          <Navbar />
          
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/carta" element={<MenuPage />} />
              <Route path="/reservas" element={<ReservationsPage />} />
              <Route path="/contacto" element={<ContactPage />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App
