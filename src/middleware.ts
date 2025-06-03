import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Bu middleware Next.js 15 ile uyumlu, basit şekilde dil yerelini tanımlama
export function middleware(request: NextRequest) {
  // Basit bir middleware örneği
  // Tüm istekleri olduğu gibi geçir
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
