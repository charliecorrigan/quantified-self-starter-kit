const html = require('./html');
const FoodRow = require('./foodRow');
const Service = require('../service')


const mealUrl = 'https://quantify-this-api.herokuapp.com/api/v1/meals'

class MealCard {

  constructor(meal) {
    this.meal = meal;
    this.id = meal.id;
    this.name = meal.name;
    this.foods = meal.foods;
    this.base = 0;
  };

  serveMeal() {

    $('.diary-frame').append(html.mealCard(this));
    let mealCard = $('#meal-card' + this.id)

    this.foods.forEach(function(food) {
      mealCard.find('.foods').append(html.foodRow(food))
    });
  }

  total() {
    return this.foods.reduce(function(total, food){
      return total + food.calories;
    }, 0);
  };

  remaining() {
    return this.base - this.total();
  };

  deleteRow(event) {

    let row = event.currentTarget.parentElement;
    let foodid = row.dataset.foodid;

    $.when(this.removeFood(row.dataset.foodid))
    .then(row.remove())
  };

  removeFood(foodId) {
    return new Service('meals/' + this.id + '/foods/' + foodId).delete();
  };
};

module.exports = MealCard;