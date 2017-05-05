'use strict';

import fullpage from './modules/fullpage.js';
import mainCarousel from './modules/mainCarousel.js';
import transitionLayer from './modules/transitionLayer';
import mainMenu from './modules/mainMenu';
import portfolio from './modules/portfolio';

$(document).ready(function() {
  if ($('#fullpage').length) {
    fullpage.init();
  }

  if ($('.main-carousel').length) {
    mainCarousel.init();
  }

  if ($('.main-menu').length) {
    mainMenu.init();
  }

  if ($('.portfolio').length) {
    portfolio.init();
  }
});


$(window).on('resize', function() {
  if ($('.transition-layer').length) {
    transitionLayer.onResize();
  }

  if ($('.main-menu').length && $(window).width() > 992) {
    mainMenu.close();
  }
});