const html = require('./html')

class FoodFilter {
  constructor(){}

  renderFoodFilter(){
     $('.food-filter-container').append(html.foodFilter());
  }

  listen(){
    $('input#food-filter').on('keyup', function(event){
      if (event.keyCode === 8) {
        this.unhideOnBackspace()
      }
      this.hideUnwantedResults()
    }.bind(this))
  }

  hideUnwantedResults(){
    let rows = $('.food-name')
    $.each(rows, function(i, tdTag){
      let foodName = (tdTag.innerText).toLowerCase();
      let searchParams = (event.target.value).toLowerCase();
      if (!foodName.includes(searchParams)) {
        $(this).parent().hide()
      };
    });
  }
  unhideOnBackspace(){
    let rows = $('.food-name')
    $.each(rows, function(i, tdTag){
      let foodName = (tdTag.innerText).toLowerCase();
      let searchParams = (event.target.value).toLowerCase();
      if (foodName.includes(searchParams)) {
        $(this).parent().show()
      };
    });
  }


}

module.exports = FoodFilter