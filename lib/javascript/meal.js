pry = require('pryjs')
class Meal {

  constructor(params){
    this.name = params['name'];
    this.id = params['id'];
    this.foods = params['foods'];
    this.base = 0;
  };

  addFood(food){
    this.foods.push(food);
    this.foods = [].concat.apply([], this.foods);
  };

  removeFood(food){
    this.foods.splice(this.foods.indexOf(food), 1)
  };

  total() {
    return this.foods.reduce(function(total, food){
      return total + food.calories;
    }, 0);
  };

  remaining() {
    return this.base - this.total();
  };
};

module.exports = Meal;