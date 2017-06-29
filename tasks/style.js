import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import gulpSourceMaps from 'gulp-sourcemaps'
import { stream } from './server'

function sass() {
    return gulp.src("src/scss/*.scss")
               .pipe(gulpSourceMaps.init())
               .pipe(gulpSass())
               .pipe(gulpSourceMaps.write())
               .pipe(gulp.dest("public/css"))
               .pipe(stream());
}

export { sass }