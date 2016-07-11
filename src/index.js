var lgh = require('./lgh');

lgh();



 import 'babel-polyfill';
 import $ from 'jquery';

$(document).ready(function($) {
  $('<h1>Cats</h1>').appendTo('body');
});