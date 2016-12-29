const gulp = require('gulp');
const acss = require('gulp-atomizer');
const autoprefixer = require('gulp-autoprefixer');
const imageDataURI = require('gulp-image-data-uri');
const argv = require('yargs').argv;
const rename = require("gulp-rename");
const sizeOf = require('image-size');
const debug = require('gulp-debug');
const gulpIgnore = require('gulp-ignore');

gulp.task('atomizer', () => {
  console.log('start');
  return gulp.src(['./rw-gui-rt/**/*.tsx', './rw-gui-rt/**/*.ts', './index.html'])
    .pipe(acss({
      // the filename of your output file.
      outfile: 'app.css',
      acssConfig: require('./atomizer-config.json')
    }))
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('rw-gui-rt')); // the dir of output files
});

gulp.task('image-url', () => {
  //console.log(argv);
  let size = { width: -1, height: -1 };
  return gulp.src([argv.path + '**/*.png', argv.path + '**/*.jpg', argv.path + '**/*.gif', argv.path + '**/*.bmp'])
    .pipe(gulpIgnore.include(fn => {
      Object.assign(size, sizeOf(fn.path));
      return true;
    }))
    .pipe(imageDataURI({
      template: {
        file: './image-url-template.templ',
        variables: size
      }
    }))
    .pipe(rename(path => { path.basename = path.basename + path.extname; path.extname = '.ts'; }))
    .pipe(gulp.dest(file => file.base)); // the dir of output files
});