const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/quiz-app' : '',
  assetPrefix: isProd ? '/quiz-app/' : '',
  output: 'export'
};
