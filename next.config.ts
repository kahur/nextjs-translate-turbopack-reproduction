import nextTranslate from 'next-translate-plugin';

const nextConfig = nextTranslate( {
    /* config options here */
    output: "standalone",
    reactStrictMode: true
});

nextConfig.i18n = undefined;

export default nextConfig;

