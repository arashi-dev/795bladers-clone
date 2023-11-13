import createMiddleware from 'next-intl/middleware';
import { locales } from './utils/navigation';

export default createMiddleware({
    // A list of all locales that are supported
    locales,

    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: 'fr'
});

export const config = {
    matcher: ['/', '/(en|fr|de|it|es)/:path*']
};