/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        emotion: true,
    },
    sassOptions: {
        // To use .scss
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "nftstorage.link",
                port: "*",
                pathname: "/**/*",
            },
        ],
        domains: ["www.blessedburgers.co", "via.placeholder.com", "www.none.com"]
    },
    publicRuntimeConfig: {
        NODE_ENV: process.env.NODE_ENV,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        config.resolve.extensions.push('.ts', '.tsx');

        return config;
    },
};

module.exports = nextConfig;