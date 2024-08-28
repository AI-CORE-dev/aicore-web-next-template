/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [],
    },
    // typescript: {
    //     ignoreBuildErrors: true,
    // },
    // eslint: {
    //     ignoreDuringBuilds: true,
    // },
    webpack(config, { isServer }) {
        if (!isServer) {
            const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

            config.plugins.push(new ForkTsCheckerWebpackPlugin());
        }

        return config;
    },
};

module.exports = nextConfig;
