$ = require('jquery');
const FoodTable = require('./food/foodTable');
const FoodForm = require('./food/foodForm');

$(document).ready(function(){
  let foodTable = new FoodTable()
  let foodForm = new FoodForm()
  foodForm.renderFoodForm();
  foodForm.listen();
  foodTable.renderFoodTable();
  foodTable.listen();

  // $('.manage-foods').on('focusout', '.food-name', function(event){
  //   console.log(event.target.innerText)
  // })
//   $('.manage-foods').on('click', '.food-name', function(event){
//     event.preventDefault();
//     var originalText = "" + this.textContent + "";
//     var newContent;
//     var id = this.id.split('-').pop();
//     this.innerHTML = `<form class="edit-food"><input type="text" id="food-name-field-${id}" name="update-food-name" value='${originalText}'></form>`

//     $('.manage-foods').on('input', 'form', function(e){
//       newContent = event.target.lastChild.lastChild.value;
//     });
//         $(document).on('click', 'html', {text: originalText, lastId: id}, function(event) {
//           event.preventDefault();
//           if(!$(event.target).closest(`#food-name-${id}`).length) {
//             $(`#food-name-field-${event.data.lastId}`).parent().parent().parent().find(`#food-name-${event.data.lastId}`).text(event.data.text);
//           };
//         });

//   });

});
