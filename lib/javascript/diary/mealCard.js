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

  static deleteRow(event) {
    let mealCard = event.currentTarget.offsetParent;
    let mealId = mealCard.dataset.id;
    let row = event.currentTarget.parentElement;
    let foodid = row.dataset.foodid;

    debugger
    $.when(this.removeFood(mealId, row.dataset.foodid))
    .then(row.remove())
  };

  static removeFood(mealId, foodId) {
    return new Service('meals/' + mealId + '/foods/' + foodId).delete();
  };
};

module.exports = MealCard;