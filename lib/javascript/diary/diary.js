$ = require('jquery');

const html = require('./html');
const MealCard = require('./mealCard');
const FoodMenu = require('./foodMenu');
const Service = require('../service');
const TotalsTable = require('./totalsTable');

class Diary {

  constructor() {
    this.meals = {};
    this.foods = {};
  };

  open() {
    this.getFoodData()
    .then( (data) => this.foods = data )

    this.getMealData()
    .then( (data) => this.meals = this.makeMeals(data) )
    .then( this.serveMeals )
    .then( this.updateTotals )
    .then( () => this.listen() )
  };

  getFoodData() {
    return new Service('foods').get()
  };

  getMealData() {
    return new Service('meals').get()
  };

  makeMeals(result) {
    return result.map( function(meal) {
      return new MealCard(meal)
    });
  };

  serveMeals(mealCards) {
    $('.diary').append(html.diaryFrame());

    mealCards.forEach(function(mealCard) {
      mealCard.serveMeal();
    });

    return mealCards
  };

  updateTotals(meals) {
    meals.forEach(function(meal){
      meal.updateTotals()
    })
    TotalsTable.updateTotals()
    return meals
  }

  listen() {
    let foodMenu = new FoodMenu(this);

    $('.meal-card .row').hover(function(event) {
      $(event.currentTarget).find('.rmv-btn').css('display', 'flex').show();
    }, function(){
      $(event.currentTarget).find('.rmv-btn').hide();
    });

    $('.meal-card').on('click', '.rmv-btn', function(event) {
      let domElement = this.findMeal(event.currentTarget.offsetParent.dataset.id);

      domElement.deleteRow(event);
    }.bind(this));

    $('.meal-card').hover( function(event) {
        foodMenu.showFoodMenuContext(event);
      }.bind(this), function(event) {
        foodMenu.hideFoodMenuContext();
      }
    );
  };

  addFood(mealId, foodId) {
    let mealCard = this.findMeal(mealId);
    mealCard.addRow(foodId);
  }


  findMeal(id) {
    return $.grep(this.meals, function(meal, i) {
      return meal.id == id;
    })[0];
  };
};

module.exports = Diary;