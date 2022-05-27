module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["courses-top.ru", "cdn-bucket.hb.bizmrg.com"],
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: { and: [/\.(js|ts)x?$/] },
            use: ["@svgr/webpack"],
        });

        return config;
    },
};
