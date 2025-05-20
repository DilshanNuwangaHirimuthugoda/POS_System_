import { useContext } from 'react';
import { POSContext } from '../../context/POSContext';

export const SearchBar = () => {
  const { searchTerm, setSearchTerm, darkMode } = useContext(POSContext);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products..."
        className={`pl-4 pr-10 py-2 rounded-lg w-full md:w-64 ${darkMode ? 'bg-gray-700' : 'bg-white'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};