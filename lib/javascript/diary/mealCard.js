const html = require('./html');
const FoodRow = require('./foodRow');

class MealCard {

  constructor(meal) {
    this.meal = meal;
    this.foodRows = [];
  };

  html(){
    return html.mealCard(this.meal);
  };

  build() {
    this.foodRows = this.meal.foods.map(function(food){
      return new FoodRow(food);
    });
  };

  render(element) {
    $(element).append(this.html());

    this.foodRows.forEach(function(foodRow){
      foodRow.render('.header' + this.meal.id);
    }.bind(this));
  };
};

module.exports = MealCard;