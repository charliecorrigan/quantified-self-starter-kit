const assert = require('chai').assert;
const pry = require('pryjs');

const Food = require('../../lib/javascript/food');
const Meal = require('../../lib/javascript/meal');
const MealCard = require('../../lib/javascript/diary/mealCard');
const foodRow = require('../../lib/javascript/diary/foodRow');

describe('mealRow', function(){

  beforeEach(function(){
    meal = new Meal({name: 'Breakfast', id: 1})
    food = new Food({name: 'Spam', id: 1, calories: 1200})

    meal.addFood(food)
    mealCard = new MealCard(meal)
  })

  it('is a MealCard', function(){
    assert.equal(mealCard.constructor.name, 'MealCard')
  });

  it('has attributes', function(){
    assert.equal(mealCard.meal, meal)
  })

  it('has html', function(){
    assert.include(mealCard.html(), 'Breakfast');
    assert.include(mealCard.html(), '1200');
    assert.include(mealCard.html(), '-1200');
    assert.include(mealCard.html(), "class='meal-card'");
    assert.include(mealCard.html(), "class='meal-table'");
    assert.include(mealCard.html(), "id='meal-card1'");
  });

  it('can build rows', function(){
    mealCard.build();

    assert.equal(mealCard.foodRows.length, 1);
    assert.instanceOf(mealCard.foodRows[0], foodRow);
  });
});