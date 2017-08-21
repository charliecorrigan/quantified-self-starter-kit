const html = require('./html')

class FoodTable{

  constructor(){

  }

  renderFoodTable(){
    this.getAllFoods()
  }

  getAllFoods(){
    $.getJSON('https://quantify-this-api.herokuapp.com/api/v1/foods', function(result) {
      let sortedResult = result.sort(function(a,b){
        return b.id-a.id
      });
      $.each(sortedResult, function(i, food){
        $('.manage-foods').append(html.foodRow(food));
      });
    });
  };

  listen(){
    this.listenForDelete()
  }

  listenForDelete(){
    $('.manage-foods').on('click', '.delete-icon', function(event){
      var foodId = event.target.classList[1].split('-').pop();
      this.deleteFood(foodId);
      $(event.target.parentElement.parentElement).remove()
    }.bind(this))
  }

  deleteFood(id){
    return $.ajax({
      url: 'https://quantify-this-api.herokuapp.com/api/v1/foods/' + id,
      method: 'DELETE',
    }).done(function() {
      $(`#food-name-${id}`).parent().remove();
    }.bind(this)).catch(function(error){
      console.log(error);
      })
  }
}

module.exports = FoodTable