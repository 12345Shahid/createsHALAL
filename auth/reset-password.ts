// File: auth/reset-password.ts
import { supabase } from '../config/database';

export async function resetPassword(email: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://localhost:3000/reset-password',
  });
  if (error) throw error;
}
