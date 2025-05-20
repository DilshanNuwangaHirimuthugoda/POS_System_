import { useContext } from 'react';
import { ChevronRight } from 'lucide-react';
import { POSContext } from '../../context/POSContext';

export const TransactionItem = ({ transaction }) => {
  const { setCurrentTransaction, setReceiptVisible, darkMode } = useContext(POSContext);

  const handleClick = () => {
    setCurrentTransaction(transaction);
    setReceiptVisible(true);
  };

  return (
    <div 
      className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow p-4 cursor-pointer hover:shadow-md`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium">Transaction #{transaction.id.toString().slice(-4)}</p>
          <p className="text-sm text-gray-500">
            {new Date(transaction.date).toLocaleString()}
          </p>
          <p className="text-sm mt-1">
            {transaction.items.length} {transaction.items.length === 1 ? 'item' : 'items'}
          </p>
        </div>
        <div className="flex items-center">
          <span className="font-bold mr-2">${transaction.total.toFixed(2)}</span>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};