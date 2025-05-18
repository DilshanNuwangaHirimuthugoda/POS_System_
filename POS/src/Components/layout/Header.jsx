import { useContext } from 'react';
import { Zap, User } from 'lucide-react';
import { POSContext } from '../../context/POSContext';

export const Header = () => {
  const { darkMode, setDarkMode } = useContext(POSContext);

  return (
    <header className={`px-6 py-4 flex justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
      <div className="flex items-center space-x-2">
        <Zap size={24} className="text-blue-500" />
        <h1 className="text-xl font-bold">ReactPOS</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
        <div className="flex items-center space-x-2">
          <User size={20} />
          <span>Cashier</span>
        </div>
      </div>
    </header>
  );
};