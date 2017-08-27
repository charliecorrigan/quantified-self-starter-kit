const html = require('./html');

class FoodMenu {

  constructor(diary) {
    this.diary = diary;
  };

  showFoodMenuContext(event) {
    let menu = $(event.currentTarget).find('.food-dropdown-body').show();

    this.listen(menu);
  };

  hideFoodMenuContext() {
    $('.food-dropdown-row').hide();
    $('.food-dropdown-body').hide();
  };

  listen(menu) {
    menu.find('.food-input input').focus(function(event) {
      this.showDropDown(event, menu);

      $('.food-input input').on('keyup', function(event) {
        this.addFilteredFoods(event);
      }.bind(this));

      $('.food-dropdown .row').on('click', function(event){
        let mealid = event.currentTarget.offsetParent.offsetParent.dataset.id;
        let foodid = event.currentTarget.dataset.id;

        this.diary.addFood(mealid, foodid)
      }.bind(this));

      $('.meal-button').on('click', function(){
        window.location.href = './foods.html'
      });
    }.bind(this))
  };

  showDropDown(event, menu) {
    $('.food-dropdown-row').show()

    this.addFilteredFoods(event);
  };

  addFilteredFoods(event) {
    $('.food-dropdown').empty();

    let filter = $(event.currentTarget).val();
    let foods = this.filterFoods(filter);
    let foodDropDown = $(event.target.offsetParent.offsetParent).find('.food-dropdown')

    foods.forEach(function(food) {
      foodDropDown.append(html.foodDropDownRow(food))
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