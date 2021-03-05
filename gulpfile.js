var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    cssnano      = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');

function style() {
  return gulp.src('./styles/scss/**/*.scss')
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(cssnano())
      .pipe(gulp.dest('./styles/css/'))
      .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: '.',
      index: 'index.html'
    }
  });
  gulp.watch('./styles/scss/**/*.scss', style)
  gulp.watch('index.html').on('change', browserSync.reload);
  // gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style
exports.watch = watch
