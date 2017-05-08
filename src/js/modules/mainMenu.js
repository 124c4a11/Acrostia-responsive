'use strict';

import transitionLayer from './transitionLayer';

var
  $mainMenu = $('.main-menu'),
  $mainMenuToggle = $mainMenu.find('.main-menu__toggle'),
  $mainMenuNav = $mainMenu.find('.main-menu__nav'),
  $pageHeaderLogo = $('.page-header__logo');

var
  delay = 400;

function init() {
  $mainMenuToggle.on('click', function(e) {
    e.preventDefault();

    transitionLayer.init();

    if ($mainMenu.hasClass('main-menu_open')) {
      close();
    } else {
      open();
    }
  });

  $('.main-menu__item').on('click', function(e) {
    if ($mainMenu.hasClass('main-menu_open')) close();
  });
}

function open() {
  transitionLayer.open();
  $mainMenuToggle.addClass('hamburger_close');

  $pageHeaderLogo.css('display', 'none');

  setTimeout(function() {
    $mainMenu.addClass('main-menu_open');
  }, delay);
}

function close() {
  $mainMenu.removeClass('main-menu_open');
  $mainMenuToggle.removeClass('hamburger_close');
  transitionLayer.close();

  setTimeout(function() {
    $pageHeaderLogo.css('display', '');
  }, delay);
}

function onResize(windowWidth) {
  if (windowWidth > 992 && $mainMenu.hasClass('main-menu_open')) {
    close();
  }
}

export default {
  init: init,
  open: open,
  close: close,
  onResize: onResize
};