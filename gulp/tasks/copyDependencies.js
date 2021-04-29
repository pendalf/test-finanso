import path from 'path'
import gulp from 'gulp'
import npmDist from 'gulp-npm-dist'
import del from 'del'

import config from '../config.js';

export default function copyModules(cb) {
    del(config.copyDependencies.dist).then(() => {
        gulp.src(npmDist(), { base: path.join(config.root, 'node_modules') })
            .pipe(gulp.dest(config.copyDependencies.dist)).on('end', cb)
    }).catch(cb)
}