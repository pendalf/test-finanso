import gulp from 'gulp'
import plumber from 'gulp-plumber'
import pug from 'gulp-pug'
import pugLinter from 'gulp-pug-linter'
import { htmlValidator } from 'gulp-w3c-html-validator'
import bemValidator from 'gulp-html-bem-validator'
import config from '../config.js';

const _default = function pug2html() {
    return gulp.src('assets/jade/*.pug')
        .pipe(plumber())
        .pipe(pugLinter({ reporter: 'default' }))
        .pipe(pug({ pretty: config.pug2html.beautifyHtml }))
        .pipe(htmlValidator.analyzer())
        .pipe(htmlValidator.reporter())
        .pipe(bemValidator())
        .pipe(gulp.dest('build'))
}
export { _default as default }