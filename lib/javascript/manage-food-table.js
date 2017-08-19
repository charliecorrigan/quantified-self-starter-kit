$ = require('jquery');

$(document).ready(function(){
  getAllFoods();
  $('.new-food-form').on('submit', function(){
    event.preventDefault();
    var foodName = $('input[name="new-food-name"]').val();
    var foodCalories = $('input[name="new-food-calories"]').val();
    $('table > tbody > tr:first').after(`<tr><td>${foodName}</td><td>${foodCalories}</td><td><div class="delete-icon"></div></td><tr>`);
    postNewFood({food: {name: foodName, calories: foodCalories}});

    // debugger;
  });
});

const getAllFoods = function(){
  $.getJSON('https://quantify-this-api.herokuapp.com/api/v1/foods', function(result) {
    sortedResult = result.sort(function(a,b){
      return b.id-a.id
    });
    $.each(sortedResult, function(i, field){
      $('table').append(`<tr><td>${field.name}</td><td>${field.calories}</td><td><div class="delete-icon"></div></td><tr>`);
    });
  });
};

const postNewFood = function(foodParams){
  $.post('https://quantify-this-api.herokuapp.com/api/v1/foods', foodParams)
  .then(prependFood)
  .catch(handleError);
};

const handleError = function (error) {
  console.error(error);
};

const prependFood = function(){
  $('input[name="new-food-name"]').val("");
  $('input[name="new-food-calories"]').val("");
};