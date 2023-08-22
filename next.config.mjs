/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

import withNextIntl from 'next-intl/plugin';

const config = withNextIntl(
  './src/utils/i18n.ts'
)({
  reactStrictMode: true,
});


export default config;
