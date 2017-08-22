function foodRow(food){
  return `<tr><td class="food-name" id="food-name-${food.id}" contenteditable="true">${food.name}</td><td>${food.calories}</td><td><div class="delete-icon delete-${food.id}"></div></td><tr>`
}

function foodForm(){
  return `<form class="new-food-form">
          Name: <input type="text" name="new-food-name" required="true" oninvalid="this.setCustomValidity('Please enter a food name')">
          Calories: <input type="text" name="new-food-calories" required="true" oninvalid="this.setCustomValidity('Please enter a calorie amount')">
          <input type="submit" name="new-food-submit" value="+" id="green" class="button green text-blanco text-shadow-negra">
          </form>`
}

function foodTable(){
  return `<table class="manage-foods">
            <tr class="header-row">
              <th><strong>Name</strong></th>
              <th><strong>Calories</strong></th>
              <th></th>
            </tr>
          </table>`
}

module.exports = {
                  foodRow,
                  foodForm,
                  foodTable
                  };