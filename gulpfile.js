'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
	return gulp.src('./scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./css'));
});
