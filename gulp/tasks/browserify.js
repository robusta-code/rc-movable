/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   This task is set up to generate multiple separate bundles, from
   different sources, and to use Watchify when run from the default task.

   See browserify.bundleConfigs in gulp/config.js
*/


var gulp = require('gulp');
var exorcist = require('exorcist');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
/*var browserSync  = require('browser-sync');
var watchify     = require('watchify');
var bundleLogger = require('../util/bundleLogger');


var handleErrors = require('../util/handleErrors');

//var config       = require('../config').browserify;
//var _            = require('lodash');
*/


/*
JSON for Browserify
"browserify": {
    "transform": [
        "coffeeify"
    ]
},
*/
var browserifyTask = function(callback, devMode) {

    console.log("in browserifyTask")

    return  browserify({
        entries: ['./js/app.coffee'],
        debug:true
        /*,
  //      extensions: ['.coffee'],
        debug: true,
        standalone:true*/
    })
        .bundle()
        .pipe(exorcist('./dist/rc-movable.js.map'))
        .pipe(source('./dist/rc-movable.js'))
        .pipe(gulp.dest('./'));


};



// Exporting the task so we can call it directly in our watch task, with the 'devMode' option
module.exports = browserifyTask;
