'use strict';

import equalHeights from 'jquery.equalheights';

function init() {
  var
    $services = $('.services'),
    $servicesItem = $services.find('.services__item');

  if ($servicesItem) {
    $servicesItem.equalHeights();
  }
}

export default {
  init: init
};