'use strict';

import mixitup from 'mixitup';
import magnificPopup from '../vendor/jquery.magnific-popup.js';
import transitionLayer from './transitionLayer';

var
  delay = 400;

function init() {
  transitionLayer.init();

  mixitup('.portfolio__works', {
    selectors: {
      target: '.portfolio__works-item'
    }
  });

  $('.portfolio__works').magnificPopup({
    delegate: '.portfolio__works-item-link:visible',
    type: 'image',
    gallery: {
      enabled: true
    },
    callbacks: {
      open: function() {
        transitionLayer.open();
        setTimeout(showGallery, delay);
      },

      close: function() {
        transitionLayer.close();
      }
    }
  });
}

function showGallery() {
  $('.mfp-wrap').addClass('mfp-wrap_visible');
  $('.mfp-bg').addClass('mfp-bg_visible');
}


export default {
  init: init
};