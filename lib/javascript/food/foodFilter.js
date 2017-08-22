const html = require('./html')

class FoodFilter {
  constructor(){}

  renderFoodFilter(){
     $('.food-filter-container').append(html.foodFilter());
  }
}

module.exports = FoodFilter