import gulp from 'gulp'

import serve from './gulp/tasks/serve.js'
import pug2html from './gulp/tasks/pug2html.js'
import styles from './gulp/tasks/styles.js'
import script from './gulp/tasks/script.js'
import scriptConcat from './gulp/tasks/script_concat.js'
import fonts from './gulp/tasks/fonts.js'
import imageMinify from './gulp/tasks/imageMinify.js'
import svgSprite from './gulp/tasks/svgSprite.js'
import clean from './gulp/tasks/clean.js'
import iconFonts from './gulp/tasks/iconFonts.js'
import copyDependencies from './gulp/tasks/copyDependencies.js'

function setMode(isProduction = false) {
    return cb => {
        process.env.NODE_ENV = isProduction ? 'production' : 'development'
        cb()
    }
}

// const dev = gulp.parallel(pug2html, styles, script, fonts, imageMinify, svgSprite)
const devTask = gulp.parallel(pug2html, styles, script, scriptConcat, fonts, imageMinify, iconFonts, svgSprite)
const dev = gulp.series(devTask)
const iconFontsTask = gulp.series(gulp.parallel(iconFonts))

const _build = gulp.series(clean, dev)

const start = gulp.series(setMode(), _build, serve)
const build = gulp.series(setMode(true), _build)

// module.exports.lighthouse = gulp.series(lighthouse)

export { dev, start, build, iconFontsTask }