const html = require('./html');
const MealCard = require('./mealCard');
const Service = require('../service');

class Diary {

  constructor() {
    this.meals = this.initialize();
  };

  initialize() {
    return $.when(this.getMealData())
    .then(this.makeMeals)
    .then(this.serveMeals)
    .then(this.listen)
  };

  findMeal(id) {
    return $.grep(this.meals, function(meal, i) {
      return meal.id == id;
    });
  }

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

  listen(mealCards) {

    $('.row').hover(function(event) {
      let btn = $(event.currentTarget).find('.rmv-btn');
      btn.css('display', 'flex').show();
    }, function(){
      $(event.currentTarget).find('.rmv-btn').hide();
    });

    $('.meal-card').on("click", '.rmv-btn', function(event) {
      MealCard.deleteRow(event);
    });

    return mealCards;
  }
};

module.exports = Diary;