module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },

      use: ["@svgr/webpack"],
    });

    return config;
  },
  react: {
    useSuspense: false,
    wait: true,
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/app/create-product",
        permanent: false,
      },
      {
        source: "/mekanik",
        destination: "/mekanik/app/jobs",
        permanent: false,
      },
      {
        source: "/",
        destination: "/member/",
        permanent: false,
      },
    ];
  },
};
