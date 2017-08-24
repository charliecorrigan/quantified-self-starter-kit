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
    .then((data) => this.meals = this.makeMeals(data) )
    .then(this.serveMeals)
    .then(() => {
      this.listen()
    })
  };

  find(id) {
    return $.grep(this.meals, function(meal, i) {
      return meal.id == id;
    })[0];
  }

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
    let element;

    $('.row').hover(function(event) {
      element = $(event.currentTarget).find('.rmv-btn');

      element.css('display', 'flex').show();
    }, function(){
      element.hide();
    });

    $('.meal-card').on("click", '.rmv-btn', function(event) {
      element = this.find(event.currentTarget.offsetParent.dataset.id)

      element.deleteRow(event);
    }.bind(this));
  }
};

module.exports = Diary;