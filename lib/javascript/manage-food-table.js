$ = require('jquery');
const FoodTable = require('./food/foodTable');
const FoodForm = require('./food/foodForm');
const FoodFilter = require('./food/foodFilter');

$(document).ready(function(){
  let foodTable = new FoodTable()
  let foodForm = new FoodForm()
  let foodFilter = new FoodFilter()
  foodForm.renderFoodForm();
  foodForm.listen();
  foodFilter.renderFoodFilter();
  foodTable.renderFoodTable();
  foodTable.listen();
});
