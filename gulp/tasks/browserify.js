var gulp = require('gulp');


//read coffescript files with required depencies, and package into one JS file
var browserify = require('browserify');
//Watch for file changes and make events
var watchify     = require('watchify');
//Use text stream for better interoperability with the existing npm stream ecosystem
var source = require('vinyl-source-stream');
//Extract source maps from vinyl stream
var exorcist = require('exorcist');

/*
 JSON for Browserify inside package.json
 "browserify": {
 "transform": [
    "coffeeify"   <-- each time browserify is called, it will coffeeify
 ]
 },
 */
var browserifyTask = function (callback, devMode) {

    console.log("in main browserifyTask")

    var browserifiedSource = getBrowserifiedSources();
    var watchifiedSource = watchify(browserifiedSource);

    //when a file is changed, we will package, but work only on the small changed file
    watchifiedSource .on('update', function(){
        console.log("updated source");
        bundle(watchifiedSource);
    });

    //when a file is changed, we will output the change
    watchifiedSource.on('log', function (msg) {
        console.log(msg);
    });

    //create the bundle
    bundle(watchifiedSource);

    //using test sources to simply rewrite


};





function getBrowserifiedSources() {

    return  browserify({
        entries: ['./js/app.coffee'],
        debug: true,
        cache:{},
        packageCache:{},
        fullPaths:false
    })

}

/**
 * Create the bundle
 * @param browserifiedSource browserified or watchified source
 */
function bundle(browserifiedSource) {
    browserifiedSource.bundle()
        .pipe(exorcist('./dist/rc-movable.js.map'))
        .pipe(source('./dist/rc-movable.js'))
        .pipe(gulp.dest('./'));
}


// Exporting the task so we can call it directly in our watch task, with the 'devMode' option
module.exports = browserifyTask;
