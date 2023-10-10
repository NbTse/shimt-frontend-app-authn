const { createConfig } = require('@edx/frontend-build');

const config = createConfig('webpack-dev');

config.module.rules[0].exclude = /node_modules\/(?!(fastest-levenshtein|@edx))/;
config.module.rules.push(
  {
    test: /\.(otf)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file-loader',
  },
);

module.exports = config;
