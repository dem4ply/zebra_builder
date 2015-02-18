module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'src/base.js',
      'src/*.js',
      'src/cmd/vector.js',
      'src/cmd/*.js',
      'test/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-requirejs',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage',
            'karma-junit-reporter',
            'karma-chrome-launcher',
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};

