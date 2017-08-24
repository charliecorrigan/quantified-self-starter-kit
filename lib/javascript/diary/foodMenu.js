const html = require('./html');

class FoodMenu {

  constructor(diary) {
    this.diary = diary;
  };

  addFoodMenu(event) {
    $(event.currentTarget).find('.foods').append(html.foodMenu());

    this.listen();
  };

  removeFoodMenu() {
    $('.food-menu').remove();
  };

  listen() {
    
  }

};

module.exports = FoodMenu;