$ = require('jquery');
const FoodTable = require('./food/foodTable');
const FoodForm = require('./food/foodForm');

$(document).ready(function(){
  let foodTable = new FoodTable()
  let foodForm = new FoodForm()
  foodForm.renderFoodForm();
  foodForm.listen();
  foodTable.renderFoodTable();
  foodTable.listen();

  // $('.new-food-form').on('submit', function(){
  //   event.preventDefault();
  //   var foodName = $('input[name="new-food-name"]').val();
  //   var foodCalories = $('input[name="new-food-calories"]').val();
  //   postNewFood({food: {name: foodName, calories: foodCalories}});
  //   $('.manage-foods > tbody > tr:first').after(`<tr><td class="food-name">${foodName}</td><td>${foodCalories}</td><td><div class="delete-icon"></div></td><tr>`);

  // });

  $('.manage-foods').on('click', '.food-name', function(event){
    var originalText = "" + this.textContent + "";
    var newContent;
    var id = this.id.split('-').pop();
    this.innerHTML = `<form class="edit-food"><input type="text" id="food-name-field-${id}" name="update-food-name" value='${originalText}'></form>`
    event.preventDefault();

    $('.manage-foods').on('input', 'form', function(e){
      var newContent = event.target.lastChild.lastChild.value;
      debugger;
    });

    $(document).on('click', 'html', {text: originalText, lastId: id}, function(event) {
      if(!$(event.target).closest(`#food-name-${id}`).length) {
        $(`#food-name-field-${event.data.lastId}`).parent().parent().parent().find(`#food-name-${event.data.lastId}`).text(event.data.text);
      };
    });
  });
});



// const postNewFood = function(foodParams){
//   $.post('https://quantify-this-api.herokuapp.com/api/v1/foods', foodParams)
//   .then(clearForm)
//   .catch(handleError);
// };

// const handleError = function (error) {
//   console.error(error);
// };

// const clearForm = function(){
//   $('input[name="new-food-name"]').val("");
//   $('input[name="new-food-calories"]').val("");
// };
