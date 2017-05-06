'use strict';

import fullpage from './modules/fullpage.js';
import mainCarousel from './modules/mainCarousel.js';
import transitionLayer from './modules/transitionLayer';
import mainMenu from './modules/mainMenu';
import portfolio from './modules/portfolio';
import controlsBar from './modules/controlsBar';

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

  if ($('.controls-bar').length) {
    controlsBar.init();
  }
});


$(window).on('resize', function() {
  var
    windowWidth = $(window).width(),
    windowHeight = $(window).height();

  if ($('.transition-layer').length) {
    transitionLayer.onResize();
  }

  if ($('.main-menu').length) {
    mainMenu.onResize(windowWidth);
  }

  if ($('.controls-bar').length) {
    controlsBar.onResize(windowWidth);
  }
});