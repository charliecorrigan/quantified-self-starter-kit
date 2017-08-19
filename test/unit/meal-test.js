const assert = require('chai').assert;
const pry = require('pryjs');
const Food = require('../../lib/javascript/food');
const Meal = require('../../lib/javascript/meal');

describe('Meal', function(){

  beforeEach(function(){
    meal = new Meal({name: 'Breakfast', id: 1})
    food = new Food({name: 'Spam', calories: 1200, id: 1})
  })

  it('is Meal', function(){
    assert.equal(meal.constructor.name, 'Meal')
  });

  it('has attributes', function(){
    assert.equal(meal.name, 'Breakfast');
    assert.equal(meal.id, 1);
    assert.equal(meal.base, 0);
    assert.deepEqual(meal.foods, []);
  });

  it('can add and remove a food', function(){
    meal.addFood(food);
    assert.deepEqual(meal.foods, [food]);

    meal.removeFood(food);
    assert.deepEqual(meal.foods, []);
  });
});