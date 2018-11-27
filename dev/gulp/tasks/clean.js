const
    gulp = require('gulp'),
    config = require('../config'),
    del = require('del');

gulp.task('clean', function () {
    return del([
        config.dir.tmp,
        config.dir.dist
    ]);
});

gulp.task('b:clean', function () {
    return del([
        config.dir.dist
    ]);
});
