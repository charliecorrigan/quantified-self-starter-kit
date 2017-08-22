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
    this.listenForEditFoodCalories()
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
      this.editFood("name", newFoodName, id)
    }.bind(this))
  }

  listenForEditFoodCalories(){
    $('.manage-foods').on('focusout', '.food-calories', function(event){
      var newFoodCalories = event.target.innerText
      var id = event.target.id.split('-').pop();
      this.editFood("calories", newFoodCalories, id)
    }.bind(this))
  }

  editFood(field, newFoodValue, id){
    if (field === "name") {
      var params = {name: newFoodValue}
    } else {
      var params = {calories: newFoodValue}
    }
    $.ajax({
      type: "PUT",
      url: apiFoodUrl + id,
      data: {food: params}
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