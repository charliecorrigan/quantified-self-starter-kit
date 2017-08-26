$ = require('jquery');
const assert = require('chai').assert;
const pry = require('pryjs');

const html = require('../../lib/javascript/diary/html');
const MealCard = require('../../lib/javascript/diary/mealCard');

describe('html', function(){
  it('has foodRow html', function(){
    let food = {name: 'Spam', id: 1, calories: 1200}

    assert.include(html.foodRow(food), "id='foodrow1'");
    assert.include(html.foodRow(food), "data-foodId='1'");
    assert.include(html.foodRow(food), "Spam");
    assert.include(html.foodRow(food), "1200");
  });

  it('has mealCard html', function(){
    let food1 = {name: 'Spam', id: 1, calories: 1200}
    let food2 = {name: 'Bannana', id: 2, calories: 100}
    let meal = {name: 'Breakfast', id: 1, foods: [food1, food2]}

    let mealCard = new MealCard(meal)

    assert.include(html.mealCard(mealCard), "class='meal-card'");
    assert.include(html.mealCard(mealCard), "data-id='1'");
    assert.include(html.mealCard(mealCard), "id='meal-card1'");
    assert.include(html.mealCard(mealCard), "Breakfast");
  });

  it('has diaryFrame html', function(){
    assert.include(html.diaryFrame(), "class='diary-frame'")
  });

})