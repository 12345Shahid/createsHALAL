import { supabase } from '../../config/database';

export async function searchFiles(query: string) {
  const { data, error } = await supabase
    .from('files')
    .select('*')
    .or(`name.ilike.%${query}%, content.ilike.%${query}%`)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error searching files:', error);
    return [];
  }

  return data;
}

export async function searchFolders(query: string) {
  const { data, error } = await supabase
    .from('folders')
    .select('*')
    .ilike('name', `%${query}%`)
    .order('name');

  if (error) {
    console.error('Error searching folders:', error);
    return [];
  }

  return data;
}