import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const publicPaths = ['/login', '/signup', '/pricing', '/contact', '/about', '/', '/build-your-own-gpt'];

  // Check if the user is authenticated (you may need to adjust this based on your auth implementation)
  const isAuthenticated = req.cookies.get('auth_token') !== undefined;

  if (!isAuthenticated && !publicPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}