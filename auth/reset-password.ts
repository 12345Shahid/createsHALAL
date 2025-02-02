import { supabase } from '../config/database';

export async function resetPassword(email: string) {
  const { error } = await supabase.auth.api.resetPasswordForEmail(email);
  if (error) throw error;
}
