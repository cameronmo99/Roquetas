import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales,
 
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en|es|fr|ca)/:path*']
};
