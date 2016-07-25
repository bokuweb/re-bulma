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
  sections: [
    { name: 'Grid', components: 'src/grid/**/*.js' },
    { name: 'Elements', components: 'src/elements/**/*.js' },
    { name: 'Components', components: 'src/components/**/*.js' },
    { name: 'Layout', components: 'src/layout/**/*.js' },
  ],
  skipComponentsWithoutExample: true,
  getExampleFilename: componentpath => componentpath.replace(/\.js$/, '.examples.md'),
  resolver: docgen.resolver.findAllComponentDefinitions,
};

