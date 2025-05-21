import { useContext } from 'react';
import { POSContext } from '../../context/POSContext';

export const StoreInfoForm = () => {
  const { darkMode } = useContext(POSContext);
  
  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm mb-1">Store Name</label>
        <input 
          type="text" 
          defaultValue="My Coffee Shop" 
          className={`w-full px-3 py-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white'}`}
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Address</label>
        <input 
          type="text" 
          defaultValue="123 Main Street, City" 
          className={`w-full px-3 py-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white'}`}
        />
      </div>
    </div>
  );
};