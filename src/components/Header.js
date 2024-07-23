import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">Trading Journal</Link>
        <div>
          <Link to="/dashboard" className="text-white mx-2">Dashboard</Link>
          <Link to="/trade-history" className="text-white mx-2">Trade History</Link>
          <Link to="/profile" className="text-white mx-2">Profile</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
