// File: pages/api/auth/reset-password.ts
import { supabase } from '../../../config/database';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { token, password } = req.body;
  if (!token || !password) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  // Reset password using Supabase
  const { error } = await supabase.auth.updateUser({
    access_token: token,
    password,
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  // Get the user session
  const { data: session, error: sessionError } = await supabase.auth.getSession();

  if (sessionError) {
    return res.status(400).json({ error: 'Password reset, but login failed. Please log in manually.' });
  }

  return res.status(200).json({ message: 'Password reset successful', session });
}
