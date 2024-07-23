import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar
} from 'recharts';

const dummyData = [
  { date: '2023-07-01', profit: 50 },
  { date: '2023-07-02', profit: -50 },
  { date: '2023-07-03', profit: 100 },
  // Add more dummy data as needed
];

const barData = [
  { name: 'AAPL', trades: 5 },
  { name: 'TSLA', trades: 2 },
  // Add more dummy data as needed
];

function Dashboard() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Profit Over Time</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={dummyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="profit" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Number of Trades by Ticker</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="trades" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;
