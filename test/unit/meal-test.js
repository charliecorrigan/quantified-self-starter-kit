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

  it('can add food or foods', function(){
    let food1 = new Food({name: 'Spam', calories: 1200, id: 1})
    let food2 = new Food({name: 'Cake', calories: 1800, id: 2})
    let food3 = new Food({name: 'M&Ms', calories: 200, id: 3})

    meal.addFood(food1);
    assert.deepEqual(meal.foods, [food1]);

    meal.addFood([food2, food3]);
    assert.deepEqual(meal.foods, [food1, food2, food3]);
  });

  it('can remove food)', function(){
    meal.addFood(food);
    assert.deepEqual(meal.foods, [food]);

    meal.removeFood(food);
    assert.deepEqual(meal.foods, []);
  });

  it('can have a base', function(){
    meal.addFood(food);
    meal.base = 2000;

    assert.equal(meal.base, 2000);
  });

  it('can calculate calories', function(){
    food1 = new Food({name: 'Spam', calories: 1200, id: 1});
    food2 = new Food({name: 'Mutton', calories: 800, id: 2});

    meal.addFood(food1);
    meal.addFood(food2);

    assert.equal(meal.total(), 2000);
  });

  it('can calculate remaining calories', function(){
    food1 = new Food({name: 'Spam', calories: 1200, id: 1});
    food2 = new Food({name: 'Mutton', calories: 800, id: 2});

    meal.addFood(food1);
    meal.addFood(food2);
    meal.base = 2200;

    assert.equal(meal.remaining(), 200);
  })
});