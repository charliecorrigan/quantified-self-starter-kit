$ = require('jquery');

const html = require('./html');
const MealCard = require('./mealCard');
const Service = require('../service');

class Diary {

  constructor() {
    this.meals = {};
  };

  open() {
    this.meals = this.getMealData()
    .then( (data) => this.meals = this.makeMeals(data) )
    .then( this.serveMeals )
    .then( () => this.listen() )
  };

  getMealData() {
    return new Service('meals').get()
  }

  makeMeals(result) {
    return result.map( function(meal) {
      return new MealCard(meal)
    });
  }

  serveMeals(mealCards) {
    $('.diary').append(html.diaryFrame());

    mealCards.forEach(function(mealCard) {
      mealCard.serveMeal();
    });
  }

  listen() {
    let domElement;

    $('.row').hover(function(event) {
      domElement = $(event.currentTarget).find('.rmv-btn');

      domElement.css('display', 'flex').show();
    }, function(){
      domElement.hide();
    });

    $('.meal-card').on("click", '.rmv-btn', function(event) {
      domElement = this.findMeal(event.currentTarget.offsetParent.dataset.id)

      domElement.deleteRow(event);
    }.bind(this));
  };

  findMeal(id) {
    return $.grep(this.meals, function(meal, i) {
      return meal.id == id;
    })[0];
  };
};

module.exports = Diary;