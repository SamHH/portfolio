// Core
require('dotenv').load()
const gulp = require('gulp')

// Errors
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')

// BrowserSync
const browserSync = require('browser-sync')
const filter = require('gulp-filter')

// CSS
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const importcss = require('postcss-import')
const lost = require('lost')
const autoprefixer = require('autoprefixer')
const pixrem = require('pixrem')
const cssnano = require('cssnano')

// JS
const eslint = require('gulp-eslint')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')

// Vars
var onError = notify.onError({
  title: 'Gulp Error',
  message: 'Error: <%= error.message %>',
  sound: 'Frog'
})

var plumberOptions = {
  errorHandler: onError
}

// Tasks
gulp.task('develop', ['browser-sync', 'watch'])

gulp.task('browser-sync', ['task_css'], function () {
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
  gulp.watch(`${process.env.SRC_DIR}/css/**/*.scss`, ['task_css'])
  gulp.watch(`${process.env.SRC_DIR}/js/**/*.js`, ['task_js_lint', 'task_js_transform'])
})

gulp.task('task_css', function () {
  return gulp.src(`${process.env.SRC_DIR}/css/**/*.scss`)
    .pipe(plumber(plumberOptions))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(postcss([
      lost,
      autoprefixer({ browsers: ['last 3 versions', '> 5%', 'ie >= 10'] }),
      pixrem,
      importcss,
      cssnano
    ]))
    .pipe(sourcemaps.write('./', {
      includeContent: false
    }))
    .pipe(gulp.dest(`${process.env.PUBLIC_DIR}/dist/`))
})

gulp.task('task_js_lint', function () {
  return gulp.src(`${process.env.SRC_DIR}/js/**/*.js`)
    .pipe(eslint())
    .pipe(eslint.format())
})

gulp.task('task_js_transform', function () {
  return browserify(`${process.env.SRC_DIR}/js/main.js`)
    .transform(babelify, { presets: ['es2015', 'stage-1'] })
    .bundle()
    .pipe(plumber(plumberOptions))
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(`${process.env.PUBLIC_DIR}/dist/`))
})
