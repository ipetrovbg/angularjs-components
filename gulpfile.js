var gulp = require('gulp'), 
    less = require('gulp-less'),
    path = require('path'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify')
    public = {
      main: 'public/',
      app: 'public/app/',
      appControllers: 'public/app/controllers/'
    };

gulp.task('scripts', function () {
  return gulp.src('node_modules/angular/**/*')
    .pipe(gulp.dest('public/lib/angular'));
});

gulp.task('angularApp', function () {
  return gulp.src('public/app/**/*.js')
    .pipe(concat('to-do-app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist'));
});

gulp.task('less', function () {
  return gulp.src('public/css/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'public/css', 'includes')]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('default', function () {
  gulp.run('scripts');
});

gulp.task('watch', function() {
   gulp.watch('public/css/*.less', function(event) {
      gulp.run('less');
    });
    gulp.watch('public/app/**/*.js', function(event) {
      gulp.run('angularApp');
    });
});