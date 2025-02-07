import Head from 'next/head';
import { APP_NAME } from '../config/settings';
import { useState, useEffect } from 'react';
import { getNotifications } from '../api/notifications'; // You'll need to create this API function

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const fetchedNotifications = await getNotifications();
      setNotifications(fetchedNotifications);
    };

    fetchNotifications();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Notifications - {APP_NAME}</title>
        <meta name="description" content="View your notifications and updates." />
      </Head>

      <h1 className="text-3xl font-bold mb-6">Notifications</h1>

      {notifications.length === 0 ? (
        <p>You have no new notifications.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notification, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold">{notification.title}</h3>
              <p>{notification.message}</p>
              <span className="text-sm text-gray-500">{notification.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;