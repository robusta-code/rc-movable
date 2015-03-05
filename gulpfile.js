'use strict';


var gulp = require('gulp');

// Important : browserify must be ALSO set as a package for this app, not only gloablly
// Or there will be a  "Unexpected token ILLEGAL", at least on Windows as it runs the shell command


//Load plugins
var plugins = require('gulp-load-plugins')();

//Vanilla node for deleeting files and folders
var del = require('del');

//easily get the file path of files in the stream (and pass it to the del method)
var vinylPaths = require('vinyl-paths');

var browserifyTask = require("./gulp/tasks/browserify.js");


gulp.task('by', browserifyTask);

gulp.task('clean', function () {

    return gulp
        //{read:false} will avoid to lose time to read these files
        .src(['.tmp','tmp-test', 'dist'], { read: false })
        //get the paths of each files and delete them
        .pipe(vinylPaths(del));
});

