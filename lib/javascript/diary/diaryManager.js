$ = require('jquery');

const Diary = require('./diary')

$(document).ready(function(){
  diary = new Diary().open();
});