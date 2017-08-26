const html = require('./html');
const Service = require('../service')


const mealUrl = 'https://quantify-this-api.herokuapp.com/api/v1/meals'

class MealCard {

  constructor(meal) {
    this.meal = meal;
    this.mealCard;
    this.id = meal.id;
    this.name = meal.name;
    this.base = this.getBase()[this.name];
  };

  serveMeal() {
    this.mealCard = $(html.mealCard(this)).appendTo($('.diary-frame'));

    this.serveFood();
  }

  serveFood() {
    this.meal.foods.forEach(function(food) {
      this.mealCard.find('.foods').append(html.foodRow(food))
    }.bind(this));
  }

  total() {
    return this.meal.foods.reduce(function(total, food){
      return total + food.calories;
    }, 0);
  };

  remaining() {
    return this.base - this.total();
  };

  updateTotals() {
    this.mealCard.find('.totals .total .cals').text(this.total());
    this.mealCard.find('.totals .remaining .cals').text(this.remaining());

    if (this.remaining() <= 0) {
      $(this.mealCard).find('.totals .remaining .cals').css('color', 'red');
    } else {
      $(this.mealCard).find('.totals .remaining .cals').css('color', 'green');
    }
  }

  deleteRow(event) {
    let row = event.currentTarget.parentElement;
    let foodid = row.dataset.foodid;

    this.removeFood(foodid)
    .then(function(){
      row.remove();

      this.meal.foods.find(function(food, i){
        if (food.id == foodid) {
          return this.meal.foods.splice(i, 1)
        };
      }.bind(this))
    }.bind(this))
    .done(function(){
      this.updateTotals()
    }.bind(this))
    .fail(function(){
      alert("Could not Delete Food")
    });
  };

  removeFood(foodId) {
    return new Service('meals/' + this.id + '/foods/' + foodId).delete();
  };

  getBase() {
    return { Breakfast: 400,
      Lunch: 600,
      Dinner: 800,
      Snack: 200 }
  };
};

module.exports = MealCard;