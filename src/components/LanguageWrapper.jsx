import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageWrapper({ children, language }) {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);
  
  return children;
}

export default LanguageWrapper;