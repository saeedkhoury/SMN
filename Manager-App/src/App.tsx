import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNavigation } from './components/BottomNavigation';
import { LoginScreen } from './components/auth/LoginScreen';
import { SignUpScreen } from './components/auth/SignUpScreen';
import { Dashboard } from './components/screens/Dashboard';
import { WorkersManagement } from './components/screens/WorkersManagement';
import { FuelTanksManagement } from './components/screens/FuelTanksManagement';
import { Reports } from './components/screens/Reports';
import { CustomerManagement } from './components/screens/CustomerManagement';
import { ManagerProfile } from './components/screens/ManagerProfile';

type Screen = 'login' | 'signup' | 'dashboard' | 'workers' | 'tanks' | 'reports' | 'customers' | 'profile';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentScreen('login');
  };

  const renderScreen = () => {
    if (!isAuthenticated) {
      switch (currentScreen) {
        case 'signup':
          return <SignUpScreen onNavigateToLogin={() => setCurrentScreen('login')} onSignUp={handleLogin} />;
        default:
          return <LoginScreen onNavigateToSignUp={() => setCurrentScreen('signup')} onLogin={handleLogin} />;
      }
    }

    switch (currentScreen) {
      case 'workers':
        return <WorkersManagement />;
      case 'tanks':
        return <FuelTanksManagement />;
      case 'reports':
        return <Reports />;
      case 'customers':
        return <CustomerManagement />;
      case 'profile':
        return <ManagerProfile onLogout={handleLogout} />;
      default:
        return <Dashboard onNavigateToProfile={() => setCurrentScreen('profile')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {isAuthenticated && <Header />}
      
      <main className="flex-1 overflow-auto pb-20">
        {renderScreen()}
      </main>
      
      {isAuthenticated && (
        <BottomNavigation 
          currentScreen={currentScreen}
          onNavigate={setCurrentScreen}
        />
      )}
    </div>
  );
}

export default App;