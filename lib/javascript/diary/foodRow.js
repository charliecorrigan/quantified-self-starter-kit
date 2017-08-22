const html = require('./html');

class FoodRow {

  constructor(food){
    this.food = food;
    this.body = null;
  };

  html(){
    return html.foodRow(this.food)
  };

  render(element){
    $(element).append(this.html())
  };
};

module.exports = FoodRow;