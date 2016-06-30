const path = require('path');
const docgen = require('react-docgen');

module.exports = {
  title: '',
  template: './styleguide/templete.html',
  updateWebpackConfig: webpackConfig => {
    webpackConfig.module.loaders.push({
      test: [/\.js$/],
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/,
      loader: 'babel',
    });
    return webpackConfig;
  },
  components: 'src/**/*.js',
  skipComponentsWithoutExample: true,
  getExampleFilename: componentpath => componentpath.replace(/\.js$/, '.examples.md'),
  resolver: docgen.resolver.findAllComponentDefinitions,
};

