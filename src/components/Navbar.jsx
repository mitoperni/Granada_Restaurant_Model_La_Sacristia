import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import LanguageLink from './LanguageLink';
import { useLanguageNavigation } from '../hooks/useLanguageNavigation';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { navigateWithLanguage, switchLanguage } = useLanguageNavigation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    switchLanguage(newLang);
  };

  const handleNavigation = (path, sectionId = null) => {
    const currentBasePath = getCurrentBasePath();
    if (currentBasePath !== path) {
      navigateWithLanguage(path);
    } else if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const getCurrentBasePath = () => {
    const path = location.pathname;
    if (path === '/' || path === '/en') return '/';
    if (path === '/carta' || path === '/en/menu') return '/carta';
    if (path === '/reservas' || path === '/en/reservations') return '/reservas';
    if (path === '/contacto' || path === '/en/contact') return '/contacto';
    return path;
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <LanguageLink to="/" className="text-2xl font-bold text-amber-600 hover:text-amber-700 transition-colors">
              La Sacristía
            </LanguageLink>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <LanguageLink
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  getCurrentBasePath() === '/' 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                {t('navbar.home')}
              </LanguageLink>
              <LanguageLink
                to="/carta"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  getCurrentBasePath() === '/carta' 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                {t('navbar.menu')}
              </LanguageLink>
              <LanguageLink
                to="/reservas"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  getCurrentBasePath() === '/reservas' 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                {t('navbar.reservations')}
              </LanguageLink>
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
              <LanguageLink
                to="/contacto"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  getCurrentBasePath() === '/contacto' 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                {t('navbar.contact')}
              </LanguageLink>
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
            <LanguageLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                getCurrentBasePath() === '/' 
                  ? 'bg-amber-100 text-amber-700' 
                  : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              {t('navbar.home')}
            </LanguageLink>
            <LanguageLink
              to="/carta"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                getCurrentBasePath() === '/carta' 
                  ? 'bg-amber-100 text-amber-700' 
                  : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              {t('navbar.menu')}
            </LanguageLink>
            <LanguageLink
              to="/reservas"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                getCurrentBasePath() === '/reservas' 
                  ? 'bg-amber-100 text-amber-700' 
                  : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              {t('navbar.reservations')}
            </LanguageLink>
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
            <LanguageLink
              to="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                getCurrentBasePath() === '/contacto' 
                  ? 'bg-amber-100 text-amber-700' 
                  : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              {t('navbar.contact')}
            </LanguageLink>
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