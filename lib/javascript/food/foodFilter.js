const html = require('./html')

class FoodFilter {
  constructor(){}

  renderFoodFilter(){
     $('.food-filter-container').append(html.foodFilter());
  }

  listen(){
    $('input#food-filter').on('keyup', function(event){
      this.hideUnwantedResults()
    }.bind(this))
  }

  hideUnwantedResults(){
    let rows = $('.food-name')
    $.each(rows, function(i, tdTag){
      let foodName = (tdTag.innerText).toLowerCase();
      let searchParams = (event.target.value).toLowerCase();
      if (!foodName.includes(searchParams)) {
        $(this).parent().css("display", "none")
      };
    });
  }

}

module.exports = FoodFilter