import React from 'react';
import { BarChart3, TrendingUp, DollarSign, Fuel } from 'lucide-react';
import { Transaction } from '../App';

type Screen = 'dashboard' | 'profile' | 'dispenser' | 'history' | 'car';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
  transactions: Transaction[];
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate, transactions }) => {
  const recentTransactions = transactions.slice(0, 2);
  const currentFuelPrice = 3.50;

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      {/* Dashboard Overview Card */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-lg">
            <BarChart3 className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Dashboard Overview</h2>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => onNavigate('dispenser')}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Start Refueling
              </button>
              <button
                onClick={() => onNavigate('car')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                View Car Details
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Recent Activity
          </h3>
          <div className="space-y-3">
            {recentTransactions.map((transaction, index) => (
              <div key={index} className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <Fuel className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Refueling: {transaction.gallons} gallons
                  </span>
                </div>
                <span className="font-bold text-gray-800 text-lg">
                  ${transaction.cost.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Fuel Price */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            Current Fuel Price
          </h3>
          <div className="text-4xl font-bold text-blue-600 mb-2">
            ${currentFuelPrice.toFixed(2)}/gallon
          </div>
          <p className="text-sm text-gray-600">Updated just now</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;