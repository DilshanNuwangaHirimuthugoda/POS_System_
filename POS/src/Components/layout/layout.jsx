import { useContext } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { CartPanel } from '../pos/CartPanel';
import { POSContext } from '../../context/POSContext';

export const Layout = ({ children }) => {
  const { darkMode } = useContext(POSContext);

  return (
    <div className={`flex flex-col h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <div className="flex-1 flex overflow-hidden">
          {/* Main Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {children}
          </div>
          
          {/* Cart Panel */}
          <CartPanel />
        </div>
      </div>
    </div>
  );
};