$ = require('jquery');

$(document).ready(function(){
  getAllFoods();
  $('.new-food-form').on('submit', function(){
    event.preventDefault();
    var foodName = $('input[name="new-food-name"]').val();
    var foodCalories = $('input[name="new-food-calories"]').val();
    postNewFood({food: {name: foodName, calories: foodCalories}});
    $('.manage-foods > tbody > tr:first').after(`<tr><td class="food-name">${foodName}</td><td>${foodCalories}</td><td><div class="delete-icon"></div></td><tr>`);

  });
  $('.manage-foods').on('click', '.delete-icon', function(event){
    var foodId = this.classList[1].split('-').pop();
    deleteFood(foodId);
    $(this.parentElement.parentElement).remove()
  })

  $('.manage-foods').on('click', '.food-name', function(event){
    var originalText = this.textContent;
    var id = this.id.split('-').pop();
    this.innerHTML = `<form class="edit-food"><input type="text" name="update-food-name" id="food-name-field-${id}" value=${originalText}></form>`;
    $(document).on('click', 'html', {text: originalText, lastId: id}, function(event) {
      if(!$(event.target).closest(`#food-name-${id}`).length) {
        $(`#food-name-field-${event.data.lastId}`).parent().parent().parent().find(`#food-name-${event.data.lastId}`).text(event.data.text);
      };
    })
  });
});

const getAllFoods = function(){
  $.getJSON('https://quantify-this-api.herokuapp.com/api/v1/foods', function(result) {
    sortedResult = result.sort(function(a,b){
      return b.id-a.id
    });
    $.each(sortedResult, function(i, field){
      $('.manage-foods').append(`<tr><td class="food-name" id="food-name-${field.id}">${field.name}</td><td>${field.calories}</td><td><div class="delete-icon delete-${field.id}"></div></td><tr>`);
    });
  });
};

const postNewFood = function(foodParams){
  $.post('https://quantify-this-api.herokuapp.com/api/v1/foods', foodParams)
  .then(clearForm)
  .catch(handleError);
};

const handleError = function (error) {
  console.error(error);
};

const clearForm = function(){
  $('input[name="new-food-name"]').val("");
  $('input[name="new-food-calories"]').val("");
};

const deleteFood = function(id){
    return $.ajax({
      url: 'https://quantify-this-api.herokuapp.com/api/v1/foods/' + id,
      method: 'DELETE',
    }).done(function() {
      getAllFoods();
    });
}