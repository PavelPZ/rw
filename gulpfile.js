const gulp = require('gulp');
const acss = require('gulp-atomizer');
const autoprefixer = require('gulp-autoprefixer');
const imageDataURI = require('gulp-image-data-uri');
const argv = require('yargs').argv;
const rename = require("gulp-rename");
const sizeOf = require('image-size');
const gulpIgnore = require('gulp-ignore');
const clean = require('gulp-clean');

//************** atomizer
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

//************** image-url
gulp.task('image-url', ['delete-image-url', 'create-image-url']);

gulp.task('create-image-url', () => {
  const path = argv.basicPath + argv.path;
  let size = { width: -1, height: -1, type: '', origPath: '', id:'' };
  return gulp.src([path + '**/*.png', path + '**/*.jpg', path + '**/*.gif', path + '**/*.bmp'])
    .pipe(gulpIgnore.include(fn => { console.log('CREATE: ' + fn.path + '.ts'), Object.assign(size, sizeOf(fn.path)); size.origPath = fn.path.replace(/\\/g, '/'); size.id = size.origPath.substr(argv.basicPath.length - 1); return true; })) //side efect: assign size to global variable
    .pipe(imageDataURI({ template: { file: './image-url-template.templ', variables: size } })) //generate .TS file by means of template and size
    .pipe(rename(pth => { pth.basename = pth.basename + '.' + size.type; pth.extname = '.ts'; })) //rename new file
    .pipe(gulp.dest(file => file.base)); // the dir of output files 
});

gulp.task('delete-image-url', () => {
  const path = argv.basicPath + argv.path;
  let size = { width: -1, height: -1, type: '', origPath: '', id: '' };
  return gulp.src([path + '**/*.png.ts', path + '**/*.jpg.ts', path + '**/*.gif.ts', path + '**/*.bmp.ts'])
    .pipe(gulpIgnore.include(fn => console.log('DELETE: ' + fn.path)))
    .pipe(clean());
});
