var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var reload      = browserSync.reload;
var plumber = require('gulp-plumber');
var color = require('bash-color');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

// 静态服务器 + 监听 scss/html 文件
gulp.task('serve',['sass'], function() {
    browserSync.init({
        server: "./WebFile"
    });
    gulp.watch('WebFile/**/*.scss',['sass']);
    gulp.watch(["WebFile/**/*.html","WebFile/**/*.scss","WebFile/**/*.js"]).on('change', reload);
});

//css编译后的css将注入到浏览器里实现更新
gulp.task('sass', function() {
    return gulp.src("WebFile/new_pms/scss/*.scss")
        .pipe(plumber({
          errorHandler:function(error){
            console.log(color.wrap('[CSS] ' + error.message, color.colors.RED, color.styles.hi_background));
            this.emit('end');
          }
        }))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:false //是否去掉不必要的前缀 默认：true
        }))
        .pipe(sass({sourcemap: true,outputStyle: 'expanded'}))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest("./WebFile/new_pms/css"))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);