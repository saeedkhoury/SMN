import React from 'react';
import { Fuel, TrendingUp, Users, DollarSign } from 'lucide-react';

interface DashboardProps {
  onNavigateToProfile: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigateToProfile }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Header Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Fuel className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">Manager Dashboard</h1>
        </div>
        
        {/* Quick Actions */}
        <div className="bg-blue-50 rounded-xl p-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105">
              Update Fuel Prices
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105">
              Order Fuel Trucks
            </button>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Today's Statistics */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Total Fuel Usage:</span>
                <span className="text-2xl font-bold text-blue-600">3,580 gallons</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Worker Usage:</span>
                <span className="text-xl font-bold text-green-600">1,270 gallons</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Customer Usage:</span>
                <span className="text-xl font-bold text-purple-600">2,310 gallons</span>
              </div>
            </div>
          </div>

          {/* Fuel Tank Status */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Fuel Tank Status</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Unleaded</span>
                  <span className="font-semibold">35%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3">
                  <div className="bg-orange-500 h-3 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Diesel</span>
                  <span className="font-semibold">28%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3">
                  <div className="bg-orange-500 h-3 rounded-full" style={{ width: '28%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Premium</span>
                  <span className="font-semibold">23%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full" style={{ width: '23%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Fuel Orders */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Fuel Orders</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
              <div>
                <span className="font-medium text-gray-900">Unleaded: 2023-10-05</span>
                <span className="text-gray-600 ml-4">3,500 / 10,000 gallons</span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200">
                Order More
              </button>
            </div>
            <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
              <div>
                <span className="font-medium text-gray-900">Diesel: 2023-10-01</span>
                <span className="text-gray-600 ml-4">2,800 / 10,000 gallons</span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200">
                Order More
              </button>
            </div>
            <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
              <div>
                <span className="font-medium text-gray-900">Premium: 2023-09-28</span>
                <span className="text-gray-600 ml-4">1,800 / 8,000 gallons</span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200">
                Order More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};