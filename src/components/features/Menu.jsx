import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation(['menu']);

  const menuCategories = [
    {
      id: 'starters',
      name: t('menu:categories.starters'),
      items: t('menu:items.starters', { returnObjects: true }) || []
    },
    {
      id: 'meats',
      name: t('menu:categories.meats'),
      items: t('menu:items.meats', { returnObjects: true }) || []
    },
    {
      id: 'fish',
      name: t('menu:categories.fish'),
      items: t('menu:items.fish', { returnObjects: true }) || []
    },
    {
      id: 'desserts',
      name: t('menu:categories.desserts'),
      items: t('menu:items.desserts', { returnObjects: true }) || []
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('menu:title')}
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('menu:subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {menuCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b-2 border-amber-600 pb-4">
                {category.name}
              </h2>
              <div className="space-y-6">
                {Array.isArray(category.items) && category.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-lg">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div className="ml-4 text-right">
                      <span className="text-amber-600 font-bold text-lg">
                        {item.price}€
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            {t('menu:allergens')}
          </p>
          <a
            href="/reservas"
            className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            {t('menu:reserveButton')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;