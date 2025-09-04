import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonES from './locales/es/common.json';
import menuES from './locales/es/menu.json';
import reviewsES from './locales/es/reviews.json';
import commonEN from './locales/en/common.json';
import menuEN from './locales/en/menu.json';
import reviewsEN from './locales/en/reviews.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },

    resources: {
      es: {
        common: commonES,
        menu: menuES,
        reviews: reviewsES,
      },
      en: {
        common: commonEN,
        menu: menuEN,
        reviews: reviewsEN,
      },
    },

    defaultNS: 'common',
    ns: ['common', 'menu', 'reviews'],

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;