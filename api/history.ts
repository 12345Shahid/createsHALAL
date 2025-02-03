import { supabase } from '../../config/database';

export async function logHistory(userId: string, type: string, input: string, output: string) {
  try {
    const { data, error } = await supabase
      .from('user_history')
      .insert({
        user_id: userId,
        type: type,
        input: input,
        output: output,
        timestamp: new Date().toISOString()
      });

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('Error logging history:', error);
    throw error;
  }
}

export async function getUserHistory(userId: string, limit: number = 10) {
  try {
    const { data, error } = await supabase
      .from('user_history')
      .select('*')
      .eq('user_id', userId)
      .order('timestamp', { ascending: false })
      .limit(limit);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('Error fetching user history:', error);
    throw error;
  }
}