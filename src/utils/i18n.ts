import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    messages: (await import(`./../messages/${locale}.json`)).default,
}));