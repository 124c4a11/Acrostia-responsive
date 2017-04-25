'use strict';

import fullpage from 'fullpage.js';

function init() {
  $('#fullpage').fullpage({
    //Custom selectors
    sectionSelector: '.page-section'
  });
}

export default {
  init: init
};