import { NextApiRequest, NextApiResponse } from 'next';
import { login } from '../../../auth/login';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;
      console.log('Login attempt for email:', email);
      const user = await login(email, password);
      res.status(200).json({ user });
    } catch (error) {
      console.error('Login API error:', error);
      res.status(400).json({ message: error.message || 'An error occurred during login' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}