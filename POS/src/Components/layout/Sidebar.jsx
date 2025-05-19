import { useContext } from 'react';
import { Package, DollarSign, Settings, LogOut } from 'lucide-react';
import { POSContext } from '../../context/POSContext';

export const Sidebar = () => {
  const { activeTab, setActiveTab, darkMode } = useContext(POSContext);

  return (
    <div className={`w-16 md:w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow flex flex-col`}>
      <nav className="flex-1 p-2">
        <button
          className={`flex items-center space-x-2 p-3 w-full rounded-lg mb-2 ${activeTab === 'products' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          onClick={() => setActiveTab('products')}
        >
          <Package size={20} />
          <span className="hidden md:inline">Products</span>
        </button>
        <button
          className={`flex items-center space-x-2 p-3 w-full rounded-lg mb-2 ${activeTab === 'transactions' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          onClick={() => setActiveTab('transactions')}
        >
          <DollarSign size={20} />
          <span className="hidden md:inline">Transactions</span>
        </button>
        <button
          className={`flex items-center space-x-2 p-3 w-full rounded-lg mb-2 ${activeTab === 'settings' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          onClick={() => setActiveTab('settings')}
        >
          <Settings size={20} />
          <span className="hidden md:inline">Settings</span>
        </button>
      </nav>
      <div className="p-4">
        <button className="flex items-center space-x-2 text-red-500 hover:text-red-600">
          <LogOut size={20} />
          <span className="hidden md:inline">Logout</span>
        </button>
      </div>
    </div>
  );
};