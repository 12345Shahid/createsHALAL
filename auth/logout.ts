import { supabase } from '../config/database';

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
