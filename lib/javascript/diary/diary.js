const html = require('./html');
const MealCard = require('./mealCard');
const Service = require('../service');

class Diary {

  constructor() {
    this.initialize();
    this.meals;
  };

  initialize() {
    $.when(this.getMealData())
    .then(this.makeMeals)
    .then(this.serveMeals)
    .done(this.listen)
  };

  getMealData() {
    return new Service('meals').get();
  }

  makeMeals(result) {
    return result.map(function(meal){
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
      let btn = $(event.currentTarget).find('.rmv-btn');
      btn.css('display', 'flex').show();
    }, function(){
      $(event.currentTarget).find('.rmv-btn').hide();
    });

    $('.meal-card').on("click", '.rmv-btn', function(event) {
      MealCard.deleteRow(event);
    });
  }
};

module.exports = Diary;