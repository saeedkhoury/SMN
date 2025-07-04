import React from 'react';
import { User, Mail, Phone, Calendar, Star, Award, LogOut } from 'lucide-react';

interface ProfileProps {
  onSignOut: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onSignOut }) => {
  const profileData = [
    { icon: User, label: 'Name', value: 'John Doe', color: 'text-blue-600' },
    { icon: Mail, label: 'Email', value: 'john.doe@example.com', color: 'text-green-600' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', color: 'text-purple-600' },
    { icon: Calendar, label: 'Member Since', value: '15.3.2019', color: 'text-orange-600' },
    { icon: Star, label: 'Loyalty Points', value: '1250', color: 'text-yellow-600' },
  ];

  const handleSignOut = () => {
    if (window.confirm('Are you sure you want to sign out?')) {
      onSignOut();
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-lg">
            <User className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Customer Profile</h2>
        </div>
        
        {/* Profile Avatar */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <User className="w-10 h-10 text-white" />
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {profileData.map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className={`p-2 bg-white rounded-lg shadow-sm`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 font-medium">{label}</div>
                <div className="text-gray-800 font-semibold">{value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Loyalty Status */}
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-yellow-600" />
            <span className="font-semibold text-gray-700">Loyalty Status</span>
          </div>
          <div className="text-2xl font-bold text-yellow-600 mb-1">Gold Member</div>
          <div className="text-sm text-gray-600">Next tier: 250 points to Platinum</div>
        </div>

        {/* Sign Out Button */}
        <div className="pt-6 border-t border-gray-200">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;