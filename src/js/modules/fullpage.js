'use strict';

import fullpage from 'fullpage.js';
import pageHeader from './pageHeader.js';

function init() {
  $('#fullpage').fullpage({
    // Navigation
    menu: '.main-menu__list',
    anchors: ['home', 'services', 'about', 'work', 'contacts'],
    slidesNavigation: true,

    //Scrolling
    scrollOverflow: true,

    //Custom selectors
    sectionSelector: '.page-section',

    //Callbacks
    afterLoad: function(anchorLink, index) {
      var $currentSection = this;

      pageHeader.showBackground($currentSection);
    },

    onLeave: function(index, nextIndex, direction) {
      pageHeader.hideBackground();
    }
  });
}

export default {
  init: init
};