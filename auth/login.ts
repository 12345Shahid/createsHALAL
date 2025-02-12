import { supabase } from '../config/database';

export async function login(email: string, password: string) {
  try {
    console.log('🔍 Attempting login for:', email);

    // ✅ Using correct authentication method
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    // ❌ Handling authentication errors
    if (error) {
      console.error('❌ Supabase login error:', error.message);
      throw new Error(error.message || 'Failed to login');
    }

    console.log('✅ Login successful:', data.user.email);
    return data.user;
  } catch (err) {
    console.error('❌ Login function error:', err);
    throw new Error('Login failed. Please try again.');
  }
}
