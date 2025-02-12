import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error("❌ Missing Supabase credentials. Check .env file.");
  throw new Error("Missing Supabase credentials.");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
