import { supabase } from '../config/database';

export async function login(email: string, password: string) {
  const { user, error } = await supabase.auth.signIn({ email, password });
  if (error) throw error;
  return user;
}
