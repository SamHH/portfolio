// Core
require('dotenv').load()
const gulp = require('gulp')
const runSequence = require('run-sequence')

// Errors
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')

// BrowserSync
const browserSync = require('browser-sync')

// CSS & JS
const sourcemaps = require('gulp-sourcemaps')

// CSS
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const importcss = require('postcss-import')
const lost = require('lost')
const autoprefixer = require('autoprefixer')
const csso = require('gulp-csso')

// JS
const eslint = require('gulp-eslint')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')

// Tasks
gulp.task('develop', () => {
  runSequence(['css-transform', 'js-transform'], ['browser-sync', 'watch'])
})
gulp.task('build', () => {
  runSequence(['css-transform', 'js-transform'], ['css-minify', 'js-minify'])
})

gulp.task('browser-sync', ['css-transform'], function () {
  browserSync({
    proxy: `localhost:${process.env.NODE_PORT}`,
    port: parseInt(process.env.NODE_PORT) + 1,
    files: [
      `${process.env.PUBLIC_DIR}/dist/main.css`,
      `${process.env.PUBLIC_DIR}/dist/main.js`,
      '**/views/**/*.jade'
    ],
    open: false
  })
})

gulp.task('watch', function () {
  gulp.watch(`${process.env.SRC_DIR}/css/**/*.scss`, ['css-transform'])
  gulp.watch(`${process.env.SRC_DIR}/js/**/*.js`, ['js-lint', 'js-transform'])
})

gulp.task('css-transform', function () {
  return gulp.src(`${process.env.SRC_DIR}/css/**/*.scss`)
    .pipe(plumber({
      errorHandler: notify.onError({
        title: 'Gulp Error',
        message: 'Error: <%= error.message %>',
        sound: 'Frog'
      })
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(postcss([
      lost,
      autoprefixer({ browsers: ['last 3 versions', '> 5%', 'ie >= 10'] }),
      importcss
    ]))
    .pipe(sourcemaps.write('./', {
      includeContent: false
    }))
    .pipe(gulp.dest(`${process.env.PUBLIC_DIR}/dist/`))
})

gulp.task('css-minify', () => {
  return gulp.src(`${process.env.PUBLIC_DIR}/dist/main.css`)
    .pipe(csso())
    .pipe(gulp.dest(`${process.env.PUBLIC_DIR}/dist/`))
})

gulp.task('js-lint', () => {
  return gulp.src(`${process.env.SRC_DIR}/js/**/*.js`)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', function (err) {
      notify({
        title: 'JS linting failed',
        message: err.message
      }).write(err)

      this.emit('end')
    })
})

gulp.task('js-transform', function () {
  return browserify(`${process.env.SRC_DIR}/js/main.js`)
    .transform(babelify, { presets: ['es2015', 'stage-1'] })
    .bundle()
    .on('error', function (err) {
      notify({
        title: 'JS transforming failed',
        message: err.message
      }).write(err)

      this.emit('end')
    })
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(`${process.env.PUBLIC_DIR}/dist/`))
})

gulp.task('js-minify', () => {
  return gulp.src(`${process.env.PUBLIC_DIR}/dist/main.js`)
    .pipe(uglify())
    .pipe(gulp.dest(`${process.env.PUBLIC_DIR}/dist/`))
})
