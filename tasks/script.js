import gulp from 'gulp'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import sourcemaps from 'gulp-sourcemaps'
import concat from 'gulp-concat'

function babel() {

    return browserify('src/js/app.js')
            .transform("babelify")
            .bundle()
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init())
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest('public/js'));

}


export { babel }