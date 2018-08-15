'use strict';

var app = {};

app.box = function () {
  $('.start-now').on('click', function () {
    $('.main-content li').toggleClass('active');
  });
};

app.init = function () {
  app.box();
};

$(function () {
  app.init();
});