const path = require('path');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  modules: [path.resolve(__dirname, 'img'), 'node_modules'],
};

module.exports = nextConfig;
