import gulp from 'gulp'
import Browser from 'browser-sync'
import { sass } from './style'
import { babel } from './script'

const browser = Browser.create();

function stream() {
    return browser.stream();
}

function server() {

    let config = {
        server: 'public',
    }

    browser.init(config)

    gulp.watch("src/scss/**/*.scss").on('all', sass);
    gulp.watch("src/js/**/*.js").on('all', babel);

    gulp.watch(['public/**/*.html']).on('change', () => browser.reload());

}

export { stream, server }