import { useContext } from 'react';
import { POSContext } from '../../context/POSContext';

export const ProductCard = ({ product }) => {
  const { addToCart, darkMode } = useContext(POSContext);

  return (
    <div 
      className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow overflow-hidden cursor-pointer transition-transform hover:scale-105`}
      onClick={() => addToCart(product)}
    >
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="font-medium">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <span className={`text-sm ${product.stock < 20 ? 'text-red-500' : 'text-green-500'}`}>
            Stock: {product.stock}
          </span>
        </div>
      </div>
    </div>
  );
};