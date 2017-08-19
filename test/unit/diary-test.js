const assert = require('chai').assert;
pry = require('pryjs');
const Food = require('../../lib/javascript/food');
const Meal = require('../../lib/javascript/meal');
const Diary = require('../../lib/javascript/diary/diary');

describe('Diary', function(){

  beforeEach(function(){
    diary = new Diary();
  });

  it('is a Diary', function(){
    assert.instanceOf(diary, Diary);
  });

  it('has attributes', function(){
    assert.deepEqual(diary.meals, []);
  });

  it('can be construted with meals', function(){
    let meals = [ new Meal({name: 'Breakfast', id: 1}),
                  new Meal({name: 'Dinner', id: 2}),
                  new Meal({name: 'Snacks', id: 3}) ];

    let diary = new Diary(meals);
    assert.deepEqual(diary.meals, meals);
  });

  it('add meal or meals', function(){
    let meal1 = new Meal({name: 'Breakfast', id: 1});
    let meal2 = new Meal({name: 'Dinner', id: 2});
    let meal3 = new Meal({name: 'Snacks', id: 3});

    diary.addMeal(meal1);
    assert.deepEqual(diary.meals, [meal1]);

    diary.addMeal([meal2, meal3]);
    assert.deepEqual(diary.meals, [meal1, meal2, meal3]);
  });
});