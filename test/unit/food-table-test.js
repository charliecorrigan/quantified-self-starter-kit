const assert = require('chai').assert;
const foodTable = require('../../lib/javascript/food/foodTable');

describe("foodTable", function(){
  it("sorts the results", function(){
    let food = new foodTable;
    let mockResult = [{id: 22, name: "Mint", calories: 67},
                      {id: 99, name: "Banana", calories: 150},
                      {id: 4, name: "Fruit Snacks", calories: 120}];
    sorted = food.sortFoods(mockResult);
    assert.deepEqual(sorted[0], {id: 99, name: "Banana", calories: 150});
    assert.deepEqual(sorted[1], {id: 22, name: "Mint", calories: 67});
    assert.deepEqual(sorted[2], {id: 4, name: "Fruit Snacks", calories: 120});
  });

  it("assigns params for updating food name", function(){
    let food = new foodTable;
    let field = "name";
    let newFoodValue = "Soup";
    let params = food.assignParams(field, newFoodValue);

    assert.deepEqual(params, {name: newFoodValue});
  });

  it("assigns params for updating food calories", function(){
    let food = new foodTable;
    let field = "calories";
    let newFoodValue = 200;
    let params = food.assignParams(field, newFoodValue);

    assert.deepEqual(params, {calories: newFoodValue});
  });
});