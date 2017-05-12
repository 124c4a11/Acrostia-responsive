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
    autoplay: true,
    autoplayTimeout: 8000,
    smartSpeed: 1000
  });
}

export default {
  init: init
};