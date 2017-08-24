$ = require('jquery');

const html = require('./html');
const MealCard = require('./mealCard');
const Service = require('../service');

class Diary {

  constructor() {
    this.meals = {};
    this.foods = {};
  };

  open() {
    this.getFoodData()
    .then( (data) => this.meals = data )

    this.getMealData()
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

    $('.row').hover(function(event) {
      $(event.currentTarget).find('.rmv-btn').css('display', 'flex').show();
    }, function(){
      $(event.currentTarget).find('.rmv-btn').hide();
    });

    $('.meal-card').on('click', '.rmv-btn', function(event) {
      let domElement = this.findMeal(event.currentTarget.offsetParent.dataset.id);

      domElement.deleteRow(event);
    }.bind(this));

    $('.meal-card').hover( function(event) {
        let domElement = this.findMeal(event.currentTarget.dataset.id);

        domElement.addFoodMenu();
      }.bind(this), function(event) {
        let domElement = this.findMeal(event.currentTarget.dataset.id);

        domElement.removeFoodMenu();
      }.bind(this)
    );
  };

  findMeal(id) {
    return $.grep(this.meals, function(meal, i) {
      return meal.id == id;
    })[0];
  };
};

module.exports = Diary;