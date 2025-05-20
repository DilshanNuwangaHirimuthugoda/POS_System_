import { useContext } from 'react';
import { POSContext } from '../../context/POSContext';

export const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(POSContext);

  return (
    <div className="flex items-center justify-between">
      <span>Dark Mode</span>
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className={`w-12 h-6 rounded-full p-1 transition-colors ${darkMode ? 'bg-blue-500' : 'bg-gray-300'}`}
      >
        <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${darkMode ? 'translate-x-6' : ''}`}></div>
      </button>
    </div>
  );
};