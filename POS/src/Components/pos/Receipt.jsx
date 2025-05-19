import { useContext } from 'react';
import { POSContext } from '../../context/POSContext';

export const Receipt = () => {
  const { currentTransaction, setReceiptVisible, darkMode } = useContext(POSContext);

  if (!currentTransaction) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg max-w-md w-full max-h-screen overflow-y-auto`}>
        <div className="p-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold">Receipt</h2>
            <p className="text-gray-500">My Coffee Shop</p>
            <p className="text-gray-500 text-sm">123 Main Street, City</p>
            <p className="text-gray-500 text-sm mt-1">
              {new Date(currentTransaction.date).toLocaleString()}
            </p>
          </div>
          
          <div className="border-t border-b py-4 my-4">
            <div className="space-y-2">
              {currentTransaction.items.map(item => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <span>{item.name}</span> 
                    <span className="text-gray-500 text-sm ml-2">x{item.quantity}</span>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${currentTransaction.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (8%)</span>
              <span>${(currentTransaction.total * 0.08).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${(currentTransaction.total * 1.08).toFixed(2)}</span>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            <p>Thank you for your purchase!</p>
            <p>Transaction #: {currentTransaction.id.toString().slice(-4)}</p>
          </div>
          
          <div className="flex justify-center mt-6">
            <button 
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => setReceiptVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};