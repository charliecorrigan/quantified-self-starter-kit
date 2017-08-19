$ = require('jquery');

$(document).ready(function(){
  getAllFoods();
});

const getAllFoods = function(){
  $.getJSON('https://quantify-this-api.herokuapp.com/api/v1/foods', function(result) {
    $.each(result, function(i, field){
      $('table').append(`<tr><td>${field.name}</td><td>${field.calories}</td><td><div class="delete-icon"></div></td><tr>`);
    })
  })
}