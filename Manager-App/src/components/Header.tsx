import React from 'react';
import { Fuel } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white px-4 py-3 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Fuel className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold">SMN</h1>
            <p className="text-sm text-indigo-200">Station Management Network</p>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-lg font-semibold">Manager Portal</p>
        </div>
      </div>
    </header>
  );
};