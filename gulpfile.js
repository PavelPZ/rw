const gulp = require('gulp');
const atomizer = require('gulp-atomizer');
const autoprefixer = require('gulp-autoprefixer');
const imageDataURI = require('gulp-image-data-uri');
const argv = require('yargs').argv;
const rename = require("gulp-rename");
const imageSize = require('image-size');
const gulpIgnore = require('gulp-ignore');
const clean = require('gulp-clean');
const runSequence = require('run-sequence'); //incoming GULP 4.0 can run in series!!!! 

//************** atomizer
gulp.task('atomizer', () => {
  console.log('start');
  return gulp.src(['./rw-gui-rt/**/*.tsx', './rw-gui-rt/**/*.ts', './index.html'])
    .pipe(atomizer({
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

//************** image-url
gulp.task('image-url', cb =>  runSequence('delete-image-url', 'create-image-url', cb)); //https://www.npmjs.com/package/run-sequence

gulp.task('create-image-url', cb => {
  console.log('START create-image-url');
  const path = argv.basicPath + argv.path;
  let size = { width: -1, height: -1, type: '', origPath: '', id: '' };
  return gulp.src([path + '**/*.png', path + '**/*.jpg', path + '**/*.gif', path + '**/*.bmp'])
    .pipe(gulpIgnore.include(fn => { console.log('CREATE: ' + fn.path + '.ts'), Object.assign(size, imageSize(fn.path)); size.origPath = fn.path.replace(/\\/g, '/'); size.id = size.origPath.substr(argv.basicPath.length - 1); return true; })) //side efect: assign size to global variable
    .pipe(imageDataURI({ template: { file: './image-url-template.templ', variables: size } })) //generate .TS file by means of template and size
    .pipe(rename(pth => { pth.basename = pth.basename + '.' + size.type; pth.extname = '.ts'; })) //rename new file
    .pipe(gulp.dest(file => file.base)); // the dir of output files 
});

gulp.task('delete-image-url', cb => {
  console.log('START delete-image-url');
  const path = argv.basicPath + argv.path;
  return gulp.src([path + '**/*.png.ts', path + '**/*.jpg.ts', path + '**/*.gif.ts', path + '**/*.bmp.ts'])
    .pipe(gulpIgnore.include(fn => {
      const bpm = fn.path.substr(0, fn.path.length - 3);
      
      console.log(bpm);
      console.log('DELETE: ' + fn.path);
    }))
    .pipe(clean());
});
