'use strict';

import fullpage from 'fullpage.js';
import pageHeader from './pageHeader.js';

function init() {
  $('#fullpage').fullpage({
    //Scrolling
    scrollOverflow: true,

    //Custom selectors
    sectionSelector: '.page-section',

    //Callbacks
    afterLoad: function(anchorLink, index) {
      var $this = this;

      pageHeader.showBackground(this);
    },

    onLeave: function(index, nextIndex, direction) {
      pageHeader.hideBackground();
    }
  });
}

export default {
  init: init
};