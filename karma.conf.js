// Karma configuration
// Generated on Tue Jul 29 2014 12:16:13 GMT+0200 (CEST)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        preprocessors: {
        },


        // list of files / patterns to load in the browser
        files: [


            /* Used for object selection is specs. jQuery is just the killer app for these things*/
            'bower_components/jquery-2.1.0.min/index.js',
            'bower_components/hammerjs/hammer.min.js',
            'bower_components/angular/angular.min.js',
            'bower_components/angular-mocks/angular-mocks.js',

            './dist/rc-movable.js',
            'test/utils/startup.js',

            //loading tests
            'test/karma-js/**/*.js',

            // Karma acts like a server which may render these files
            //css :
            'app/styles/map.css',

            //images:
            // Not using this will cause :
            // Uncaught SyntaxError: Unexpected token <
            // at /Users/nicorama/code/produits/rcmap/app/images/rep/floor.svg:1

            //{pattern: 'js/**/*.png', watched: false, included: false, served: true},
            //{pattern: 'js/**/*.svg', watched: false, included: false, served: true}



        ],

        proxies :{
          //  '/images/': 'http://localhost:9876/base/app/images/'
        },

        // list of files to exclude
        exclude: [

        ],





        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        //reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [/*'Firefox',*/ 'Chrome'],

        //not sure if it's needed
        plugins: [
            'karma-jasmine',
            //'karma-coverage',
            //'karma-junit-reporter',
            'karma-chrome-launcher'/*,
            //'karma-firefox-launcher',
            'karma-ng-html2js-preprocessor'*/
        ],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        // Also good when trying to set up Karma correctly, to avoid multiplication of browsers
        singleRun: false
    });
};
