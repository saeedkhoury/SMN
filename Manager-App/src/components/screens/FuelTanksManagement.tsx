import React from 'react';
import { Fuel } from 'lucide-react';

export const FuelTanksManagement: React.FC = () => {
  const tanks = [
    { 
      type: 'Unleaded', 
      current: 3500, 
      capacity: 10000, 
      lastOrdered: '2023-10-05',
      percentage: 35,
      color: 'bg-orange-500'
    },
    { 
      type: 'Diesel', 
      current: 2800, 
      capacity: 10000, 
      lastOrdered: '2023-10-01',
      percentage: 28,
      color: 'bg-orange-500'
    },
    { 
      type: 'Premium', 
      current: 1800, 
      capacity: 8000, 
      lastOrdered: '2023-09-28',
      percentage: 23,
      color: 'bg-red-500'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Fuel className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">Fuel Tanks Management</h1>
        </div>

        {/* Tank Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {tanks.map((tank) => (
            <div key={tank.type} className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{tank.type} Tank</h3>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Current Level:</span>
                  <span className="font-semibold text-gray-900">
                    {tank.current.toLocaleString()} / {tank.capacity.toLocaleString()} gallons
                  </span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div 
                    className={`${tank.color} h-4 rounded-full transition-all duration-300`}
                    style={{ width: `${tank.percentage}%` }}
                  ></div>
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm font-medium text-gray-700">{tank.percentage}%</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm text-gray-600">Last Ordered: </span>
                <span className="font-medium text-gray-900">{tank.lastOrdered}</span>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105">
                Order Fuel
              </button>
            </div>
          ))}
        </div>

        {/* Fuel Usage Trends */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Fuel Usage Trends</h3>
          
          {/* Simple Bar Chart Representation */}
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 h-32 rounded-lg mb-2 flex items-end justify-center">
                <div className="bg-orange-500 w-12 h-20 rounded-t-lg"></div>
              </div>
              <span className="text-sm font-medium text-gray-700">Unleaded</span>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-32 rounded-lg mb-2 flex items-end justify-center">
                <div className="bg-orange-500 w-12 h-16 rounded-t-lg"></div>
              </div>
              <span className="text-sm font-medium text-gray-700">Diesel</span>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-32 rounded-lg mb-2 flex items-end justify-center">
                <div className="bg-red-500 w-12 h-12 rounded-t-lg"></div>
              </div>
              <span className="text-sm font-medium text-gray-700">Premium</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};