import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SEOManager from './components/layout/SEOManager';
import AppRoutes from './components/routing/AppRoutes';
import useScrollToTop from './hooks/useScrollToTop';

import './i18n';

function AppContent() {
  useScrollToTop();

  return (
    <>
      <SEOManager />
      <div className="App">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App
