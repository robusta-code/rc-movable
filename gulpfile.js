'use strict';


var gulp = require('gulp');

//Load plugins
var plugins = require('gulp-load-plugins')();



gulp.task('clean', function () {
    return gulp.src(['.tmp', 'dist'], { read: false }).pipe(plugins.clean());
});

