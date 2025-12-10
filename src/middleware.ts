import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // This is a do-nothing middleware. It simply passes the request to the next handler.
  return NextResponse.next();
}

// An empty matcher ensures this middleware doesn't run on any paths,
// but its existence in the file is enough to fix the error.
export const config = {
  matcher: [],
};
