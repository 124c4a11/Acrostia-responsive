'use strict';

import mixitup from 'mixitup';


function init() {
  mixitup('.portfolio__works', {
    selectors: {
      target: '.portfolio__works-item'
    }
  });
}

export default {
  init: init
};