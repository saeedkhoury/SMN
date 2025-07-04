import React, { useState, useEffect } from 'react';
import { Fuel, DollarSign, Gauge, Play, Square, AlertCircle } from 'lucide-react';

const FuelDispenser: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [gallons, setGallons] = useState(0);
  const [cost, setCost] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const pricePerGallon = 3.50;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive) {
      interval = setInterval(() => {
        setGallons(prev => {
          const newGallons = Math.min(prev + 0.1, 15);
          setCost(newGallons * pricePerGallon);
          
          if (newGallons >= 15) {
            setIsActive(false);
          }
          
          return newGallons;
        });
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, pricePerGallon]);

  const handlePumpGas = () => {
    if (!isActive && gallons < 15) {
      setShowMessage(true);
      // Hide message after 3 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    } else {
      setIsActive(false);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setGallons(0);
    setCost(0);
    setShowMessage(false);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="p-2 bg-green-100 rounded-lg">
            <Fuel className="w-6 h-6 text-green-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Fuel Dispenser</h2>
        </div>
        
        {/* Display */}
        <div className="bg-gray-900 rounded-xl p-6 mb-8 shadow-inner">
          <div className="flex items-center justify-center gap-2 mb-2">
            <DollarSign className="w-8 h-8 text-green-400" />
            <div className="text-5xl font-bold text-green-400 font-mono">
              {cost.toFixed(2)}
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-xl text-gray-300 font-mono">
            <Gauge className="w-5 h-5" />
            {gallons.toFixed(1)} gallons
          </div>
          {isActive && (
            <div className="mt-3 text-yellow-400 text-sm animate-pulse">
              ● PUMPING IN PROGRESS
            </div>
          )}
        </div>

        {/* Message Display */}
        {showMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-pulse">
            <div className="flex items-center gap-2 text-green-700">
              <AlertCircle className="w-5 h-5" />
              <p className="text-sm font-medium">You can start refueling now! Insert the gas gun into your car's fuel tank.</p>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="space-y-3 mb-8">
          <button
            onClick={handlePumpGas}
            disabled={gallons >= 15}
            className={`w-full font-bold py-4 px-6 rounded-xl text-white text-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-3 ${
              isActive
                ? 'bg-red-500 hover:bg-red-600'
                : gallons >= 15
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isActive ? (
              <>
                <Square className="w-6 h-6" />
                STOP PUMP
              </>
            ) : gallons >= 15 ? (
              'TANK FULL'
            ) : (
              <>
                <Play className="w-6 h-6" />
                PUMP GAS
              </>
            )}
          </button>

          {(gallons > 0 || cost > 0) && (
            <button
              onClick={handleReset}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
            >
              Reset
            </button>
          )}
        </div>

        <div className="text-sm text-gray-500 mb-8">
          {isActive 
            ? 'Pumping in progress...' 
            : gallons >= 15 
            ? 'Tank is full - transaction complete'
            : 'Click PUMP GAS to receive instructions'
          }
        </div>

        {/* Current Price */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center justify-center gap-2">
            <DollarSign className="w-5 h-5" />
            Current Fuel Price
          </h3>
          <div className="text-3xl font-bold text-blue-600">
            ${pricePerGallon.toFixed(2)}/gallon
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelDispenser;