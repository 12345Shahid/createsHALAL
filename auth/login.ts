// File: auth/login.ts
import { supabase } from '../config/database';

export async function login(email: string, password: string) {
  try {
    console.log('🔍 Attempting login for:', email);
    
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      console.error('❌ Supabase login error:', error.message);
      throw new Error(error.message || 'Failed to login');
    }

    console.log('✅ Login successful:', data.user?.email);
    
    // Fetch user role
    const { data: userData, error: roleError } = await supabase
      .from('users')
      .select('role')
      .eq('email', email)
      .single();

    if (roleError) {
      console.error('❌ Error fetching role:', roleError);
      throw new Error('Failed to retrieve user role');
    }

    return { user: data.user, role: userData.role };
  } catch (err) {
    console.error('❌ Login function error:', err);
    throw new Error('Login failed. Please try again.');
  }
}
