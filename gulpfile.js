gulp                  = require('gulp');
gutil                 = require('gulp-util');
stylus                = require('gulp-stylus');
replace               = require('gulp-replace');
cleanCSS              = require('gulp-clean-css');
webpack               = require('webpack');
webpack_config        = require('./webpack.config.js');
webpack_config_dev    = require('./dev.webpack.config.js');
browserSync           = require('browser-sync').create();

tasks = {
  stylusTask: function() {
    gulp.src('app/stylus/app.styl')
      .pipe(stylus({compress: true, 'include css': true}))
      .pipe(cleanCSS())
      .pipe(gulp.dest('public/css'));
  },
  assetsTask: function() {
    gulp.src('app/assets/**')
      .pipe(gulp.dest('public/assets'));
  },
  webpackTask: function(cb) {
    var config = process.env.NODE_ENV === 'production' ? webpack_config : webpack_config_dev;
    if (cb == null) cb = function() {};
    webpack(config, function(err, stats) {
      if (err) throw new gutil.PluginError('[webpack]', err);
      gutil.log("[webpack]", stats.toString({colors: true}));
      cb();
    });
  }
};

gulp.task('stylus', tasks.stylusTask);

gulp.task('assets', tasks.assetsTask);

gulp.task('webpack', tasks.webpackTask);

gulp.task('watch', function() {
  gulp.watch('app/assets/**', function() {
    tasks.assetsTask();
    browserSync.reload();
  });
  gulp.watch('app/stylus/**', function() {
    tasks.stylusTask();
    browserSync.reload();
  });
  gulp.watch('app/**/*.jsx', function() {
    tasks.webpackTask(function() { browserSync.reload(); });
  });
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: __dirname + "/public/",
      directory: false
    },
    ghostMode: false,
    notify: false,
    debounce: 200,
    index: 'index.html',
  });
});

gulp.task('default', ['stylus', 'assets', 'webpack', 'serve', 'watch']);
