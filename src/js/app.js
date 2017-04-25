'use strict';

import fullpage from './modules/fullpage.js';

$(document).ready(function() {
  if ($('#fullpage').length) {
    fullpage.init();
  }
});