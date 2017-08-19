const html = require('./html');

class FoodRow {

  constructor(food){
    this.food = food;
  };

  html(){
    return html.foodRow(this.food)
  };

  render(element){
    $(element).after(this.html());
  };
};

module.exports = FoodRow;