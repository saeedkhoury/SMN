import React from 'react';
import { Home, Users, Fuel, FileText, UserCheck } from 'lucide-react';

interface BottomNavigationProps {
  currentScreen: string;
  onNavigate: (screen: 'dashboard' | 'workers' | 'tanks' | 'reports' | 'customers') => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ currentScreen, onNavigate }) => {
  const tabs = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'workers', icon: Users, label: 'Workers' },
    { id: 'tanks', icon: Fuel, label: 'Tanks' },
    { id: 'reports', icon: FileText, label: 'Reports' },
    { id: 'customers', icon: UserCheck, label: 'Customers' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 shadow-lg">
      <div className="flex justify-around max-w-md mx-auto">
        {tabs.map(({ id, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onNavigate(id as any)}
            className={`p-3 rounded-full transition-all duration-200 ${
              currentScreen === id
                ? 'bg-green-500 text-white shadow-lg scale-110'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Icon className="w-6 h-6" />
          </button>
        ))}
      </div>
    </nav>
  );
};