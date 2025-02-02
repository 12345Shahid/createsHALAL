import OneSignal from 'onesignal-node';

const client = new OneSignal.Client({
  userAuthKey: process.env.ONESIGNAL_API_KEY,
  app: { appAuthKey: process.env.ONESIGNAL_APP_ID, appId: process.env.ONESIGNAL_APP_ID }
});

export async function sendNotification(userId: string, message: string) {
  const notification = {
    contents: { en: message },
    include_external_user_ids: [userId]
  };

  const response = await client.createNotification(notification);
  if (response.errors) throw new Error(response.errors);
}
