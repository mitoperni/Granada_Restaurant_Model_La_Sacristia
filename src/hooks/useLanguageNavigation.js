import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Hook to handle navigation while preserving language context
export const useLanguageNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();
  
  const getRouteForLanguage = (route, lang = i18n.language) => {
    // Route mapping for different languages
    const routeMap = {
      es: {
        '/': '/',
        '/carta': '/carta',
        '/reservas': '/reservas',
        '/contacto': '/contacto'
      },
      en: {
        '/': '/en',
        '/carta': '/en/menu',
        '/reservas': '/en/reservations',
        '/contacto': '/en/contact'
      }
    };
    
    return routeMap[lang]?.[route] || route;
  };
  
  const getCurrentLanguageFromPath = () => {
    if (location.pathname.startsWith('/en')) {
      return 'en';
    }
    return 'es';
  };
  
  const navigateWithLanguage = (route) => {
    const currentLang = getCurrentLanguageFromPath();
    const targetRoute = getRouteForLanguage(route, currentLang);
    navigate(targetRoute);
  };
  
  const switchLanguage = (newLang) => {
    const currentRoute = getCurrentRouteKey();
    const newRoute = getRouteForLanguage(currentRoute, newLang);
    i18n.changeLanguage(newLang);
    navigate(newRoute);
  };
  
  const getCurrentRouteKey = () => {
    const path = location.pathname;
    
    // Map current path back to base route key
    if (path === '/' || path === '/en') return '/';
    if (path === '/carta' || path === '/en/menu') return '/carta';
    if (path === '/reservas' || path === '/en/reservations') return '/reservas';
    if (path === '/contacto' || path === '/en/contact') return '/contacto';
    
    return path;
  };
  
  return {
    navigateWithLanguage,
    switchLanguage,
    getCurrentLanguageFromPath,
    getRouteForLanguage
  };
};