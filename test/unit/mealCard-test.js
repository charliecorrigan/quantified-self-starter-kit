$ = require('jquery');

const assert = require('chai').assert;
const pry = require('pryjs');

const MealCard = require('../../lib/javascript/diary/mealCard');

describe('mealCard', function(){

  beforeEach(function(){
    food1 = {name: 'Spam', id: 1, calories: 1200}
    food2 = {name: 'Bannana', id: 2, calories: 100}
    meal = {name: 'Breakfast', id: 1, foods: [food1, food2]}

    mealCard = new MealCard(meal)
  })

  it('is a MealCard', function(){
    assert.equal(mealCard.constructor.name, 'MealCard')
  });

  it('has attributes', function(){
    assert.equal(mealCard.meal, meal)
    assert.equal(mealCard.name, 'Breakfast')
    assert.equal(mealCard.id, 1)
    assert.equal(mealCard.base, 400)
  });

  it('can calc total calories', function(){
    assert.equal(mealCard.total(), 1300)
  })

  it('can calc remaining calories', function(){
    mealCard.base = 2000
    assert.equal(mealCard.remaining(), 700)
  })
});