const assert = require('chai').assert;

const Food = require('../../lib/javascript/food');
const Meal = require('../../lib/javascript/meal');
const Diary = require('../../lib/javascript/diary/diary');
const MealCard = require('../../lib/javascript/diary/mealCard');

describe('Diary', function(){

  beforeEach(function(){
    diary = new Diary();
  });

  it('is a Diary', function(){
    assert.instanceOf(diary, Diary);
  });

  it('has attributes', function(){
    assert.deepEqual(diary.meals, []);
    assert.deepEqual(diary.mealCards, []);
  });

  it('can be constructed with meals', function(){
    let meals = [ new Meal({name: 'Breakfast', id: 1, foods: [] }),
                  new Meal({name: 'Dinner', id: 2, foods: [] }),
                  new Meal({name: 'Snacks', id: 3, foods: [] })];

    let diary = new Diary(meals);
    assert.deepEqual(diary.meals, meals);
  });
});