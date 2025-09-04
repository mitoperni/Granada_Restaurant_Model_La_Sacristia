import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const handleNavigation = (path, sectionId = null) => {
    if (location.pathname !== path) {
      navigate(path);
    } else if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-amber-600 hover:text-amber-700 transition-colors">
              La Sacristía
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                {t('navbar.home')}
              </Link>
              <Link
                to="/carta"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/carta' 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                {t('navbar.menu')}
              </Link>
              <Link
                to="/reservas"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/reservas' 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                {t('navbar.reservations')}
              </Link>
              <button
                onClick={() => handleNavigation('/', 'gallery')}
                className="text-gray-700 hover:bg-amber-50 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('navbar.gallery')}
              </button>
              <button
                onClick={() => handleNavigation('/', 'reviews')}
                className="text-gray-700 hover:bg-amber-50 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('navbar.reviews')}
              </button>
              <Link
                to="/contacto"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/contacto' 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                {t('navbar.contact')}
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <button
              onClick={toggleLanguage}
              className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
            >
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                location.pathname === '/' 
                  ? 'bg-amber-100 text-amber-700' 
                  : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              {t('navbar.home')}
            </Link>
            <Link
              to="/carta"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                location.pathname === '/carta' 
                  ? 'bg-amber-100 text-amber-700' 
                  : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              {t('navbar.menu')}
            </Link>
            <Link
              to="/reservas"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                location.pathname === '/reservas' 
                  ? 'bg-amber-100 text-amber-700' 
                  : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              {t('navbar.reservations')}
            </Link>
            <button
              onClick={() => handleNavigation('/', 'gallery')}
              className="text-gray-700 hover:bg-amber-50 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
            >
              {t('navbar.gallery')}
            </button>
            <button
              onClick={() => handleNavigation('/', 'reviews')}
              className="text-gray-700 hover:bg-amber-50 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
            >
              {t('navbar.reviews')}
            </button>
            <Link
              to="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                location.pathname === '/contacto' 
                  ? 'bg-amber-100 text-amber-700' 
                  : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              {t('navbar.contact')}
            </Link>
            <div className="px-3 py-2">
              <button
                onClick={toggleLanguage}
                className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-2 rounded-md text-sm font-medium w-full transition-colors"
              >
                {i18n.language === 'es' ? 'English' : 'Español'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;