const html = require('./html');

class foodRow {

  constructor(food){
    this.food = food
  };

  html(){
    return html.foodRow(this.food)
  }

};

module.exports = foodRow;