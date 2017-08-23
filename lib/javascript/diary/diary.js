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
    $('.row').hover(function(event) {
      let btn = $(event.currentTarget).find('.rmv-btn');
      btn.css('display', 'flex').show();
    }, function(){
      $(event.currentTarget).find('.rmv-btn').hide();
    });

    $('.meal-card').on("click", '.rmv-btn', function(event) {
      let mealCard = this.find(event.currentTarget.offsetParent.dataset.id)

      mealCard.deleteRow(event);
    }.bind(this));
  }
};

module.exports = Diary;