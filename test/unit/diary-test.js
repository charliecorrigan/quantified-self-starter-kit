pry = require('pryjs');

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

  it('can be construted with meals', function(){
    let meals = [ new Meal({name: 'Breakfast', id: 1}),
                  new Meal({name: 'Dinner', id: 2}),
                  new Meal({name: 'Snacks', id: 3}) ];

    let diary = new Diary(meals);
    assert.deepEqual(diary.meals, meals);
  });

  it('can be build meal cards', function(){
    let meals = [ new Meal({name: 'Breakfast', id: 1}),
                  new Meal({name: 'Dinner', id: 2}),
                  new Meal({name: 'Snacks', id: 3}) ];

    let diary = new Diary(meals);
    diary.build();

    assert.equal(diary.mealCards.length, 3);
    assert.instanceOf(diary.mealCards[0], MealCard);
  });
});