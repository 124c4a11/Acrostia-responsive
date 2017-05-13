'use strict';

import fullpage from './modules/fullpage.js';
import mainCarousel from './modules/mainCarousel.js';
import transitionLayer from './modules/transitionLayer';
import mainMenu from './modules/mainMenu';
import portfolio from './modules/portfolio';
import controlsBar from './modules/controlsBar';
import preloader from './modules/preloader';
import services from './modules/services';


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

  if ($('.services').length) {
    services.init();
  }
});


$(window).on('load', function() {
  if ($('.preloader').length) {
    preloader.init();
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