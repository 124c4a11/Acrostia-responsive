'use strict';

var
  pageHeader = $('.page-header');

function showBackground(section) {
  if (section.hasClass('page-section_no-padding') && !pageHeader.hasClass('page-header_bg')) {
    pageHeader.addClass('page-header_bg');
  }
}

function hideBackground() {
  if (pageHeader.hasClass('page-header_bg')) {
    pageHeader.removeClass('page-header_bg');
  }
}

export default {
  showBackground: showBackground,
  hideBackground: hideBackground
}