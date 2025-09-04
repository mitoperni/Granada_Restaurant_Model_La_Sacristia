import { useTranslation } from 'react-i18next';

const Reservations = () => {
  const { t } = useTranslation();

  const handleWhatsAppReservation = () => {
    const message = encodeURIComponent('Hola, me gustaría hacer una reserva en La Sacristía. ¿Podrían ayudarme?');
    window.open(`https://wa.me/34666555444?text=${message}`, '_blank');
  };

  const handlePhoneReservation = () => {
    window.open('tel:+34958123456', '_self');
  };

  return (
    <section id="reservations" className="py-20 bg-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          {t('reservations.title')}
        </h2>
        <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
        
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('reservations.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-6">Respuesta rápida y confirmación inmediata</p>
            </div>
            <button
              onClick={handleWhatsAppReservation}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full"
            >
              {t('reservations.whatsapp')}
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <svg className="w-16 h-16 text-amber-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Teléfono</h3>
              <p className="text-gray-600 mb-6">Atención personalizada directa</p>
            </div>
            <button
              onClick={handlePhoneReservation}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full"
            >
              {t('reservations.phone')}
            </button>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Información de Contacto</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <div>
              <strong>Teléfono:</strong> +34 958 123 456
            </div>
            <div>
              <strong>WhatsApp:</strong> +34 666 555 444
            </div>
            <div className="md:col-span-2">
              <strong>Horarios:</strong> Martes a Domingo de 13:00 a 16:00 y de 20:00 a 24:00
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;