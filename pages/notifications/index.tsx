import { useState, useEffect } from 'react';
import Head from 'next/head';
import { APP_NAME } from '../../config/settings';
import { getNotifications } from './api';

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
        <script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.OneSignalDeferred = window.OneSignalDeferred || [];
            OneSignalDeferred.push(async function(OneSignal) {
              await OneSignal.init({
                appId: "${process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID}",
                safari_web_id: "${process.env.NEXT_PUBLIC_ONESIGNAL_SAFARI_ID}",
                notifyButton: {
                  enable: true,
                },
              });
            });
          `
        }} />
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