// File: notifications/api.ts
import axios from "axios";

const ONESIGNAL_APP_ID = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID || ""; // Secure App ID
const ONESIGNAL_API_KEY = process.env.ONESIGNAL_API_KEY || ""; // Secure API Key

export const sendNotification = async (title: string, message: string, userId: string) => {
  if (!ONESIGNAL_APP_ID || !ONESIGNAL_API_KEY) {
    console.error("🚨 Missing OneSignal API credentials. Check .env file.");
    throw new Error("OneSignal API credentials are missing.");
  }

  try {
    const response = await axios.post(
      "https://onesignal.com/api/v1/notifications",
      {
        app_id: ONESIGNAL_APP_ID,
        include_external_user_ids: [userId], // Send notification to specific user
        headings: { en: title },
        contents: { en: message },
      },
      {
        headers: {
          Authorization: `Basic ${ONESIGNAL_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Notification sent successfully:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("❌ Error sending notification:", error.response?.data || error.message);
    throw error;
  }
};
