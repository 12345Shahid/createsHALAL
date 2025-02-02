import { supabase } from '../config/database';

export async function authMiddleware(req, res, next) {
  const session = supabase.auth.session();
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  req.user = session.user;
  next();
}
