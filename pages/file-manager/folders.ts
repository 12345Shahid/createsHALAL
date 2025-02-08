import { supabase } from '../../config/database';

export async function getFolders() {
  const { data, error } = await supabase
    .from('folders')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching folders:', error);
    return [];
  }

  return data;
}

export async function createFolder(name: string, userId: string) {
  const { data, error } = await supabase
    .from('folders')
    .insert({ name, user_id: userId });

  if (error) {
    console.error('Error creating folder:', error);
    return null;
  }

  return data;
}

export async function updateFolder(id: string, name: string) {
  const { data, error } = await supabase
    .from('folders')
    .update({ name })
    .eq('id', id);

  if (error) {
    console.error('Error updating folder:', error);
    return null;
  }

  return data;
}

export async function deleteFolder(id: string) {
  const { error } = await supabase
    .from('folders')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting folder:', error);
    return false;
  }

  return true;
}