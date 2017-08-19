const assert = require('chai').assert;
const FoodRow = require('../../lib/javascript/diary/foodRow')
const Food = require('../../lib/javascript/food')

describe('foodRow', function(){

  beforeEach(function(){
    food = new Food({name: 'Spam', id: 1, calories: 1200})
    row = new FoodRow(food)
  })

  it('is a foodRow', function(){
    assert.equal(row.constructor.name, 'FoodRow')
  });

  it('has attributes', function(){
    assert.equal(row.food, food)
  })

  it('has html', function(){
    assert.include(row.html(), 'Spam');
    assert.include(row.html(), '1');
    assert.include(row.html(), '1200');
    assert.include(row.html(), "class='row'");
    assert.include(row.html(), "id='foodrow1'");
  });
});