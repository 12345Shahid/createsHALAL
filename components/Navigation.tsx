// File: components/Navigation.tsx
import Link from 'next/link';
import { APP_NAME } from '../config/settings';

const Navigation = () => (
  <nav className="bg-gray-800 p-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link href="/">
        <span className="text-white text-xl font-bold cursor-pointer">{APP_NAME}</span>
      </Link>
      <div className="space-x-4">
        <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
        <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
        <Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
        <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navigation;