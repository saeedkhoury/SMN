import React from 'react';
import { UserCheck } from 'lucide-react';

export const CustomerManagement: React.FC = () => {
  const weeklyActivity = [
    { day: 'Mon', value: 85 },
    { day: 'Tue', value: 45 },
    { day: 'Wed', value: 65 },
    { day: 'Thu', value: 90 },
    { day: 'Fri', value: 55 },
    { day: 'Sat', value: 80 },
    { day: 'Sun', value: 40 },
  ];

  const maxValue = Math.max(...weeklyActivity.map(d => d.value));

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <UserCheck className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">Customer Management</h1>
        </div>

        {/* Top Row - Statistics and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Customer Statistics */}
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Customers Today:</span>
                <span className="text-3xl font-bold text-blue-600">145</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Yesterday:</span>
                <span className="text-xl font-semibold text-gray-900">120</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Average:</span>
                <span className="text-xl font-semibold text-gray-900">132</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Growth:</span>
                <span className="text-xl font-bold text-green-600">+12%</span>
              </div>
            </div>
          </div>

          {/* Customer Activity Chart */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Activity</h3>
            <div className="flex items-end justify-between h-40 space-x-2">
              {weeklyActivity.map((day) => (
                <div key={day.day} className="flex flex-col items-center flex-1">
                  <div className="w-full bg-gray-200 rounded-t-lg flex items-end justify-center h-32">
                    <div 
                      className="bg-blue-500 w-full rounded-t-lg transition-all duration-300"
                      style={{ height: `${(day.value / maxValue) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-medium text-gray-600 mt-2">{day.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Transactions */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Customer Transactions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-2">$58,420</div>
              <div className="text-sm text-gray-600">Monthly Revenue</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">92%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-lg font-bold text-indigo-600 mb-2">7-9 AM, 4-7 PM</div>
              <div className="text-sm text-gray-600">Peak Hours</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};