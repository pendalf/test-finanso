import gulp from 'gulp'
import plumber from 'gulp-plumber'
import sass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import shorthand from 'gulp-shorthand';
import autoprefixer from 'gulp-autoprefixer';
import gulpStylelint from 'gulp-stylelint';
import rename from 'gulp-rename';

const _default = function styles() {
    return gulp.src('assets/sass/*.scss')
        .pipe(plumber())
        // .pipe(gulpStylelint({
        //     failAfterError: false,
        //     reporters: [{
        //         formatter: 'string',
        //         console: true
        //     }]
        // }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(shorthand())
        .pipe(cleanCSS({
            debug: true,
            compatibility: '*'
        }, details => {
            console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
        }))
        .pipe(sourcemaps.write())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('build/styles'))
}

export { _default as default }