/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

import withNextIntl from 'next-intl/plugin';
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const config = withNextIntl(
  './src/utils/i18n.ts'
)(withBundleAnalyzer({
  reactStrictMode: true,
}));


export default config;
