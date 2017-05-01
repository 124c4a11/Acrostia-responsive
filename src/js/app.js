'use strict';

import fullpage from './modules/fullpage.js';
import mainCarousel from './modules/mainCarousel.js';
import transitionLayer from './modules/transitionLayer';

$(document).ready(function() {
  if ($('#fullpage').length) {
    fullpage.init();
  }

  if ($('.main-carousel').length) {
    mainCarousel.init();
  }
});


$(window).on('resize', function() {
  if ($('.transition-layer').length) {
    // Set transitionLayerBg dimentions
    var resize = false;
    transitionLayer.onResize();
  }
});