import gulp from 'gulp'
import svgstore from 'gulp-svgstore'
import rename from 'gulp-rename'

export default function svgSprite() {
    return gulp.src('assets/i/icons/*.svg')
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename('sprite.svg'))
        .pipe(gulp.dest('build/i'))
}