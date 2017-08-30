const html = require('./html')
const apiFoodUrl = 'https://quantify-this-api-express.herokuapp.com/api/v1/foods/'
// const apiFoodUrl = 'http://localhost:3000/api/v1/foods/'

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
    $.post(apiFoodUrl, foodParams)
    .then(function(result){
      $('.manage-foods > tbody > tr:first').after(html.foodRow(result));
      this.clearForm()
    }.bind(this))
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