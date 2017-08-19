const html = require('./html');

class MealCard {

  constructor(meal){
    this.meal = meal;
  };

  html(){
    return html.mealCard(this.meal);
  };
};

module.exports = MealCard;