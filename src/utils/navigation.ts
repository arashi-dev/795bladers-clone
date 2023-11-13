import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', "fr", "de", "it", "es"] as const;
export type Locales = typeof locales[number]

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales });