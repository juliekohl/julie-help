const {TsconfigPathsPlugin} = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/components/**/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  "framework": "@storybook/vue3",
  webpackFinal: async (config) => {
    [].push.apply(config.resolve.plugins, [
      new TsconfigPathsPlugin({extensions: config.resolve.extensions})
    ]);

    // removing css rule from the file loader, cuz in the next statement we use our custom
    // took from here: https://stackoverflow.com/questions/56971513/storybook-does-not-load-svgs-in-components-of-vue-project/57074973
    let rule = config.module.rules.find(r =>
        // it can be another rule with file loader
        // we should get only svg related
        r.test && r.test.toString().includes('svg') &&
        // file-loader might be resolved to js file path so "endsWith" is not reliable enough
        r.loader && r.loader.includes('file-loader')
    );
    rule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader', {
        loader: require.resolve('sass-resources-loader'),
        options: {
          resources: path.resolve(__dirname, '../src/assets/scss/index.scss')
        }
      }],
      include: path.resolve(__dirname, '../'),
    }, {
      test: /\.svg$/i,
      oneOf: [
        {
          resourceQuery: /inline/,
          use: {
            loader: "vue-svg-loader",
            options: { svgo: false },
          },
        },
        {
          resourceQuery: /data/,
          use: {
            loader: "url-loader",
            options: { esModule: false },
          },
        },
        {
          resourceQuery: /raw/,
          use: {
            loader: "raw-loader",
            options: { esModule: false },
          },
        },
        {
          use: {
            loader: "file-loader",
            options: { esModule: false },
          },
        },
      ],
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      ...({ '@': path.resolve(__dirname, '../src') })
    };

    return config;
  }
}