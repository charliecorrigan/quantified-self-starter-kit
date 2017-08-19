// I should see a table of all my foods, with Name, Calories and a delete icon for each food
// <tr>
// <td>This is a name.</td>
// <td>This is a calorie.</td>
// <td>This is a delete icon.</td>
// <tr> -->
// tableclass is manage-foods

// https://quantify-this-api.herokuapp.com/api/v1/foods
// return $.getJSON(`${host}/posts`)
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