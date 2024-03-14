const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass')); // Assuming older Node.js version
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const concat = require('gulp-concat');

gulp.task('server', function() {

  browserSync({
    server: {
      baseDir: "src"
    }
  });

  gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('style', async function() {
  const autoprefixerModule = await import('gulp-autoprefixer');
  const autoprefixer = autoprefixerModule.default;

  return gulp.src("src/sass/**/*.+(scss|sass)")
      .pipe(concat('style.scss')) // Concatenate all SCSS files into one
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(rename({suffix: '.min', prefix: ''}))
      .pipe(autoprefixer()) // Use the imported autoprefixer
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest("src/css"))
      .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('style'));
});

gulp.task('default', gulp.parallel('watch', 'server', 'style'));