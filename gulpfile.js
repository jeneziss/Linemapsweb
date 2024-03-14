const gulp = require('gulp');
const browserSync = require('browser-sync').create(); // Create a browserSync instance
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer'); // Import autoprefixer directly

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: "src"
    }
  });

  gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('style', function() {
  return gulp.src("src/sass/**/*.+(scss|sass)")
      .pipe(concat('style.scss'))
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(rename({ suffix: '.min', prefix: '' }))
      .pipe(autoprefixer()) // Use autoprefixer directly
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(gulp.dest("src/css"))
      .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch("src/sass/**/*.+(scss|sass)", gulp.series('style')); // Use gulp.series for proper task chaining
});

gulp.task('default', gulp.parallel('watch', 'server', 'style')); // Use gulp.parallel for proper task chaining