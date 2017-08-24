const assert = require('chai').assert;
$ = require('jquery');

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
    assert.deepEqual(diary.meals, {});
  });

  xit('can find a meal', function(){
    let meal1 = new MealCard({name: 'Breakfast', id: 1, foods: [] });
    let meal2 = new MealCard({name: 'Dinner', id: 2, foods: [] });
    let meal3 = new MealCard({name: 'Snacks', id: 3, foods: [] });

    diary.meals = [ meal1, meal2, meal3 ]

    assert.equal(diary.find(2), meal2);
  });
});