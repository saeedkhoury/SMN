import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Clock, 
  BarChart3, 
  BookOpen, 
  Fuel,
  Calendar,
  DollarSign,
  Building2,
  CreditCard,
  LogOut,
  AlertTriangle
} from 'lucide-react';
import AuthPage from './components/AuthPage';
import ReportProblemModal from './components/ReportProblemModal';

interface WorkHistoryEntry {
  date: string;
  shift: string;
  status: string;
  hoursWorked: number;
}

interface TrainingCourse {
  id: number;
  title: string;
  description: string;
  duration: number;
  lastCompleted: string;
}

interface User {
  email: string;
  name: string;
  employeeId: string;
}

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [lastClockTime, setLastClockTime] = useState<Date | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showReportModal, setShowReportModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const workHistory: WorkHistoryEntry[] = [
    { date: '11.5.2025', shift: 'Day Shift', status: 'Completed', hoursWorked: 8.0 },
    { date: '10.5.2025', shift: 'Day Shift', status: 'Completed', hoursWorked: 7.5 },
    { date: '9.5.2025', shift: 'Day Shift', status: 'Completed', hoursWorked: 8.0 },
    { date: '8.5.2025', shift: 'Day Shift', status: 'Completed', hoursWorked: 8.5 },
    { date: '7.5.2025', shift: 'Day Shift', status: 'Completed', hoursWorked: 7.0 },
  ];

  const trainingCourses: TrainingCourse[] = [
    {
      id: 1,
      title: 'Gas Pump Maintenance',
      description: 'Comprehensive guide to daily maintenance and troubleshooting of fuel dispensers',
      duration: 45,
      lastCompleted: '2023-10-10'
    },
    {
      id: 2,
      title: 'Safety Procedures',
      description: 'Emergency protocols and safety guidelines for gas station operations',
      duration: 30,
      lastCompleted: '2023-09-28'
    },
    {
      id: 3,
      title: 'Customer Service',
      description: 'Best practices for customer interaction and conflict resolution',
      duration: 25,
      lastCompleted: '2023-10-05'
    }
  ];

  const handleLogin = (email: string, password: string) => {
    // Demo login - in real app, this would validate against backend
    setUser({
      email,
      name: 'John Smith',
      employeeId: 'EMP-4567'
    });
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setActiveTab(0);
    setIsClockedIn(false);
    setLastClockTime(null);
  };

  const handleClockInOut = () => {
    setIsClockedIn(!isClockedIn);
    setLastClockTime(new Date());
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatHours = (hours: number) => {
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * 60);
    if (minutes === 0) {
      return `${wholeHours}h`;
    }
    return `${wholeHours}h ${minutes}m`;
  };

  const tabs = [
    { icon: Home, label: 'Home' },
    { icon: User, label: 'Personal' },
    { icon: Clock, label: 'Clock' },
    { icon: BarChart3, label: 'History' },
    { icon: BookOpen, label: 'Training' }
  ];

  // Show auth page if not authenticated
  if (!isAuthenticated) {
    return <AuthPage onLogin={handleLogin} />;
  }

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
          <Home className="mr-2 text-blue-600" size={24} />
          Worker Dashboard
        </h2>
        
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-4">Shift Status</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Current Shift:</span>
              <span className="font-medium">Day Shift (7AM–3PM)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Clock Status:</span>
              <span className={`font-medium ${isClockedIn ? 'text-green-600' : 'text-red-600'}`}>
                {isClockedIn ? 'Clocked In' : 'Clocked Out'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Last Clock Time:</span>
              <span className="font-medium">
                {lastClockTime ? formatTime(lastClockTime) : 'N/A'}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-4">Recent Training</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2">
              <span>Gas Pump Maintenance</span>
              <span className="text-gray-500">2023-10-10</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span>Safety Procedures</span>
              <span className="text-gray-500">2023-09-28</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Work Schedule</h3>
          <div className="text-center">
            <div className="text-lg font-semibold text-blue-600 mb-2">
              Today: Day Shift (7AM–3PM)
            </div>
            <div className="text-gray-500">
              Next Shift: Tomorrow – Night Shift (3PM–11PM)
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPersonal = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
          <User className="mr-2 text-blue-600" size={24} />
          Personal Information
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <User className="mr-3 text-gray-400" size={20} />
            <span className="text-gray-600 w-24">Name:</span>
            <span className="font-medium">{user?.name}</span>
          </div>
          
          <div className="flex items-center">
            <User className="mr-3 text-gray-400" size={20} />
            <span className="text-gray-600 w-24">Employee ID:</span>
            <span className="font-medium">{user?.employeeId}</span>
          </div>
          
          <div className="flex items-center">
            <User className="mr-3 text-gray-400" size={20} />
            <span className="text-gray-600 w-24">Position:</span>
            <span className="font-medium">Senior Technician</span>
          </div>
          
          <div className="flex items-center">
            <Calendar className="mr-3 text-gray-400" size={20} />
            <span className="text-gray-600 w-24">Join Date:</span>
            <span className="font-medium">20.5.2020</span>
          </div>
          
          <div className="flex items-center">
            <Clock className="mr-3 text-gray-400" size={20} />
            <span className="text-gray-600 w-24">Shift:</span>
            <span className="font-medium">Day Shift (7AM–3PM)</span>
          </div>
          
          <div className="pt-4 border-t">
            <div className="flex items-start">
              <Building2 className="mr-3 text-gray-400 mt-1" size={20} />
              <div>
                <span className="text-gray-600 block mb-2">Bank Info:</span>
                <div className="ml-4 space-y-1 text-sm">
                  <div>Bank: National Worker Bank</div>
                  <div>Account: **** 6789</div>
                  <div>Routing: 123456789</div>
                  <div>Account Type: Checking</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sign Out Button */}
        <div className="pt-6 border-t mt-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            <LogOut className="mr-2" size={20} />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );

  const renderClock = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-8">Clock In/Out</h2>
        
        <div className="mb-8">
          <div className={`text-2xl font-bold mb-2 ${isClockedIn ? 'text-green-600' : 'text-blue-600'}`}>
            {isClockedIn ? 'Clocked In' : 'Not Clocked In'}
          </div>
          <div className="text-gray-500">
            Current Time: {formatTime(currentTime)}
          </div>
        </div>

        <button
          onClick={handleClockInOut}
          className={`w-full py-4 rounded-lg font-semibold text-white text-lg transition-colors ${
            isClockedIn 
              ? 'bg-red-500 hover:bg-red-600' 
              : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {isClockedIn ? 'CLOCK OUT' : 'CLOCK IN'}
        </button>
        
        <p className="text-xs text-gray-400 mt-2">Click to update your status</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Shift Schedule</h3>
        <div className="text-center">
          <div className="text-lg font-semibold text-blue-600 mb-2">
            Today: Day Shift (7AM–3PM)
          </div>
          <div className="text-gray-500">
            Next Shift: Tomorrow – Night Shift
          </div>
        </div>
      </div>
    </div>
  );

  const renderHistory = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
          <BarChart3 className="mr-2 text-blue-600" size={24} />
          Work History
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 text-gray-600 font-medium">Date</th>
                <th className="text-left py-2 text-gray-600 font-medium">Shift</th>
                <th className="text-left py-2 text-gray-600 font-medium">Hours</th>
                <th className="text-left py-2 text-gray-600 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {workHistory.map((entry, index) => (
                <tr key={index} className={`border-b ${index === 3 ? 'bg-yellow-50' : ''}`}>
                  <td className="py-3">{entry.date}</td>
                  <td className="py-3">{entry.shift}</td>
                  <td className="py-3 font-medium text-blue-600">{formatHours(entry.hoursWorked)}</td>
                  <td className="py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {entry.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Performance Metrics</h3>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Shifts Completed</span>
              <span className="text-sm text-gray-500">24/26 (92%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Training Progress</span>
              <span className="text-sm text-gray-500">3/3 (100%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Average Hours/Day</span>
              <span className="text-sm text-gray-500">{formatHours(workHistory.reduce((sum, entry) => sum + entry.hoursWorked, 0) / workHistory.length)}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '95%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTraining = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
          <BookOpen className="mr-2 text-blue-600" size={24} />
          Training Materials
        </h2>
        
        <div className="space-y-6">
          {trainingCourses.map((course) => (
            <div key={course.id} className="border-b pb-6 last:border-b-0">
              <h3 className="font-semibold text-gray-800 text-lg mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-3">{course.description}</p>
              
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-500">Duration: {course.duration} mins</span>
                <span className="text-sm text-green-600">Last Completed: {course.lastCompleted}</span>
              </div>
              
              <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition-colors">
                Start Training
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 0: return renderDashboard();
      case 1: return renderPersonal();
      case 2: return renderClock();
      case 3: return renderHistory();
      case 4: return renderTraining();
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Top App Bar */}
      <div className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-white rounded-full p-2 mr-3">
              <Fuel className="text-blue-600" size={24} />
            </div>
            <div>
              <h1 className="font-bold text-xl">SMN</h1>
              <p className="text-blue-100 text-sm">Station Management Network</p>
            </div>
          </div>
          <div className="text-right">
            <span className="font-medium">Worker Portal</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-w-md mx-auto">
        {renderContent()}
      </div>

      {/* Report Problem Button */}
      <button
        onClick={() => setShowReportModal(true)}
        className="fixed bottom-24 right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors z-40"
      >
        <AlertTriangle size={24} />
      </button>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around max-w-md mx-auto">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`p-3 rounded-full transition-all ${
                  isActive 
                    ? index === 2 
                      ? 'bg-red-500 text-white shadow-lg' 
                      : 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Icon size={24} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Report Problem Modal */}
      <ReportProblemModal 
        isOpen={showReportModal} 
        onClose={() => setShowReportModal(false)} 
      />
    </div>
  );
}

export default App;