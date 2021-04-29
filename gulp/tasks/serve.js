import gulp from 'gulp'

import imageMinify from './imageMinify.js'
import svgSprite from './svgSprite.js'
import styles from './styles.js'
import pug2html from './pug2html.js'
import script from './script.js'
import fonts from './fonts.js'
import iconFonts from './iconFonts.js'
import copyDependencies from './copyDependencies.js'

import browserSync from 'browser-sync'

const server = browserSync.create()

function readyReload(cb) {
    server.reload()
    cb()
}

export default function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true
    })

    gulp.watch('assets/i/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify, readyReload))
    gulp.watch('assets/i/sprite/*.svg', gulp.series(svgSprite, readyReload))
    gulp.watch('assets/sass/**/*.scss', gulp.series(styles, readyReload))
    gulp.watch('assets/js/**/*.js', gulp.series(script, readyReload))
    gulp.watch('assets/jade/**/*.pug', gulp.series(pug2html, readyReload))
    gulp.watch('assets/fonts/**/*', gulp.series(fonts, readyReload))
    gulp.watch('assets/i/icons/*.svg', gulp.series(iconFonts))

    gulp.watch('package.json', gulp.series(copyDependencies, readyReload))

    return cb()
}