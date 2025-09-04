import { useTranslation } from 'react-i18next';

const MenuCard = ({ item }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
    <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
    <div className="flex justify-end">
      <span className="text-2xl font-bold text-amber-600">{item.price}</span>
    </div>
  </div>
);

const MenuCategory = ({ title, items }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <MenuCard key={index} item={item} />
      ))}
    </div>
  </div>
);

const Menu = () => {
  const { t } = useTranslation('menu');

  const categories = ['starters', 'meats', 'fish', 'desserts'];

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('title')}
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        {categories.map((category) => (
          <MenuCategory
            key={category}
            title={t(`categories.${category}`)}
            items={t(`items.${category}`, { returnObjects: true })}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;