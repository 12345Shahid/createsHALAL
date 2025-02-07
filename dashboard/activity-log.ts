import { supabase } from '../../config/database';

export async function getRecentActivity(userId: string, limit: number = 10) {
  const twoMonthsAgo = new Date();
  twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

  const { data, error } = await supabase
    .from('activity_log')
    .select('*')
    .eq('user_id', userId)
    .gte('created_at', twoMonthsAgo.toISOString())
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    throw error;
  }

  return data;
}

export async function logActivity(userId: string, description: string) {
  const { data, error } = await supabase
    .from('activity_log')
    .insert({ user_id: userId, description });

  if (error) {
    throw error;
  }

  return data;
}