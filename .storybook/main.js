const path = require("path");

module.exports = {
  stories: ["../**/*.stories.tsx"],
  addons: ["@storybook/addon-actions/register", "@storybook/addon-links"],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("ts-loader"),
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
            },
          },
        ],
      }
    );
    config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ];
    return config;
  },
};
