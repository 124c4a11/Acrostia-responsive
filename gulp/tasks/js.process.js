'use strict';

module.exports = function() {
  $.gulp.task('js:process', function() {
    return $.gulp.src($.path.app)
      .pipe($.gp.plumber ({
        errorHandler: $.gp.notify.onError(err => ({
          title: 'Script',
          message: err.message
        }))
      }))
      .pipe($.gp.if($.isDevelopment,$.gp.sourcemaps.init()))
      .pipe($.gp.concat('app.js'))
      .pipe($.gp.uglify())
      .pipe($.gp.if($.isDevelopment, $.gp.sourcemaps.write()))
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};