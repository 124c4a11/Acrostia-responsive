'use strict';

import owlCarousel from 'owl.carousel';

function init() {
  $('.main-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navElement: 'button',
    navText: ['', ''],
    dots: true,
  });
}

export default {
  init: init
};