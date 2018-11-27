const
    gulp = require('gulp'),
    config = require('../config'),
    stylus = require('gulp-stylus'),
    postcss = require('gulp-postcss'),
    sourcemaps = require("gulp-sourcemaps"),
    plumber = require('gulp-plumber'),
    browser = require("browser-sync");

gulp.task('stylus', function () {
    gulp.src(config.stylus.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(postcss([
            require('autoprefixer')({
                browsers: ['last 2 versions', 'ie >= 9']
            }),
            require('css-mqpacker'),
        ]))
        .pipe(gulp.dest(config.dir.tmp))
        .pipe(browser.reload({
            stream: true
        }));
});
gulp.task('b:stylus', function () {
    gulp.src(config.stylus.src)
        .pipe(stylus())
        .pipe(postcss([
            require('autoprefixer')({
                browsers: ['last 2 versions', 'ie >= 9']
            }),
            require('css-mqpacker'),
        ]))
        .pipe(gulp.dest(config.dir.build));
});
