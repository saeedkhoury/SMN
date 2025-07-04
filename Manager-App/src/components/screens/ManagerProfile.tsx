import React from 'react';
import { User, Mail, Phone, Building, CreditCard, LogOut } from 'lucide-react';

interface ManagerProfileProps {
  onLogout: () => void;
}

export const ManagerProfile: React.FC<ManagerProfileProps> = ({ onLogout }) => {
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to sign out?')) {
      onLogout();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <User className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">Personal Profile</h1>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <User className="w-6 h-6 text-gray-600" />
            <div>
              <div className="text-sm text-gray-600">Name</div>
              <div className="text-lg font-semibold text-gray-900">Amir Lacham</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <CreditCard className="w-6 h-6 text-gray-600" />
            <div>
              <div className="text-sm text-gray-600">Manager ID</div>
              <div className="text-lg font-semibold text-gray-900">MGR-1234</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <Building className="w-6 h-6 text-gray-600" />
            <div>
              <div className="text-sm text-gray-600">Station</div>
              <div className="text-lg font-semibold text-gray-900">Main Street #42</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <Mail className="w-6 h-6 text-gray-600" />
            <div>
              <div className="text-sm text-gray-600">Email</div>
              <div className="text-lg font-semibold text-gray-900">amir.lacham@smn.com</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <Phone className="w-6 h-6 text-gray-600" />
            <div>
              <div className="text-sm text-gray-600">Phone</div>
              <div className="text-lg font-semibold text-gray-900">+1 (555) 234-5678</div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <LogOut className="w-5 h-5" />
            <span>SIGN OUT</span>
          </button>
        </div>
      </div>
    </div>
  );
};