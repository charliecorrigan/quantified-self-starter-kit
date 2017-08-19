const assert = require('chai').assert;
const Row = require('../../../lib/diary/foodRow')

describe('foodRow', function(){

  is('is a foodRow', function(){
    let row = Row.new
    assert.typeOf(row, 'row')
  });

  it('has html', function(){
    let row = Row.new(food)
    assert.equals(row.html, `<span class=>`)
  })
})