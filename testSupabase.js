import { createClient } from "@supabase/supabase-js";
import "dotenv/config"; // Load .env.local

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("❌ Missing Supabase credentials. Check .env.local.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

(async () => {
  const { data, error } = await supabase.from("users").select("*").limit(1);
  if (error) {
    console.error("❌ Database connection failed:", error.message);
  } else {
    console.log("✅ Database connected successfully:", data);
  }
})();