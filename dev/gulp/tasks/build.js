const
    gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function (callback) {
    return runSequence(
        'b:clean',
        ['b:ejs', 'b:stylus', 'b:webpack', 'b:imagemin'],
        'b:copy',
        callback
    );
});
