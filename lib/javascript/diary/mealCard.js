const html = require('./html');
const FoodRow = require('./foodRow');

class MealCard {

  constructor(meal) {
    this.meal = meal;
    this.foodRows = [];
  };

  html(){
    return html.mealCard(this.meal);
  };

  build() {
    this.foodRows = this.meal.foods.map(function(food){
      return new FoodRow(food);
    });
  };

  render(element) {
    $(element).append(this.html());

    this.foodRows.forEach(function(foodRow){
      foodRow.render('#foods' + this.meal.id);
    }.bind(this));

    this.listenFor();
  };

  listenFor() {
    this.rowHover(this.deleteClick);
  };

  rowHover(deleteClick) {
    $('.row').hover(function(){
      let btn = $(this).find('.rmv-btn');

      deleteClick(btn);
      btn.css('display', 'flex').show();
    }, function(){
      $(this).find('.rmv-btn').hide();
    });
  }

  deleteClick(btn) {
    btn.on('click', function(event){
      $(event.target.parentElement).remove();
    });
  }
};

module.exports = MealCard;