import { Link, useLocation } from 'react-router-dom';
import { useLanguageNavigation } from '../hooks/useLanguageNavigation';

const LanguageLink = ({ to, children, className, ...props }) => {
  const { getRouteForLanguage, getCurrentLanguageFromPath } = useLanguageNavigation();
  const location = useLocation();
  
  const currentLang = getCurrentLanguageFromPath();
  const targetRoute = getRouteForLanguage(to, currentLang);
  
  // Check if this link is active based on the base route
  const isActive = () => {
    const baseRoute = to;
    const currentBaseRoute = getCurrentBaseRoute();
    return baseRoute === currentBaseRoute;
  };
  
  const getCurrentBaseRoute = () => {
    const path = location.pathname;
    if (path === '/' || path === '/en') return '/';
    if (path === '/carta' || path === '/en/menu') return '/carta';
    if (path === '/reservas' || path === '/en/reservations') return '/reservas';
    if (path === '/contacto' || path === '/en/contact') return '/contacto';
    return path;
  };
  
  return (
    <Link 
      to={targetRoute} 
      className={className}
      data-active={isActive()}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LanguageLink;