'use strict';

var
  $transitionLayer = $('.transition-layer'),
  $transitionLayerBg = $('.transition-layer__bg');

var
  frameProportion = 1.78,
  frames = 25;

function init() {
  if (!$transitionLayer.length) _render();
  setLayerDimensions();
}

function _render() {
  $transitionLayer = $(document.createElement('div')),
  $transitionLayerBg = $(document.createElement('div'));

  console.log($transitionLayer);

  $transitionLayerBg.addClass('transition-layer__bg');

  $transitionLayer
    .addClass('transition-layer')
    .append($transitionLayerBg);

  $('body').append($transitionLayer);
}

function setLayerDimensions() {
  var
    windowWidth = $(window).width(),
    windowHeight = $(window).height(),
    layerWidth = 0,
    layerHeight = 0;

  if (windowWidth / windowHeight > frameProportion) {
    layerWidth = windowWidth;
    layerHeight = layerWidth / frameProportion;
  } else {
    layerHeight = windowHeight * 1.2;
    layerWidth = layerHeight * frameProportion;
  }

  $transitionLayerBg.css({
    'width': layerWidth * frames + 'px',
    'height': layerHeight + 'px'
  });

  resize = false;
}

function open() {
  $transitionLayer.addClass('transition-layer_visible transition-layer_open');
}

function close() {
  $transitionLayer.addClass('transition-layer_close');
  $transitionLayerBg.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
    $transitionLayer.removeClass('transition-layer_close transition-layer_open transition-layer_visible');
    $transitionLayerBg.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
  });
}

function onResize() {
  if (!resize) {
    resize = true;
    (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
  }
}

export default {
  init: init,
  setLayerDimensions: setLayerDimensions,
  open: open,
  close: close,
  onResize: onResize
};