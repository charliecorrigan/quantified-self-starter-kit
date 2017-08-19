const assert = require('chai').assert;
const pry = require('pryjs');
const Food = require('../../lib/javascript/meal');
const Meal = require('../../lib/javascript/meal');

describe('Meal', function(){

  beforeEach(function(){
    meal = new Meal({name: 'Breakfast'})
    food = new Food({name: 'Spam', calories: 1200, id: 1})
  })

  it('is Meal', function(){
    assert.equal(meal.constructor.name, 'Food')
  });

  it('has attributes', function(){
    assert.equal(meal.name, 'Breakfast');
    assert.equal(meal.foods, []);
  });

  it('can add and remove a food', function(){
    meal.addFood(food);
    assert.deep_equal(meal.foods, [food]);

    meal.removeFood(food);
    assert.deep_equal(meal.foods, []);
  });
});