
var gulp =   require('gulp');
var sass =   require('gulp-sass');

var src = {
  html: './src/index.html',
  scss: './src/stylesheets/app.scss'
};
var dest = {
  html: './dist',
  css: './dist/stylesheets/'
};



gulp.task('views', function() {
  gulp.src([src.html])
    .pipe(gulp.dest(dest.html))
});

gulp.task('stylesheets', function() {
  gulp.src([src.scss])
    .pipe(sass())
    .pipe(gulp.dest(dest.css))
});

gulp.task('build', ['views', 'stylesheets']);

gulp.task('watch', function() {
  gulp.watch([src.scss], ['stylesheets']);
  gulp.watch([src.html], ['views']);
});



gulp.task('default', ['build', 'watch']);
