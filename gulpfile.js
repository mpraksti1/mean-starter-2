// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint      = require('gulp-jshint');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var copy        = require('gulp-copy');
var livereload  = require('gulp-livereload');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('public/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'))
        .pipe(livereload());
});

// Watch Files For Changes
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('public/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'watch']);






