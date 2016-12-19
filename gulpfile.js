var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

gulp.task('build', function (cb) {
  browserify({
    entries: ['src/main.js']
  })
  .bundle()
  .pipe(source('main.min.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('js'))
  .on('end', cb);
})
