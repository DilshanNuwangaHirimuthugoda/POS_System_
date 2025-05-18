import { useContext } from 'react';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { POSContext } from '../../context/POSContext';

export const CartPanel = () => {
  const { 
    cart, 
    cartTotal, 
    updateQuantity, 
    removeFromCart, 
    completeTransaction,
    darkMode
  } = useContext(POSContext);

  return (
    <div className={`w-80 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg overflow-hidden flex flex-col`}>
      <div className="p-4 border-b">
        <div className="flex items-center">
          <ShoppingCart size={20} className="mr-2" />
          <h2 className="text-lg font-bold">Current Order</h2>
        </div>
      </div>
      
      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-4">
        {cart.length === 0 ? (
          <div className="text-center py-10">
            <ShoppingCart size={48} className="mx-auto mb-4 text-gray-400" />
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-3 rounded-lg`}>
                <div className="flex justify-between">
                  <span className="font-medium">{item.name}</span>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span>${item.price.toFixed(2)}</span>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className={`${darkMode ? 'bg-gray-600' : 'bg-gray-200'} w-6 h-6 rounded-full flex items-center justify-center`}
                    >
                      <Minus size={14} />
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className={`${darkMode ? 'bg-gray-600' : 'bg-gray-200'} w-6 h-6 rounded-full flex items-center justify-center`}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Cart Total and Checkout */}
      <div className="p-4 border-t">
        <div className="flex justify-between mb-4">
          <span className="font-bold">Total</span>
          <span className="font-bold">${cartTotal.toFixed(2)}</span>
        </div>
        <button 
          className={`w-full py-3 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed`}
          onClick={completeTransaction}
          disabled={cart.length === 0}
        >
          Complete Sale
        </button>
      </div>
    </div>
  );
};