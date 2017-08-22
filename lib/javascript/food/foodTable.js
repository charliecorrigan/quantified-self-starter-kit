const html = require('./html')
const apiFoodUrl = 'https://quantify-this-api.herokuapp.com/api/v1/foods/'

class FoodTable{

  constructor(){}

  renderFoodTable(){
    $('.new-food-table-container').after(html.foodTable())
    this.getAllFoods()
  }

  getAllFoods(){
    $.getJSON(apiFoodUrl, function(result) {
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
    this.listenForEditFoodName()
  }

  listenForDelete(){
    $('.manage-foods').on('click', '.delete-icon', function(event){
      var foodId = event.target.classList[1].split('-').pop();
      this.deleteFood(foodId);
      $(event.target.parentElement.parentElement).remove()
    }.bind(this))
  }

  listenForEditFoodName(){
    $('.manage-foods').on('focusout', '.food-name', function(event){
      var newFoodName = event.target.innerText
      var id = event.target.id.split('-').pop();
      this.editFood(newFoodName, id)
    }.bind(this))
  }

  editFood(newFoodName, id){
    $.ajax({
      type: "PUT",
      url: apiFoodUrl + id,
      data: {food: {name: newFoodName}}
    }).catch(function(error){
      console.log(error);
    });
  }

  deleteFood(id){
    return $.ajax({
      url: apiFoodUrl + id,
      method: 'DELETE',
    }).done(function() {
      $(`#food-name-${id}`).parent().remove();
    }.bind(this)).catch(function(error){
      console.log(error);
      })
  }
}

module.exports = FoodTable