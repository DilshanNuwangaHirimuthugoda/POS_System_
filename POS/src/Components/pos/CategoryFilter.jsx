import { useContext } from 'react';
import { POSContext } from '../../context/POSContext';

export const CategoryFilter = () => {
  const { categories, selectedCategory, setSelectedCategory, darkMode } = useContext(POSContext);

  return (
    <div className="flex space-x-2 overflow-x-auto pb-2">
      {categories.map(category => (
        <button
          key={category}
          className={`px-3 py-1 rounded-full capitalize whitespace-nowrap ${
            selectedCategory === category 
              ? 'bg-blue-500 text-white' 
              : `${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} border`
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};