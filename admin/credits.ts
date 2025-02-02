import { supabase } from '../config/database';

export async function addCredits(userId: string, credits: number) {
  const { error } = await supabase.from('users').update({ credits: supabase.raw('credits + ?', [credits]) }).eq('id', userId);
  if (error) throw error;
}

export async function removeCredits(userId: string, credits: number) {
  const { error } = await supabase.from('users').update({ credits: supabase.raw('credits - ?', [credits]) }).eq('id', userId);
  if (error) throw error;
}
