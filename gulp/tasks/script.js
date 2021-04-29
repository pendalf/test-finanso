import gulp from 'gulp'
import plumber from 'gulp-plumber'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'
import eslint from 'gulp-eslint';

import config from '../config.js';

const _default = function script() {
    let pipe = gulp.src('assets/js/*.js')
        .pipe(plumber())
        // .pipe(eslint())
        // .pipe(eslint.format())
    if (process.env.NODE_ENV === 'production') {
        pipe
            .pipe(babel({
                presets: ['@babel/preset-env']
            }))
            .pipe(uglify())
    }
    pipe.pipe(gulp.dest('build/js'))

    return pipe
}

export { _default as default }