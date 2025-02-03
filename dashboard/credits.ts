import { supabase } from '../../config/database';

export async function getUserCredits(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('credits, referral_credits, ad_credits')
    .eq('id', userId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getCreditEarningHistory(userId: string) {
  const { data, error } = await supabase
    .from('credit_transactions')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}