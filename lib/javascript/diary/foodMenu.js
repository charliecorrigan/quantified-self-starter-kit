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
    event.preventDefault();

    menu.find('.food-input input').focus(function(event) {
      this.addDropDown(event)

      $(event.currentTarget).on('keyup', function(event) {
        $('.scroll-menu').empty()

        this.addFilteredFoods();
      }.bind(this))
    }.bind(this))
  };

  addDropDown(event) {
    $('.food-dropdown-body').append(html.foodDropDown())

    this.addFilteredFoods(event.target);
  };

  addFilteredFoods() {
    let filter = $('.food-input input').val()
    let foods = this.filterFoods(filter);

    foods.forEach(function(food) {
      $('.scroll-menu').append(html.foodDropDownRow(food))
    })
  };

  filterFoods(filter) {
    if (filter == "") { return this.diary.foods }

    return this.diary.foods.filter(function(food){
      return (food.name.slice(0, filter.length).toLowerCase() == filter.toLowerCase())
    });
  };
};

module.exports = FoodMenu;