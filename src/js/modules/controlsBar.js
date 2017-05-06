'use strict';

var
  $controlsBar = $('.controls-bar'),
  $filter = $controlsBar.find('.controls-bar__filter'),
  $filterToggle = $('.controls-bar__filter-toggle'),
  $filterList = $filter.find('.controls-bar__filter-list'),
  $filterItems = $filter.find('.controls-bar__filter-item');

var
  // animationLaunched prevents animation from re-triggering until it finishes.
  animationLaunched = false,
  duration = 300;

function defineRelatedElements(elem) {
  $controlsBar = elem.closest('.controls-bar');
  $filter = $controlsBar.find('.controls-bar__filter');
  $filterList = $filter.find('.controls-bar__filter-list');
  $filterItems = $filter.find('.controls-bar__filter-item');
}

function init() {
  $filterToggle.on('click', function(e) {
    e.preventDefault();

    var $filterToggle = $(this);

    defineRelatedElements($filterToggle);

    if (!animationLaunched) {
      _filterListOpen();
    } else {
      _filterListClose();
    }
  });

  $filterItems.on('click', function(e) {
    e.preventDefault();

    var $filterItem = $(this);

    defineRelatedElements($filterItem);
    _filterListClose();
  });
}

function _filterListOpen() {
  animationLaunched = true;
  $filter.addClass('controls-bar__filter_open');
  $filterList.slideDown(duration);
}

function _filterListClose() {
  $filter.removeClass('controls-bar__filter_open');
  $filterList.slideUp(duration, function() {
    animationLaunched = false;
  });
}

function onResize(windowWidth) {
  if (windowWidth > 992) {
    if ($filter.hasClass('controls-bar__filter_open')) {
      $filter.removeClass('controls-bar__filter_open');
      animationLaunched = false;
    }

    $filterList.css('display', '');
  }
}

export default {
  init: init,
  onResize: onResize
};