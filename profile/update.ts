import { supabase } from '../../config/database';

export async function updateUserProfile(userId: string, profileData: any) {
  const { data, error } = await supabase
    .from('profiles')
    .update(profileData)
    .eq('id', userId);

  if (error) {
    throw error;
  }

  return data;
}