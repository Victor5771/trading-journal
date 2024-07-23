import React, { useState } from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Welcome to the trading journal!', type: 'info' },
    { id: 2, message: 'Your profile has been updated.', type: 'success' },
    { id: 3, message: 'Server error. Please try again later.', type: 'error' },
  ]);

  const dismissNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`p-4 rounded shadow-md ${
            notification.type === 'info' ? 'bg-blue-100 text-blue-800' :
            notification.type === 'success' ? 'bg-green-100 text-green-800' :
            'bg-red-100 text-red-800'
          }`}
        >
          <div className="flex justify-between items-center">
            <span>{notification.message}</span>
            <button onClick={() => dismissNotification(notification.id)} className="ml-4 text-xl">&times;</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notifications;
