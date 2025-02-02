import { supabase } from '../config/database';

export async function getStatistics() {
  const { data, error } = await supabase.rpc('get_statistics');
  if (error) throw error;
  return data;
}
