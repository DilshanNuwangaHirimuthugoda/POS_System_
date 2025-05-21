import { useContext } from 'react';
import { POSContext } from '../../context/POSContext';

export const ReceiptSettings = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center">
        <input type="checkbox" id="print-receipt" defaultChecked className="mr-2" />
        <label htmlFor="print-receipt">Automatically print receipt</label>
      </div>
      <div className="flex items-center">
        <input type="checkbox" id="include-tax" defaultChecked className="mr-2" />
        <label htmlFor="include-tax">Include tax information</label>
      </div>
    </div>
  );
};