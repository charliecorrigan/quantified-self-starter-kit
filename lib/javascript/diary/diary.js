const html = require('./html');

class Diary {

  constructor(meals = []) {
    this.meals = meals;
  };

  html() {
    return html.diaryFrame();
  };

  addMeal(meal) {
    this.meals.push(meal)
    this.meals = [].concat.apply([], this.meals);
  };
};

module.exports = Diary;