/*
* CORE
*/
var gulp = require('gulp');

/*
* GENERAL
*/
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

/*
* BROWSERSYNC
*/
var browserSync = require('browser-sync');
var filter = require('gulp-filter');

/*
* (S)CSS
*/
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var pixrem = require('gulp-pixrem');
var postcss = require('gulp-postcss');
var lost = require('lost');

/*
* JS
*/
var babel = require('gulp-babel');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');

/*
* VARS
*/

// gulp-plumber
var plumberOptions = {
	errorHandler: onError
}

// gulp-notify
var onError = function(err) {
	notify.onError({
		title: 'Gulp',
		subtitle: 'Failure!',
		message:  'Error: <%= error.message %>',
		sound:    'Beep'
	})(err);

	this.emit('end');
}



/*
* TASKS
*/
gulp.task('default', ['browser-sync', 'watch']);

gulp.task('browser-sync', ['task-css'], function() {
	browserSync({
		proxy: 'localhost:4567',
		files: ['css/style.css', 'js/main.js', '*.php', 'views/*']
	});
});

gulp.task('watch', function () {
	gulp.watch('css/src/**/*.scss', ['task-css']);
	gulp.watch('js/src/*.js', ['task-js'])
});

gulp.task('task-css', function() {
	// not being returned intentionally, see: https://github.com/dlmanning/gulp-sass/wiki/Common-Issues-and-Their-Fixes#gulp-watch-stops-working-on-an-error
	// couldn't get it to work with plumber/notify, worth trying again in the future
	gulp.src('css/src/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(postcss([
			lost()
		]))
		.pipe(prefix(['last 3 versions', '> 5%', 'ie >= 9']))
		.pipe(pixrem())
		.pipe(sourcemaps.write('./', {
			includeContent: false
		}))
		.pipe(gulp.dest('css'))
		.pipe(filter('css/*.css'))
		.pipe(browserSync.reload({
			stream:true
		}))
});

gulp.task('task-js', function() {
	return gulp.src('js/src/*.js')
		// notify not being triggered
		.pipe(plumber(plumberOptions))
		.pipe(jshint({
			esnext: true
		}))
		.pipe(jshint.reporter('default'))
		.pipe(sourcemaps.init())
		.pipe(concat('main.js'))
		.pipe(babel({
      presets: ['es2015']
    }))
		.pipe(sourcemaps.write('./', {
			includeContent: false
		}))
		.pipe(gulp.dest('js'))
});
