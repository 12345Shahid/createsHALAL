// File: api/history.ts
import { supabase } from "../config/database"; // ✅ Fixed import path

export async function logHistory(userId: string, type: string, input: string, output: string) {
  try {
    const { error } = await supabase.from("user_history").insert([
      {
        user_id: userId,
        type,
        input,
        output,
        timestamp: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("⚠️ Error logging history:", error.message);
      throw new Error("Failed to log user history.");
    }

    console.log("✅ History logged successfully.");
  } catch (err) {
    console.error("❌ Error in logHistory:", err);
    throw err;
  }
}

export async function getUserHistory(userId: string, limit: number = 10) {
  try {
    const { data, error } = await supabase
      .from("user_history")
      .select("*")
      .eq("user_id", userId)
      .order("timestamp", { ascending: false })
      .limit(limit);

    if (error) {
      console.error("⚠️ Error fetching user history:", error.message);
      throw new Error("Failed to fetch user history.");
    }

    return data;
  } catch (err) {
    console.error("❌ Error in getUserHistory:", err);
    throw err;
  }
}
