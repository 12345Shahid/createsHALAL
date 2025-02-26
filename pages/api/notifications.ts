// File: pages/api/notifications.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Extracting environment variables
  const ONESIGNAL_API_KEY = process.env.ONESIGNAL_API_KEY;
  const ONESIGNAL_APP_ID = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID;

  if (!ONESIGNAL_API_KEY || !ONESIGNAL_APP_ID) {
    return res.status(500).json({ error: "Missing OneSignal API credentials" });
  }

  // Extracting request body data
  const { title, message, userId } = req.body;

  if (!title || !message || !userId) {
    return res.status(400).json({ error: "Missing required fields: title, message, userId" });
  }

  try {
    // Send notification request to OneSignal
    const response = await fetch("https://onesignal.com/api/v1/notifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${ONESIGNAL_API_KEY}`,
      },
      body: JSON.stringify({
        app_id: ONESIGNAL_APP_ID,
        include_external_user_ids: [userId], // Ensure userId is correctly passed
        headings: { en: title },
        contents: { en: message },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.errors || "Failed to send notification" });
    }

    return res.status(200).json({ success: true, message: "Notification sent successfully", data });
  } catch (error) {
    console.error("OneSignal API Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}