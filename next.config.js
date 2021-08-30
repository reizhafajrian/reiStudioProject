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
  env: {
    mongodburl:
      "mongodb://reistudio:reistudio122@reistudio-shard-00-00.gkotf.mongodb.net:27017,reistudio-shard-00-01.gkotf.mongodb.net:27017,reistudio-shard-00-02.gkotf.mongodb.net:27017/database?ssl=true&replicaSet=atlas-rhaxhe-shard-0&authSource=admin&retryWrites=true&w=majority",
  },
};
