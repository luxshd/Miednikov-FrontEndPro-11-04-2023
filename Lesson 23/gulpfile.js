const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');
const tinypng = require('gulp-tinypng-compress');

gulp.task('minifyConcatModuleScripts', function () {
    return gulp.src('app/assets/js/Modules/*.js')
        .pipe(concat('modules.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js/modules'));
});

gulp.task('minifyConcatScripts', function () {
    return gulp.src('app/assets/js/*.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('minify-css', function () {
    return gulp.src('app/assets/styles/*.css')
        .pipe(concat('app.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('build/css'));
});

gulp.task('tinypng', function () {
    gulp.src('app/assets/img/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'XLhj6NCrSxz3t38bZKtVJzj0XpgFWqXY',
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('build/img'));
});
gulp.task('default', gulp.series('minifyConcatModuleScripts', 'minifyConcatScripts', 'minify-css', 'tinypng'));