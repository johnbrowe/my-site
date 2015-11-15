var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Default
gulp.task('default', ['js', 'sass']);

// Watch
gulp.task('watch', function () {
    gulp.watch(['./code/js/*.js', './code/scss/*.scss'], ['default']);
});

// Javacript
gulp.task('js', function() {
    gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/vue/dist/vue.min.js',
        './code/js/*.js'
    ])
        .pipe(concat('general.js'))
        .pipe(gulp.dest('./public/'));

    console.log('JavaScript compiled');

});

// SASS
gulp.task('sass', function () {

    gulp.src('./code/scss/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./public/css'));

    console.log("Sass compiled");

});
