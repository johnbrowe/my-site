var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
    return gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/vue/dist/vue.min.js',
        './code/js/*.js'
    ])
        .pipe(concat('general.js'))
        .pipe(gulp.dest('./public/'));

    console.log('Compiled');
});


gulp.task('watch', function () {
    gulp.watch('./code/js/*.js', ['default']);
});