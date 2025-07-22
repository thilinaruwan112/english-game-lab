import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import acceptLanguage from 'accept-language';

const locales = ['en', 'si'];
const defaultLocale = 'si';

acceptLanguage.languages(locales);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const acceptLanguageHeader = request.headers.get('accept-language');
  const lang = acceptLanguage.get(acceptLanguageHeader) || defaultLocale;
  
  request.nextUrl.pathname = `/${lang}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|images|favicon.ico).*)',
  ],
}
