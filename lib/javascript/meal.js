class Meal {

  constructor(args){
    this.name = args['name'];
    this.id = args['id'];
    this.base = 0;
    this.foods = [];
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