import { supabase } from '../config/database';

export async function signUp(email: string, password: string) {
  const { user, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return user;
}
