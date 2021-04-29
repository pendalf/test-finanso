import gulp from 'gulp'
import plumber from 'gulp-plumber'
import uglify from 'gulp-uglify'
import concat from 'gulp-concat'


const _default = function scriptConcat() {
    return gulp.src('assets/js/all/**/*.js')
        .pipe(plumber())
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
}

export { _default as default }