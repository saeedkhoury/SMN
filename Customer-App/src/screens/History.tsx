import React from 'react';
import { BarChart3, Receipt, TrendingUp, DollarSign } from 'lucide-react';
import { Transaction } from '../App';

interface HistoryProps {
  transactions: Transaction[];
  onViewReceipt: (transaction: Transaction) => void;
}

const History: React.FC<HistoryProps> = ({ transactions, onViewReceipt }) => {
  const totalGallons = transactions.reduce((sum, record) => sum + record.gallons, 0);
  const totalCost = transactions.reduce((sum, record) => sum + record.cost, 0);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-lg">
            <BarChart3 className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Refueling History</h2>
        </div>

        {/* History Table */}
        <div className="overflow-x-auto mb-8">
          <div className="min-w-full">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 py-3 px-4 bg-gray-50 rounded-t-lg border-b border-gray-200">
              <div className="text-left font-semibold text-gray-600 text-sm uppercase tracking-wide">Date</div>
              <div className="text-center font-semibold text-gray-600 text-sm uppercase tracking-wide">Gallons</div>
              <div className="text-center font-semibold text-gray-600 text-sm uppercase tracking-wide">Cost ($)</div>
              <div className="text-center font-semibold text-gray-600 text-sm uppercase tracking-wide">Receipt</div>
            </div>
            
            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {transactions.map((record, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 py-4 px-4 hover:bg-gray-50 transition-colors">
                  <div className="text-gray-700 font-medium">{record.date}</div>
                  <div className="text-center text-gray-700 font-mono">{record.gallons}</div>
                  <div className="text-center text-gray-700 font-mono font-semibold">{record.cost.toFixed(2)}</div>
                  <div className="text-center">
                    <button
                      onClick={() => onViewReceipt(record)}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium rounded-lg transition-colors"
                    >
                      <Receipt className="w-4 h-4" />
                      View Receipt
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-200 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700">Total Fuel Usage</h3>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-1">
              {totalGallons.toFixed(1)} gallons
            </div>
            <div className="text-sm text-gray-600">
              Average: {(totalGallons / transactions.length).toFixed(1)} gallons per fill-up
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-200 rounded-lg">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700">Total Cost</h3>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-1">
              ${totalCost.toFixed(2)}
            </div>
            <div className="text-sm text-gray-600">
              Average: ${(totalCost / transactions.length).toFixed(2)} per fill-up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;