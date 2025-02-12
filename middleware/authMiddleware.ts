// File: middleware/authMiddleware.ts
import { supabase } from '../config/database';

export async function authMiddleware(req, res, next) {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  req.user = session.user;
  next();
}
