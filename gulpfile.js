var gulp = require('gulp');
var acss = require('gulp-atomizer');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', () => {
  console.log('start');
  return gulp.src('./rw-gui-rt/**/*.tsx')
    .pipe(acss({
      // the filename of your output file.
      outfile: 'test.css'
    }))
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('rw-gui-rt')); // the dir of output files
});