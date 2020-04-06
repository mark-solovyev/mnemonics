const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const browserSync = require("browser-sync").create();
const webpack = require("webpack-stream");

gulp.task("pug", ()=> {
    return gulp.src("./src/views/**/*.pug")
        .pipe(pug())
        .pipe(gulp.dest("./dist"));
});
gulp.task("scss", ()=> {
    return gulp.src("./src/styles/main.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./dist/styles"));
});
gulp.task("compile", ()=> {
    return gulp.src("./src/scripts/entry.js")
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest("./dist/scripts/"));
});
gulp.task("browser-sync", ()=> {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        open: false
    });
});
gulp.task("serverReload", (done)=> {
    browserSync.reload();
    done();
});
// default task
gulp.task("default", gulp.series("pug", "scss", "compile", "browser-sync"));
// watch
gulp.watch("./src/views", gulp.series("pug", "serverReload"));
gulp.watch("./src/styles", gulp.series("scss", "serverReload"));
gulp.watch("./src/scripts", gulp.series("compile", "serverReload"));


