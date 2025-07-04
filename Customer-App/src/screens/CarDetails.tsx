import React from 'react';
import { Car, Calendar, CreditCard, Fuel, Gauge, Settings } from 'lucide-react';

const CarDetails: React.FC = () => {
  const carData = [
    { icon: Car, label: 'Make', value: 'Toyota', color: 'text-blue-600' },
    { icon: Car, label: 'Model', value: 'Camry', color: 'text-blue-600' },
    { icon: Calendar, label: 'Year', value: '2020', color: 'text-green-600' },
    { icon: CreditCard, label: 'License Plate', value: 'ABC-1234', color: 'text-purple-600' },
    { icon: Fuel, label: 'Fuel Type', value: 'Unleaded', color: 'text-orange-600' },
  ];

  const fuelLevel = 15;
  const fuelCapacity = 50;
  const fuelPercentage = (fuelLevel / fuelCapacity) * 100;

  const getFuelLevelColor = (percentage: number) => {
    if (percentage <= 25) return 'bg-red-500';
    if (percentage <= 50) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getFuelLevelStatus = (percentage: number) => {
    if (percentage <= 25) return 'Low Fuel - Refuel Soon';
    if (percentage <= 50) return 'Moderate Fuel Level';
    return 'Good Fuel Level';
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Car className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Car Details</h2>
        </div>
        
        {/* Car Info */}
        <div className="space-y-4 mb-8">
          {carData.map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 font-medium">{label}</div>
                <div className="text-gray-800 font-semibold">{value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Fuel Level */}
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Gauge className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-700">Fuel Level</div>
              <div className="text-sm text-gray-500">{getFuelLevelStatus(fuelPercentage)}</div>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span className="font-medium">{fuelLevel} gallons</span>
              <span className="font-medium">{fuelCapacity} gallons</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner">
              <div
                className={`h-4 rounded-full transition-all duration-500 ${getFuelLevelColor(fuelPercentage)}`}
                style={{ width: `${fuelPercentage}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800">{fuelPercentage.toFixed(0)}%</div>
              <div className="text-sm text-gray-500">Full</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-gray-700">{fuelCapacity - fuelLevel} gal</div>
              <div className="text-sm text-gray-500">Remaining capacity</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <button className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
            <Settings className="w-5 h-5" />
            Edit Car Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;