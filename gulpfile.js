var gulp = require('gulp')
var rename = require('gulp-rename')
var browserSync = require('browser-sync')
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer')


function server() {
    browserSync({server:{baseDir: "src"}});
    browserSync.stream;
    gulp.watch("src/*.html", reloading);
    }

function reloading(done)
{
    browserSync.reload();
    console.log('\x1b[32m','Site reloaded')
    done();
}

function sass_css(done)
{
    gulp.src('src/sass/*sass')
        .pipe(sass({
            errorLogToConsole:true,
        })).on('error', console.error.bind(console))
        .pipe(gulp.dest('src/css/'))
        .pipe(browserSync.reload({
            stream: true
          }))
        done();
    gulp.src('src/sass/*sass')
        .pipe(sass({
            errorLogToConsole:true,
            outputStyle:'compressed'
        })).on('error', console.error.bind(console))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/css/'));
    console.log('\x1b[32m','SASS compiled.');
}

function watchSass()
{
    gulp.watch("src/sass/*sass", gulp.series(print, sass_css));
}

function print(done)
{
    console.log('\x1b[36m','SASS compiling started.');
    done();
}
gulp.task('default', gulp.parallel(server, sass_css, watchSass));