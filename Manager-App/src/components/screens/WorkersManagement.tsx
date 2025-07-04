import React from 'react';
import { Users, Edit, Trash2 } from 'lucide-react';

export const WorkersManagement: React.FC = () => {
  const workers = [
    { id: 1, name: 'John Smith', position: 'Senior Tech', status: 'Present', lastClock: '07:00 AM', statusColor: 'bg-green-100 text-green-800' },
    { id: 2, name: 'Sarah Johnson', position: 'Shift Lead', status: 'Present', lastClock: '07:15 AM', statusColor: 'bg-green-100 text-green-800' },
    { id: 3, name: 'Michael Brown', position: 'Technician', status: 'Absent', lastClock: 'Yesterday', statusColor: 'bg-red-100 text-red-800' },
    { id: 4, name: 'Emily Wilson', position: 'Trainee', status: 'Present', lastClock: '07:30 AM', statusColor: 'bg-green-100 text-green-800' },
  ];

  const presentCount = workers.filter(w => w.status === 'Present').length;
  const absentCount = workers.filter(w => w.status === 'Absent').length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Users className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">Workers Management</h1>
        </div>

        {/* Workers Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Name</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Position</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Status</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Last Clock</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {workers.map((worker) => (
                <tr key={worker.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-4 font-medium text-gray-900">{worker.name}</td>
                  <td className="py-4 px-4 text-gray-600">{worker.position}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${worker.statusColor}`}>
                      {worker.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{worker.lastClock}</td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-all duration-200">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-all duration-200">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Footer */}
        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <div className="flex justify-around text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">{presentCount}</div>
              <div className="text-sm text-gray-600">Present Today</div>
            </div>
            <div className="w-px bg-gray-300"></div>
            <div>
              <div className="text-2xl font-bold text-red-600">{absentCount}</div>
              <div className="text-sm text-gray-600">Absent Today</div>
            </div>
            <div className="w-px bg-gray-300"></div>
            <div>
              <div className="text-2xl font-bold text-indigo-600">{workers.length}</div>
              <div className="text-sm text-gray-600">Total Workers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};