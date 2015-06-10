var gulp = require('gulp');
var coffee = require('gulp-coffee');
var util = require('gulp-util');

// Basic usage
function task() {
    console.log("doing task")
    return gulp.src('./test/spec/place-directive.coffee').pipe(coffee({bare: true}).on('error', util.log)).pipe(gulp.dest('./test/js/x.js').on('error', util.log));
};


module.exports = task;