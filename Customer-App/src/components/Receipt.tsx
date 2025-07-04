import React from 'react';
import { X, Receipt as ReceiptIcon, Calendar, Fuel, DollarSign, MapPin, CreditCard, Car, Clock } from 'lucide-react';
import { Transaction } from '../App';

interface ReceiptProps {
  transaction: Transaction;
  onClose: () => void;
}

const Receipt: React.FC<ReceiptProps> = ({ transaction, onClose }) => {
  const currentDate = new Date();
  const currentDateTime = currentDate.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const transactionDateTime = new Date(transaction.date + 'T14:30:00').toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <ReceiptIcon className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Digital Receipt</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Receipt Content */}
        <div className="p-6">
          {/* Station Header with Design */}
          <div className="text-center mb-8 pb-6 border-b-2 border-dashed border-gray-300 relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
            
            {/* Station Logo and Name */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-6 rounded-xl shadow-lg mb-4 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-2 left-2 w-8 h-8 border-2 border-white rounded-full"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-2 left-1/3 w-4 h-4 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-4 right-1/4 w-5 h-5 border-2 border-white rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="p-3 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
                    <Fuel className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold tracking-wide mb-1">SMN</h1>
                <div className="text-lg font-semibold text-blue-100 mb-1">Station Management Network</div>
                <div className="text-sm text-blue-200">Premium Fuel Services</div>
                <div className="mt-3 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 font-medium">{transaction.location}</p>
            <p className="text-xs text-gray-500 mt-1">Authorized Fuel Retailer</p>
          </div>

          {/* Transaction Details */}
          <div className="space-y-4 mb-6">
            {/* Car License Plate */}
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border-l-4 border-blue-500">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Car className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 font-medium">Vehicle License Plate</div>
                <div className="font-bold text-gray-800 text-lg tracking-wider">ABC-1234</div>
              </div>
            </div>

            {/* Date and Time */}
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
              <div className="p-2 bg-green-100 rounded-lg">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 font-medium">Transaction Date & Time</div>
                <div className="font-semibold text-gray-800">{transactionDateTime}</div>
              </div>
            </div>

            {/* Transaction ID */}
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-l-4 border-purple-500">
              <div className="p-2 bg-purple-100 rounded-lg">
                <ReceiptIcon className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 font-medium">Transaction ID</div>
                <div className="font-mono font-semibold text-gray-800 text-lg">{transaction.id}</div>
              </div>
            </div>

            {/* Fuel Amount */}
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border-l-4 border-orange-500">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Fuel className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 font-medium">Fuel Dispensed</div>
                <div className="font-bold text-gray-800 text-xl">{transaction.gallons} Gallons</div>
                <div className="text-sm text-gray-600">Premium Unleaded Gasoline</div>
              </div>
            </div>

            {/* Price per Gallon */}
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border-l-4 border-yellow-500">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 font-medium">Price per Gallon</div>
                <div className="font-bold text-gray-800 text-xl">${transaction.pricePerGallon.toFixed(2)}</div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg border-l-4 border-indigo-500">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <CreditCard className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 font-medium">Payment Method</div>
                <div className="font-semibold text-gray-800">{transaction.paymentMethod}</div>
                <div className="text-sm text-green-600 font-medium">✓ Payment Approved</div>
              </div>
            </div>
          </div>

          {/* Calculation Breakdown */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6 border-2 border-dashed border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-3 text-center">Calculation Breakdown</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Gallons:</span>
                <span className="font-mono font-semibold">{transaction.gallons}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Price per Gallon:</span>
                <span className="font-mono font-semibold">${transaction.pricePerGallon.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-300 pt-2 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-mono font-semibold">${transaction.cost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tax:</span>
                  <span className="font-mono font-semibold">$0.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Total Amount */}
          <div className="border-2 border-blue-200 rounded-xl p-6 mb-6 bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-700 mb-2">Total Amount</div>
              <div className="text-4xl font-bold text-blue-600 mb-2">${transaction.cost.toFixed(2)}</div>
              <div className="text-sm text-gray-600">Amount Charged</div>
            </div>
          </div>

          {/* Footer Information */}
          <div className="text-center text-sm text-gray-500 border-t-2 border-dashed border-gray-300 pt-6 space-y-2">
            <p className="font-semibold text-gray-700">Thank you for choosing SMN!</p>
            <p>Your trusted fuel partner since 2019</p>
            <p className="text-xs">Receipt generated on {currentDateTime}</p>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-400">
                For customer service: 1-800-SMN-FUEL | www.smn-stations.com
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Keep this receipt for your records
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
          <div className="flex gap-3">
            <button
              onClick={() => window.print()}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <ReceiptIcon className="w-5 h-5" />
              Print Receipt
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;