import React, { useState } from 'react';
import { Home, User, Fuel, BarChart3, Car } from 'lucide-react';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import FuelDispenser from './screens/FuelDispenser';
import History from './screens/History';
import CarDetails from './screens/CarDetails';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Receipt from './components/Receipt';

type Screen = 'dashboard' | 'profile' | 'dispenser' | 'history' | 'car' | 'signin' | 'signup';

export interface Transaction {
  id: string;
  date: string;
  gallons: number;
  cost: number;
  pricePerGallon: number;
  location: string;
  paymentMethod: string;
}

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('signin');
  const [selectedReceipt, setSelectedReceipt] = useState<Transaction | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const transactions: Transaction[] = [
    {
      id: 'TXN-001',
      date: '2023-10-15',
      gallons: 12.5,
      cost: 43.75,
      pricePerGallon: 3.50,
      location: 'Station #1 - Main St',
      paymentMethod: 'Credit Card ****1234'
    },
    {
      id: 'TXN-002',
      date: '2023-10-08',
      gallons: 10.2,
      cost: 35.70,
      pricePerGallon: 3.50,
      location: 'Station #1 - Main St',
      paymentMethod: 'Credit Card ****1234'
    },
    {
      id: 'TXN-003',
      date: '2023-10-01',
      gallons: 8.7,
      cost: 30.45,
      pricePerGallon: 3.50,
      location: 'Station #1 - Main St',
      paymentMethod: 'Credit Card ****1234'
    },
    {
      id: 'TXN-004',
      date: '2023-09-24',
      gallons: 15.0,
      cost: 52.50,
      pricePerGallon: 3.50,
      location: 'Station #1 - Main St',
      paymentMethod: 'Credit Card ****1234'
    }
  ];

  const handleSignIn = () => {
    setIsAuthenticated(true);
    setCurrentScreen('dashboard');
  };

  const handleSignUp = () => {
    setIsAuthenticated(true);
    setCurrentScreen('dashboard');
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setCurrentScreen('signin');
  };

  const renderScreen = () => {
    if (!isAuthenticated) {
      switch (currentScreen) {
        case 'signin':
          return (
            <SignIn 
              onNavigateToSignUp={() => setCurrentScreen('signup')}
              onSignIn={handleSignIn}
            />
          );
        case 'signup':
          return (
            <SignUp 
              onNavigateToSignIn={() => setCurrentScreen('signin')}
              onSignUp={handleSignUp}
            />
          );
        default:
          return (
            <SignIn 
              onNavigateToSignUp={() => setCurrentScreen('signup')}
              onSignIn={handleSignIn}
            />
          );
      }
    }

    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentScreen} transactions={transactions} />;
      case 'profile':
        return <Profile onSignOut={handleSignOut} />;
      case 'dispenser':
        return <FuelDispenser />;
      case 'history':
        return <History transactions={transactions} onViewReceipt={setSelectedReceipt} />;
      case 'car':
        return <CarDetails />;
      default:
        return <Dashboard onNavigate={setCurrentScreen} transactions={transactions} />;
    }
  };

  const navItems = [
    { id: 'dashboard' as Screen, icon: Home, label: 'Home' },
    { id: 'profile' as Screen, icon: User, label: 'Profile' },
    { id: 'dispenser' as Screen, icon: Fuel, label: 'Pump' },
    { id: 'history' as Screen, icon: BarChart3, label: 'History' },
    { id: 'car' as Screen, icon: Car, label: 'Car' },
  ];

  // If not authenticated, show auth screens without navigation
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen">
        {renderScreen()}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-lg sticky top-0 z-40">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
            <Fuel className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Station Management Network</h1>
            <p className="text-blue-100 text-sm">Gas Station Management System</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20 min-h-[calc(100vh-140px)]">
        {renderScreen()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 shadow-lg z-30">
        <div className="flex justify-around items-center max-w-md mx-auto">
          {navItems.map(({ id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setCurrentScreen(id)}
              className={`p-3 rounded-full transition-all duration-300 transform ${
                currentScreen === id
                  ? 'bg-blue-600 text-white shadow-lg scale-110'
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-6 h-6" />
            </button>
          ))}
        </div>
      </nav>

      {/* Receipt Modal */}
      {selectedReceipt && (
        <Receipt 
          transaction={selectedReceipt} 
          onClose={() => setSelectedReceipt(null)} 
        />
      )}
    </div>
  );
}

export default App;