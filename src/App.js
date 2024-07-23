
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TradeForm from './components/TradeForm';
import TradeHistory from './components/TradeHistory';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import Profile from './components/Profile';
import Notifications from './components/Notifications';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const [user, setUser] = useState(null);

  const handleAuthSuccess = (user) => {
    setUser(user);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={user ? <TradeForm /> : <Auth onAuthSuccess={handleAuthSuccess} />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Auth onAuthSuccess={handleAuthSuccess} />} />
            <Route path="/trade-history" element={user ? <TradeHistory /> : <Auth onAuthSuccess={handleAuthSuccess} />} />
            <Route path="/profile" element={user ? <Profile user={user} /> : <Auth onAuthSuccess={handleAuthSuccess} />} />
            <Route path="/auth" element={<Auth onAuthSuccess={handleAuthSuccess} />} />
          </Routes>
        </main>
        <Footer />
        <Notifications />
        <ThemeSwitcher />
      </div>
    </Router>
  );
}

export default App;