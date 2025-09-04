import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Breadcrumbs = () => {
  const { t } = useTranslation();
  const location = useLocation();
  
  const pathMap = {
    '/': { name: t('navbar.home'), href: '/' },
    '/carta': { name: t('navbar.menu'), href: '/carta' },
    '/reservas': { name: t('navbar.reservations'), href: '/reservas' },
    '/contacto': { name: t('navbar.contact'), href: '/contacto' }
  };
  
  const currentPage = pathMap[location.pathname];
  
  if (!currentPage || location.pathname === '/') {
    return null; // No mostrar breadcrumbs en home
  }
  
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://lasacristiagranada.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": currentPage.name,
        "item": `https://lasacristiagranada.com${currentPage.href}`
      }
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      </Helmet>
      
      <nav className="bg-gray-50 py-3 px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link 
                to="/" 
                className="hover:text-amber-600 transition-colors"
                aria-label="Volver al inicio"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <span className="text-gray-900 font-medium" aria-current="page">
                {currentPage.name}
              </span>
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;