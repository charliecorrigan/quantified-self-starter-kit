class Meal {

  constructor(args){
    this.name = args['name'];
    this.id = args['id'];
    this.base = 0;
    this.foods = [];
  };

  addFood(food){
    this.foods.push(food);
  };

  removeFood(food){
    this.foods.splice(this.foods.indexOf(food), 1)
  };

  total() {
    // add up all foods calories
  };

  remaining() {
    // subtract total from base
  };
};

module.exports = Meal;