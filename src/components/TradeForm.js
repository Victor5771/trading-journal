import React, { useState } from 'react';

function TradeForm() {
  const [trade, setTrade] = useState({
    date: '',
    ticker: '',
    entryPrice: '',
    exitPrice: '',
    volume: '',
    type: 'buy',
    comments: '',
  });
  const [submittedTrade, setSubmittedTrade] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrade({ ...trade, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!trade.date) errors.date = 'Date is required';
    if (!trade.ticker) errors.ticker = 'Ticker is required';
    if (!trade.entryPrice || trade.entryPrice <= 0) errors.entryPrice = 'Valid entry price is required';
    if (!trade.exitPrice || trade.exitPrice <= 0) errors.exitPrice = 'Valid exit price is required';
    if (!trade.volume || trade.volume <= 0) errors.volume = 'Valid volume is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setErrors({});
    setSubmittedTrade(trade);
    setTrade({
      date: '',
      ticker: '',
      entryPrice: '',
      exitPrice: '',
      volume: '',
      type: 'buy',
      comments: '',
    });
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Log a New Trade</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={trade.date}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Ticker</label>
          <input
            type="text"
            name="ticker"
            value={trade.ticker}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.ticker && <p className="text-red-500 text-sm">{errors.ticker}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Entry Price</label>
          <input
            type="number"
            name="entryPrice"
            value={trade.entryPrice}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.entryPrice && <p className="text-red-500 text-sm">{errors.entryPrice}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Exit Price</label>
          <input
            type="number"
            name="exitPrice"
            value={trade.exitPrice}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.exitPrice && <p className="text-red-500 text-sm">{errors.exitPrice}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Volume</label>
          <input
            type="number"
            name="volume"
            value={trade.volume}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.volume && <p className="text-red-500 text-sm">{errors.volume}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Trade Type</label>
          <select
            name="type"
            value={trade.type}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          >
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Comments</label>
          <textarea
            name="comments"
            value={trade.comments}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>

      {submittedTrade && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-semibold mb-2">Submitted Trade</h3>
          <p><strong>Date:</strong> {submittedTrade.date}</p>
          <p><strong>Ticker:</strong> {submittedTrade.ticker}</p>
          <p><strong>Entry Price:</strong> {submittedTrade.entryPrice}</p>
          <p><strong>Exit Price:</strong> {submittedTrade.exitPrice}</p>
          <p><strong>Volume:</strong> {submittedTrade.volume}</p>
          <p><strong>Type:</strong> {submittedTrade.type}</p>
          <p><strong>Comments:</strong> {submittedTrade.comments}</p>
        </div>
      )}
    </div>
  );
}

export default TradeForm;
