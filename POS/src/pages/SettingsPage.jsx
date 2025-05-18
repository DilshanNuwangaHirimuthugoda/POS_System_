import { useContext } from 'react';
import { POSContext } from '../context/POSContext';
import { ThemeToggle } from '../Components/pos/ThemeToggle';
import { StoreInfoForm } from '../Components/settings/StoreInfoForm';
import { ReceiptSettings } from '../Components/settings/ReceiptSettings';

export const SettingsPage = () => {
  const { darkMode } = useContext(POSContext);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Settings</h2>
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow p-6`}>
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Appearance</h3>
          <ThemeToggle />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Store Information</h3>
          <StoreInfoForm />
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Receipt Settings</h3>
          <ReceiptSettings />
        </div>
      </div>
    </div>
  );
};