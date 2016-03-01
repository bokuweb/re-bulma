module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'browserify'],
    files: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      'test/*.js'
    ],
    exclude: [
    ],

    babelPreprocessor: {
      options: {
        presets: ['airbnb']
      }
    },
    browserify: {
      debug: true,
      extensions: ['.js'],
      transform: [
        [require('babelify').configure({
          plugins: ['babel-plugin-espower']
        }), { presets: ['airbnb'] }]
      ],
      configure: function(bundle) {
        bundle.on('prebundle', function() {
          bundle.external('react/lib/ReactContext');
          bundle.external('react/lib/ExecutionEnvironment');
        });
      }
    },

    preprocessors: {
      'test/*.js': ['babel', 'browserify']
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: true
  })
}
