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

    // Check if the email already exists
    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('email')
      .eq('email', email)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      console.error("Error checking existing user:", fetchError);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (existingUser) {
      return res.status(400).json({ error: "An account with this email already exists. Please log in instead." });
    }
    // ✅ Supabase signup
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.error("Signup error:", error.message);
      return res.status(400).json({ error: error.message });
    }

    // Add user to the 'users' table with initial credits
    const { error: insertError } = await supabase
      .from('users')
      .insert({ id: data.user.id, email: data.user.email, credits: 20 });

    if (insertError) {
      console.error("Error inserting user data:", insertError);
      return res.status(500).json({ error: "Failed to create user profile" });
    }

    return res.status(200).json({ user: data.user });
  } catch (err) {
    console.error("❌ Server error:", err.stack);
    return res.status(500).json({ error: "Internal server error" });
  }
}