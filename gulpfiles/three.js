const gulp = require('gulp');
const html = require('gulp-htmlmin');
const js = require('gulp-uglify');
const path = require('path');
const clean = require('gulp-clean');

const HTML_SRC = path.resolve(__dirname, '../three/*.html');
const HTML_DEST = path.resolve(__dirname, '../public/three');
gulp.task(
    'html',
    () => gulp
    .src(HTML_SRC)
    .pipe(html({
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
    }))
    .pipe(gulp.dest(HTML_DEST))
);

const JS_SRC = path.resolve(__dirname, '../three/js/*.js');
const JS_DEST = path.resolve(__dirname, '../public/three/js');
gulp.task(
    'js',
    () => gulp
    .src(JS_SRC)
    .pipe(js())
    .pipe(gulp.dest(JS_DEST))
);

const FBX_SRC = path.resolve(__dirname, '../three/model/*.fbx');
const FBX_DEST = path.resolve(__dirname, '../public/three/model');
gulp.task(
    'fbx',
    () => gulp
    .src(FBX_SRC)
    .pipe(gulp.dest(FBX_DEST))
)

const CLS_FOLDER = path.resolve(__dirname, '../public/three');
gulp.task('clean', () => gulp
    .src(CLS_FOLDER, {
        read: false
    })
    .pipe(clean({
        force: true
    })))

gulp.task('default',
    gulp.series([
        'clean',
        gulp.parallel(['html', 'js', 'fbx'])
    ])
);