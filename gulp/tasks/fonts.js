import gulp from 'gulp'

const _default = function fonts() {
    return gulp.src('assets/fonts/**/*')
        .pipe(gulp.dest('build/fonts'))
}

export { _default as default }