import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../config/database';
import { APP_NAME } from '../config/settings';

const Notifications = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (user) {
      fetchNotifications();
    }
  }, [user]);

  const fetchNotifications = async () => {
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching notifications:', error);
    } else {
      setNotifications(data);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Notifications - {APP_NAME}</title>
        <meta name="description" content="View your notifications and updates." />
      </Head>

      <h1 className="text-3xl font-bold mb-6">Notifications</h1>

      {notifications.length === 0 ? (
        <p>You have no notifications at this time.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li key={notification.id} className="bg-white shadow rounded-lg p-4">
              <h3 className="font-semibold">{notification.title}</h3>
              <p className="text-gray-600">{notification.message}</p>
              <span className="text-sm text-gray-400">
                {new Date(notification.created_at).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;