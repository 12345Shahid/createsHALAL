import Head from 'next/head';
import { APP_NAME } from '../config/settings';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isExistingUser, setIsExistingUser] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsExistingUser(false);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        router.push('/tool-selection'); // Redirect to a new tool selection page
      } else {
        if (data.error.includes("already exists")) {
          setIsExistingUser(true);
        }
        setError(data.error || 'An error occurred during signup');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Sign Up - {APP_NAME}</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>

      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        {error && (
          <p className="text-red-500 mb-4">
            {error}
            {isExistingUser && (
              <> Please <Link href="/login" className="text-blue-500">login here</Link> instead.</>
            )}
          </p>
        )}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </form>

      <p className="mt-4">
        Already have an account? <Link href="/login" className="text-blue-500">Login here</Link>
      </p>
    </div>
  );
};

export default Signup;