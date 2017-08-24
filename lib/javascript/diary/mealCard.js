const html = require('./html');
const Service = require('../service')


const mealUrl = 'https://quantify-this-api.herokuapp.com/api/v1/meals'

class MealCard {

  constructor(meal) {
    this.meal = meal;
    this.mealCard;
    this.id = meal.id;
    this.name = meal.name;
    this.foods = meal.foods;
    this.base = 0;
  };

  serveMeal() {
    this.mealCard = $(html.mealCard(this)).appendTo($('.diary-frame'));

    this.serveFood();
  }

  serveFood() {
    this.foods.forEach(function(food) {
      this.mealCard.find('.foods').append(html.foodRow(food))
    }.bind(this));
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

    this.removeFood(row.dataset.foodid)
    .then(row.remove())
    .fail(function(){
      alert("Could not Delete Food")
    });
  };

  removeFood(foodId) {
    return new Service('meals/' + this.id + '/foods/' + foodId).delete();
  };

  addFoodMenu() {
    this.mealCard.find('.foods').append(html.foodMenu());
  };

  removeFoodMenu() {
    $('.food-menu').remove();
  };
};

module.exports = MealCard;