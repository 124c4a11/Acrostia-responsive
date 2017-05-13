'use strict';

import equalHeights from 'jquery.equalheights';

function init() {
  var
    $team = $('.team'),
    $teamItem = $team.find('.team__item');

  if ($teamItem) {
    $teamItem.equalHeights();
  }
}

export default {
  init: init
};