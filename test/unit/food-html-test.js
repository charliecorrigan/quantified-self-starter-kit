const assert = require('chai').assert;

const html = require('../../lib/javascript/food/html');

describe("food html contents", function(){
  it("creates a food row with interpolated values", function(){
    let food = {calories: 59, name: "peaches", id: "88"}
    assert.include(html.foodRow(food), `id="food-name-${food.id}"`)
    assert.include(html.foodRow(food), `id="food-calories-${food.id}"`)
    assert.include(html.foodRow(food), `delete-${food.id}`)
    assert.include(html.foodRow(food), food.name)
    assert.include(html.foodRow(food), food.calories)
  })
})
