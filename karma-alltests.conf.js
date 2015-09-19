'use strict';
module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine', 'commonjs'],
        files: [
            './dist/js/vendor.js',
            './bower_components/angular-mocks/angular-mocks.js',
            './app/**/!(*spec).js',
            './dist/js/codeBlocks.js',
            './dist/views/appViews.js',
            './app/**/*spec.js'
        ],
        exclude:[
            './app/codeblocks/*.js'
        ],
        preprocessors: {
            './app/**/!(*spec).js': ['coverage', 'commonjs'],
            './dist/views/*.js':['commonjs'],
            './dist/js/codeBlocks.js':['commonjs']
        },
        reporters: ['progress', 'junit', 'coverage'],
        coverageReporter: {
            type: 'lcov',
            dir: './TestResults/coverage-alltests',
            subdir: '.'
        },
        junitReporter: {
            outputFile: './TestResults/unittests/test-user-info.xml',
            suite: ''
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,

        browsers: ['PhantomJS'],
        //browsers: ['Chrome'],
        captureTimeout: 20000,
        reportSlowerThan: 500,

        singleRun: true,

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-junit-reporter',
            'karma-commonjs',
            'karma-coverage',
            'karma-ng-html2js-preprocessor'
        ]
    });
};

