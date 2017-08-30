const html = require('./html')
const apiFoodUrl = 'https://quantify-this-api-express.herokuapp.com/api/v1/foods/'
// const apiFoodUrl = 'http://localhost:3000/api/v1/foods/'

class FoodTable{

  constructor(){}

  renderFoodTable(){
    $('.new-food-table-container').after(html.foodTable())
    this.getAllFoods()
    .then(this.sortFoods)
    .then(this.renderRows)
  }

  getAllFoods(){
    return $.getJSON(apiFoodUrl)
  };

  sortFoods(result){
    return result.sort(function(a,b){
      return b.id-a.id
    });
  }

  renderRows(result){
    $.each(result, function(i, food){
      $('.manage-foods').append(html.foodRow(food));
    });
  }

  // getAllFoods(){
  //   $.getJSON(apiFoodUrl, function(result) {
  //     let sortedResult = result.sort(function(a,b){
  //       return b.id-a.id
  //     });
  //     $.each(sortedResult, function(i, food){
  //       $('.manage-foods').append(html.foodRow(food));
  //     });
  //   });
  // };

  listen(){
    this.listenForDelete()
    this.listenForEditFoodName()
    this.listenForEditFoodCalories()
  }

  listenForDelete(){
    $('.manage-foods').on('click', '.delete-icon', function(event){
      let foodId = event.target.classList[1].split('-').pop();
      this.deleteFood(foodId);
      $(event.target.parentElement.parentElement).remove()
    }.bind(this))
  }

  listenForEditFoodName(){
    $('.manage-foods').on('focusout', '.food-name', function(event){
      let newFoodName = event.target.innerText
      let id = event.target.id.split('-').pop();
      this.editFood("name", newFoodName, id)
    }.bind(this))
  }

  listenForEditFoodCalories(){
    $('.manage-foods').on('focusout', '.food-calories', function(event){
      let newFoodCalories = event.target.innerText
      let id = event.target.id.split('-').pop();
      this.editFood("calories", newFoodCalories, id)
    }.bind(this))
  }

  editFood(field, newFoodValue, id){
    let params = this.assignParams(field, newFoodValue)
    debugger
    $.ajax({
      type: "PUT",
      url: apiFoodUrl + id,
      data: {food: params}
    }).catch(function(error){
      console.log(error);
    });
  }

  assignParams(field, newFoodValue) {
    if (field === "name") {
      return {name: newFoodValue}
    } else {
      return {calories: newFoodValue}
    }
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