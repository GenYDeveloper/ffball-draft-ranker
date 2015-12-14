var gulp = require('gulp'),
   concat = require('gulp-concat'),
   uglify = require('gulp-uglify'),
   coverage = require('gulp-coverage'),
   jasmine = require('gulp-jasmine'),
   inject = require('gulp-inject'),
   jshint = require('gulp-jshint'),
   open = require('gulp-open'),
   rename = require('gulp-rename'),
   sass = require('gulp-sass'), // currently inactive
   watch = require('gulp-watch'),
   jscs = require('gulp-jscs'),
   stylish = require('gulp-jscs-stylish'),
   exclude = require('gulp-exclude-gitignore'),
   ejs = require('gulp-ejs'),
   copy = require('gulp-copy'),
   bower = require('gulp-bower'),
   myth = require('gulp-myth'); // used instead of gulp-sass for now

gulp.task('styles', function() {
   return gulp.src('client/vendors/styles/*.css')
      .pipe(concat('culmination.css'))
      .pipe(myth())
      .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
   return gulp.src(['client/config/*.js', 'client/modules/**/*.js'], {base:'client/'})
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(concat('culmination.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
   gulp.watch('client/vendors/styles/*.css', ['styles']);
   gulp.watch('client/config/*.js', ['scripts']);
   gulp.watch('client/modules/**/*.js', ['scripts']);
});

gulp.task('default', [
   'styles',
   'scripts',
   'watch'
]);
