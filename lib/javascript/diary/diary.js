const html = require('./html');
const MealCard = require('./mealCard');

class Diary {

  constructor(meals = []) {
    this.meals = meals
    this.mealCards = [];
  };

  html() {
    return html.diaryFrame();
  };

  buildMealCards() {
    this.mealCards = this.meals.map(function(meal){
      return new MealCard(meal);
    });
  };

  update() {
    this.mealCards.forEach(function(mealCard){
      mealCard.update();
    });
  };

  render(element){
    $(element).append(this.html());

    this.mealCards.forEach(function(mealCard){
      mealCard.render('.diary-frame')
    });
  };
};

module.exports = Diary;