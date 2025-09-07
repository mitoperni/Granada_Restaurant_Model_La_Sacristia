import { useTranslation } from 'react-i18next';
import { useLanguageNavigation } from '../hooks/useLanguageNavigation';

const Home = () => {
  const { t } = useTranslation();
  const { navigateWithLanguage } = useLanguageNavigation();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-amber-900/80 to-amber-800/80">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
        }}
        role="img"
        aria-label="Interior elegante del restaurante La Sacristía en Granada"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <button
          onClick={() => navigateWithLanguage('/carta')}
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {t('hero.viewMenu')}
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Home;