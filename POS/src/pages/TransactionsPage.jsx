import { useContext } from 'react';
import { FileText } from 'lucide-react';
import { POSContext } from '../context/POSContext';
import { TransactionItem } from '../Components/pos/TransactionItem';

export const TransactionsPage = () => {
  const { transactions, totalSales, darkMode } = useContext(POSContext);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Transactions</h2>
      <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-4 mb-6">
        <h3 className="font-medium text-blue-800 dark:text-blue-200">Total Sales</h3>
        <p className="text-2xl font-bold">${totalSales.toFixed(2)}</p>
      </div>
      
      {transactions.length === 0 ? (
        <div className={`p-8 text-center ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow`}>
          <FileText size={48} className="mx-auto mb-4 text-gray-400" />
          <p className="text-gray-500">No transactions yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {transactions.map(transaction => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </div>
      )}
    </div>
  );
};