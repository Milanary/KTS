import { useState, useEffect } from 'react';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import StudentPortal from './components/StudentPortal';

function App() {
  const [user, setUser] = useState(() => {
    return localStorage.getItem('kts_user') || null;
  });
  const [theme, setTheme] = useState(() => {
    return 'light';
  });

  // Synchronize theme to document root
  useEffect(() => {
    document.documentElement.className = 'light';
  }, []);

  const toggleTheme = () => {
    // Theme is locked to light
  };

  const handleLoginSuccess = (email) => {
    setUser(email);
    localStorage.setItem('kts_user', email);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('kts_user');
  };

  const renderDashboard = () => {
    if (user.toLowerCase() === 'admin@gmail.com') {
      return (
        <AdminPanel 
          onLogout={handleLogout} 
          theme={theme}
          toggleTheme={toggleTheme}
        />
      );
    } else {
      return (
        <StudentPortal 
          onLogout={handleLogout} 
          theme={theme}
          toggleTheme={toggleTheme}
        />
      );
    }
  };

  return (
    <>
      {user ? renderDashboard() : (
        <Login 
          onLoginSuccess={handleLoginSuccess} 
          theme={theme}
          toggleTheme={toggleTheme}
        />
      )}
    </>
  );
}

export default App;
