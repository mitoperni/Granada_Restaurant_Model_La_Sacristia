import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-amber-600 mb-4">La Sacristía</h3>
            <p className="text-gray-300 mb-4">
              Cocina tradicional andaluza en el corazón de Granada. 
              Una experiencia gastronómica única que combina tradición y calidad.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/lasacristiagranada" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/lasacristiagranada" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-2 rounded-full transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C3.85 14.724 3.398 13.574 3.398 12.277c0-1.297.452-2.448 1.227-3.323.775-.874 1.926-1.365 3.323-1.365 1.297 0 2.448.491 3.323 1.365.775.875 1.227 2.026 1.227 3.323 0 1.297-.452 2.447-1.227 3.322-.875.807-2.026 1.389-3.323 1.389zm7.718-6.132H14.05v-1.518h2.117v1.518zm-1.415 6.132c-.452 0-.864-.181-1.186-.452-.322-.271-.484-.633-.484-1.056V9.69h2.117v5.79c0 .423-.162.784-.484 1.056-.322.271-.734.452-1.186.452h.023z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-amber-600 transition-colors duration-300"
                >
                  {t('navbar.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-gray-300 hover:text-amber-600 transition-colors duration-300"
                >
                  {t('navbar.menu')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reservations')}
                  className="text-gray-300 hover:text-amber-600 transition-colors duration-300"
                >
                  {t('navbar.reservations')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-amber-600 transition-colors duration-300"
                >
                  {t('navbar.gallery')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t('contact.address')}
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('contact.phone')}
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t('contact.email')}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Horarios</h4>
            <div className="text-gray-300 space-y-1">
              <p className="font-medium">Martes - Domingo</p>
              <p className="text-sm">13:00 - 16:00</p>
              <p className="text-sm">20:00 - 24:00</p>
              <p className="text-red-400 mt-2">Lunes cerrado</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('footer.rights')}
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-600 transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-amber-600 transition-colors duration-300">
                Términos de Servicio
              </a>
              <a href="#" className="hover:text-amber-600 transition-colors duration-300">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;