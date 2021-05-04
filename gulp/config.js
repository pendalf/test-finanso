import path from 'path'

const __dirname = path.resolve(path.dirname(''))

const root = path.join(__dirname, '../')
const src = path.join(root, 'src')

const _default = {
    root,
    src,
    buildPath: path.join(root, '/build'),
    pug2html: {
        beautifyHtml: true
    },
    lighthouse: {
        reportPath: path.join(root, 'reports'),
        PORT: 8080,
        chromeLauncherPort: 9222,
        config: {
            extends: 'lighthouse:default'
        },
        flags: {
            // available options - https://github.com/GoogleChrome/lighthouse/#cli-options
            chromeFlags: ['--show-paint-rects'],
            output: 'html'
        }
    },
    copyDependencies: {
        dist: path.join(src, 'local_modules')
    }
}

export { _default as default }
