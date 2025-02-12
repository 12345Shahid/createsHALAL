import { supabase } from "../../../config/database";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { email, password } = req.body;

    // ✅ Ensure email & password exist
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    // ✅ Supabase signup
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.error("Signup error:", error.message);
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ user: data?.user });
  } catch (err) {
    console.error("❌ Server error:", err.stack);
    return res.status(500).json({ error: "Internal server error" });
  }
}