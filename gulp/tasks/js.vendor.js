'use strict';

module.exports = function() {
  $.gulp.task('js:vendor', function() {
    return $.gulp.src($.paths.jsVendor)
      .pipe($.gp.concat('vendor.js'))
      .pipe($.gp.uglify())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};