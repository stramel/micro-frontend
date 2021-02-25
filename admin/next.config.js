const { join } = require("path");
const workspace = join(__dirname, "..");

module.exports = {
  basePath: process.env.NODE_ENV === "production" ? "/admin" : undefined,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  poweredByHeader: false,
  reactStrictMode: true,

  // Enable typescript paths
  webpack: (config, options) => {
    config.module = {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: [workspace],
          exclude: /node_modules/,
          use: options.defaultLoaders.babel,
        },
      ],
    };
    return config;
  },
};
