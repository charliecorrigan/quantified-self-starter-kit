const html = require('./html')

class FoodForm {
  constructor(){}

  renderFoodForm() {
    $('.new-food-form-container').after(html.foodForm())
  }

  listen() {
    this.listenForSubmit()
  }

  listenForSubmit(){
    $('.new-food-form').on('submit', function(){
      event.preventDefault();
      var foodName = $('input[name="new-food-name"]').val();
      var foodCalories = $('input[name="new-food-calories"]').val();
      this.postNewFood({food: {name: foodName, calories: foodCalories}});
    }.bind(this));
  }

  postNewFood(foodParams){
    $.post('https://quantify-this-api.herokuapp.com/api/v1/foods', foodParams)
    .then(function(result){
      $('.manage-foods > tbody > tr:first').after(html.foodRow(result));
      this.clearForm})
    .catch(this.handleError);
  };

  handleError(error) {
    console.error(error);
  };

  clearForm(){
    $('input[name="new-food-name"]').val("");
    $('input[name="new-food-calories"]').val("");
  };
}

module.exports = FoodForm