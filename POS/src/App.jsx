import { useContext } from 'react';
import { Layout } from './components/layout/Layout';
import { POSContext } from './context/POSContext';
import { ProductsPage } from './pages/ProductsPage';
import { TransactionsPage } from './pages/TransactionsPage';
import { SettingsPage } from './pages/SettingsPage';
import { Receipt } from './components/pos/Receipt';

function App() {
  const { activeTab, receiptVisible } = useContext(POSContext);

  return (
    <Layout>
      {activeTab === 'products' && <ProductsPage />}
      {activeTab === 'transactions' && <TransactionsPage />}
      {activeTab === 'settings' && <SettingsPage />}
      {receiptVisible && <Receipt />}
    </Layout>
  );
}

export default App;