import async from 'async'
import gulp from 'gulp'
import iconfont from 'gulp-iconfont'
import consolidate from 'gulp-consolidate'

const _default = function iconFont(done) {
    var iconStream = gulp.src(['assets/i/icons/*.svg'])
        .pipe(iconfont({
            fontName: 'IconsMain',
            formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
            normalize: true,
            fontHeight: 1001
        }));

    async.parallel([
        function handleGlyphs(cb) {
            iconStream.on('glyphs', function(glyphs, options) {
                gulp.src('assets/sass/templates/_icons.scss')
                    .pipe(consolidate('lodash', {
                        glyphs: glyphs,
                        fontName: 'IconsMain',
                        fontPath: '../fonts/',
                        className: 'icon'
                    }))
                    .pipe(gulp.dest('assets/sass/'))
                    .on('finish', cb);
            });
        },
        function handleFonts(cb) {
            iconStream
                .pipe(gulp.dest('assets/fonts/icon'))
                .on('finish', cb);
        }
    ], done);
}

export { _default as default }