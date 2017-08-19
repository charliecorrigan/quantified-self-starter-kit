const assert = require('chai').assert;
const pry = require('pryjs');
const Food = require('../../lib/javascript/food');

describe('Food', function(){

  beforeEach(function(){
    food = new Food({name: 'Spam', calories: 1200, id: 1})
  })

  it('is Food', function(){
    assert.typeOf(food, 'object')
  });

  it('has attributes', function(){
    assert.equal(food.name, 'Spam');
    assert.equal(food.id, 1);
    assert.equal(food.calories, 1200);
  });
});