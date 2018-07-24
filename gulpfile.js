var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    cssnano      = require('gulp-cssnano'),
    plumber      = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');

gulp.task('css', function() {
    return gulp.src('./styles/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('./styles/css/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function() {
    browserSync({
      server: {
        baseDir: '.'
      },
    })
  })

gulp.task('default', ['css']);

gulp.task('build', ['css']);

gulp.task('watch', ['browserSync', 'css'], function () {
    gulp.watch('./styles/scss/**/*.scss', ['build']);
    gulp.watch('index.html', browserSync.reload);
});

