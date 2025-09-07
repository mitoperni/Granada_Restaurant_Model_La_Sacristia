import { Routes, Route } from 'react-router-dom';
import LanguageWrapper from './LanguageWrapper';
import HomePage from '../../pages/HomePage';
import MenuPage from '../../pages/MenuPage';
import ReservationsPage from '../../pages/ReservationsPage';
import ContactPage from '../../pages/ContactPage';

function AppRoutes() {
  return (
    <Routes>
      {/* Spanish routes (default) */}
      <Route path="/" element={
        <LanguageWrapper language="es">
          <HomePage />
        </LanguageWrapper>
      } />
      <Route path="/carta" element={
        <LanguageWrapper language="es">
          <MenuPage />
        </LanguageWrapper>
      } />
      <Route path="/reservas" element={
        <LanguageWrapper language="es">
          <ReservationsPage />
        </LanguageWrapper>
      } />
      <Route path="/contacto" element={
        <LanguageWrapper language="es">
          <ContactPage />
        </LanguageWrapper>
      } />
      
      {/* English routes */}
      <Route path="/en" element={
        <LanguageWrapper language="en">
          <HomePage />
        </LanguageWrapper>
      } />
      <Route path="/en/menu" element={
        <LanguageWrapper language="en">
          <MenuPage />
        </LanguageWrapper>
      } />
      <Route path="/en/reservations" element={
        <LanguageWrapper language="en">
          <ReservationsPage />
        </LanguageWrapper>
      } />
      <Route path="/en/contact" element={
        <LanguageWrapper language="en">
          <ContactPage />
        </LanguageWrapper>
      } />
    </Routes>
  );
}

export default AppRoutes;