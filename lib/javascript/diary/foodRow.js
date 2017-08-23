const html = require('./html');

class FoodRow {

  constructor(food) {
    this.initialize(food)
  };

  initialize(food) {
    $(food).append(this.html(food))
  };

  html(food) {
    return html.foodRow(food)
  };
};

module.exports = FoodRow;