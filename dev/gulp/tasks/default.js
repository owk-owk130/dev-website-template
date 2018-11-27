const
    gulp = require('gulp'),
    config = require('../config'),
    runSequence = require('run-sequence'),
    browser = require("browser-sync"),
    watch = require("gulp-watch");

gulp.task('watch-reload', function (callback) {
    return runSequence(
        'copy',
        'bs-reload',
        callback
    );
});

gulp.task('bs-reload', function () {
    browser.reload();
});

gulp.task('run', function (callback) {
    return runSequence(
        'clean',
        'copy',
        ['ejs', 'stylus', 'webpack'],
        'browser',
        callback
    );
});

gulp.task('default', ['run'], function () {
    watch(config.stylus.src, function (event) {
        gulp.start('stylus');
    });
    watch(config.watch.ejs, function (event) {
        gulp.start('ejs');
    });
    watch(config.watch.js, function (event) {
        gulp.start('webpack');
    });
    watch(config.watch.dir, function (event) {
        gulp.start('watch-reload');
    });
});
