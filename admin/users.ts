import { supabase } from '../config/database';

export async function fetchUsers() {
  const { data, error } = await supabase.from('users').select('*');
  if (error) throw error;
  return data;
}

export async function blockUser(userId: string) {
  const { error } = await supabase.from('users').update({ blocked: true }).eq('id', userId);
  if (error) throw error;
}

export async function deleteUser(userId: string) {
  const { error } = await supabase.from('users').delete().eq('id', userId);
  if (error) throw error;
}
