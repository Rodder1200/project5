var gulp = require("gulp");
var browserSync = require("browser-sync").create();
// var pug = require("gulp-pug");
var sass = require("gulp-sass");
var del = require("del");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var srcmaps = require("gulp-sourcemaps");
var webpack = require("webpack-stream");

/*---------Server---------*/
gulp.task("server", function() {
  browserSync.init({
    server: {
      baseDir: "build/"
    }
  });

  gulp.watch("build/**/*").on("change", browserSync.reload);
});

/*---------Pug-compile---------*/
// gulp.task("templates:compile", function buildHTML() {
//   return gulp
//     .src(["src/template/index.pug"])
//     .pipe(
//       pug({
//         pretty: true
//       })
//     )
//     .pipe(gulp.dest("build/"));
// });

/*---------HTML compile---------*/
gulp.task("html", function() {
  return gulp.src("src/index.html").pipe(gulp.dest("build/"));
});

/*---------Styles-compile---------*/
gulp.task("styles:compile", function() {
  return gulp
    .src("src/styles/main.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename("main.min.css"))
    .pipe(gulp.dest("build/css"));
});

/* ------------ JS ------------- */
gulp.task("js", function() {
  return gulp
    .src(["src/js/index.js"])
    .pipe(srcmaps.init())
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(uglify())
    .pipe(srcmaps.write())
    .pipe(gulp.dest("build/js"));
});

/* ------------ Delete ------------- */
gulp.task("clean", function() {
  return del(["build"]);
});

/* ------------ Copy fonts ------------- */
gulp.task("copy:fonts", function() {
  return gulp.src("./src/fonts/**/*.*").pipe(gulp.dest("build/fonts"));
});

/* ------------ Copy images ------------- */
gulp.task("copy:imgs", function() {
  return gulp.src("./src/imgs/**/*.*").pipe(gulp.dest("build/imgs"));
});

/* ------------ Copy ------------- */
gulp.task("copy", gulp.parallel("copy:fonts", "copy:imgs"));

/* ------------ Watchers ------------- */
gulp.task("watch", function() {
  // gulp.watch("src/template/**/*.pug", gulp.series("templates:compile"));
  gulp.watch("src/styles/**/*.scss", gulp.series("styles:compile"));
  gulp.watch("src/js/**/*.js", gulp.series("js"));
});

gulp.task(
  "default",
  gulp.series(
    "clean",
    gulp.parallel("html", "styles:compile", "js", "copy"),
    gulp.parallel("watch", "server")
  )
);
