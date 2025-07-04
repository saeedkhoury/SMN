import React, { useState } from 'react';
import { FileText, AlertTriangle } from 'lucide-react';

export const Reports: React.FC = () => {
  const [showProblemForm, setShowProblemForm] = useState(false);
  const [problemDescription, setProblemDescription] = useState('');

  const usageData = [
    { date: '2023-10-15', total: 1250, workers: 420, customers: 830, utilization: 68 },
    { date: '2023-10-14', total: 1180, workers: 390, customers: 790, utilization: 64 },
    { date: '2023-10-13', total: 1320, workers: 450, customers: 870, utilization: 72 },
    { date: '2023-10-12', total: 1095, workers: 350, customers: 745, utilization: 59 },
    { date: '2023-10-11', total: 1275, workers: 425, customers: 850, utilization: 69 },
  ];

  const handleSubmitProblem = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Problem reported successfully!');
    setProblemDescription('');
    setShowProblemForm(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <FileText className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">Fuel Usage Reports</h1>
        </div>

        {/* Usage Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Date</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Total</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Workers</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Customers</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Utilization</th>
              </tr>
            </thead>
            <tbody>
              {usageData.map((day) => (
                <tr key={day.date} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-4 font-medium text-gray-900">{day.date}</td>
                  <td className="py-4 px-4 text-gray-700">{day.total.toLocaleString()} gal</td>
                  <td className="py-4 px-4 text-gray-700">{day.workers.toLocaleString()} gal</td>
                  <td className="py-4 px-4 text-gray-700">{day.customers.toLocaleString()} gal</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${day.utilization}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{day.utilization}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fuel Utilization Summary */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Fuel Utilization Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-2">12,700</div>
              <div className="text-sm text-gray-600">Worker Usage (30 days)</div>
              <div className="text-xs text-gray-500">gallons</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">23,400</div>
              <div className="text-sm text-gray-600">Customer Usage (30 days)</div>
              <div className="text-xs text-gray-500">gallons</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-indigo-600 mb-2">36,100</div>
              <div className="text-sm text-gray-600">Total Fuel Usage</div>
              <div className="text-xs text-gray-500">gallons</div>
            </div>
          </div>
        </div>

        {/* Report Problem Button */}
        <button
          onClick={() => setShowProblemForm(true)}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <AlertTriangle className="w-5 h-5" />
          <span>Report a Problem</span>
        </button>
      </div>

      {/* Problem Report Modal */}
      {showProblemForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Report a Problem</h2>
            <form onSubmit={handleSubmitProblem}>
              <div className="mb-4">
                <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-2">
                  Problem Description
                </label>
                <textarea
                  id="problem"
                  value={problemDescription}
                  onChange={(e) => setProblemDescription(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 h-32 resize-none"
                  placeholder="Describe the problem you're experiencing..."
                  required
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowProblemForm(false)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
                >
                  Submit Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};