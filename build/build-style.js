var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var less = require('gulp-less');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

// 编译less
gulp.task('css', function() {
  gulp.src('../src/components/dao-color.scss')
    .pipe(gulp.dest('../dist/styles'));
  gulp.src('../src/components/index.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie > 8']
    }))
    .pipe(cleanCSS())
    .pipe(rename('dao-style.css'))
    .pipe(gulp.dest('../dist/styles'));
});

// 拷贝字体文件
// gulp.task('fonts', function () {
//     gulp.src('../src/styles/common/iconfont/fonts/*.*')
//         .pipe(gulp.dest('../dist/styles/fonts'));
// });

gulp.task('default', ['css']);
