import gulp from 'gulp'
import { server } from './server'
import { sass, compass } from './style'
import { babel } from './script'


gulp.task('default', gulp.series(sass, gulp.parallel(babel, server)));
gulp.task('default').description = "Automatização para Desenvolvimento da User Interface";