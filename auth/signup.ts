// File: auth/signup.ts
import bcrypt from "bcryptjs";
import { supabase } from "../config/database";

export async function signUp(email: string, password: string) {
  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in Supabase Authentication
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.error("❌ Supabase signup error:", error.message);
      throw new Error(error.message || "Signup failed");
    }

    // Store hashed password in the 'users' table
    const { error: dbError } = await supabase
      .from("users")
      .update({ hashed_password: hashedPassword })
      .eq("id", data.user.id);

    if (dbError) {
      console.error("❌ Error storing hashed password:", dbError.message);
      throw new Error("Failed to save user credentials.");
    }

    console.log("✅ Signup successful for:", email);
    return data.user;
  } catch (error) {
    console.error("❌ Signup function error:", error.message);
    throw new Error(error.message || "Signup failed.");
  }
}