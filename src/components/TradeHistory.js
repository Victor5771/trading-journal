import React, { useState } from 'react';

const dummyTrades = [
  { date: '2023-07-01', ticker: 'AAPL', entryPrice: 145, exitPrice: 150, volume: 10, type: 'buy', comments: 'Nice profit' },
  { date: '2023-07-02', ticker: 'TSLA', entryPrice: 650, exitPrice: 640, volume: 5, type: 'sell', comments: 'Small loss' },
  // Add more dummy data as needed
];

function TradeHistory() {
  const [trades] = useState(dummyTrades);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Trade History</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Ticker</th>
            <th className="py-2 px-4 border">Entry Price</th>
            <th className="py-2 px-4 border">Exit Price</th>
            <th className="py-2 px-4 border">Volume</th>
            <th className="py-2 px-4 border">Type</th>
            <th className="py-2 px-4 border">Comments</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">{trade.date}</td>
              <td className="py-2 px-4 border">{trade.ticker}</td>
              <td className="py-2 px-4 border">{trade.entryPrice}</td>
              <td className="py-2 px-4 border">{trade.exitPrice}</td>
              <td className="py-2 px-4 border">{trade.volume}</td>
              <td className="py-2 px-4 border">{trade.type}</td>
              <td className="py-2 px-4 border">{trade.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TradeHistory;
