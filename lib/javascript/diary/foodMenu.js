const html = require('./html');

class FoodMenu {

  constructor(diary) {
    this.diary = diary;
  };

  addFoodMenuContext(event) {
    let menu = $(html.foodMenuContext()).insertAfter($(event.currentTarget).find('.foods'));

    this.listen(menu);
  };

  removeFoodMenuContext() {
    $('.food-dropdown-body').remove();
  };

  listen(menu) {
    menu.find('.food-input').focus(function(event) {
      this.addDropDown(event)
    }.bind(this))
  };

  addDropDown(event) {
    $('.food-dropdown-body').append(html.foodDropDown())

    this.addfilteredFoods(event.target);
  };

  addfilteredFoods(target) {
    let foods = this.filterFoods(target.textContent);
  };

  filterFoods(filterBy) {
    return this.diary.foods;
  };
};

module.exports = FoodMenu;