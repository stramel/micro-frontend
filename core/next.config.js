module.exports = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "/:path*",
  //     },
  //     {
  //       source: "/admin",
  //       destination: "http://localhost:8001/admin",
  //     },
  //     {
  //       source: "/admin/:path*",
  //       destination: "http://localhost:8001/admin/:path*",
  //     },
  //     {
  //       source: "/signup",
  //       destination: "http://localhost:8002",
  //     },
  //   ];
  // },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  poweredByHeader: false,
  reactStrictMode: true,
};
