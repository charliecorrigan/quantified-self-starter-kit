function diaryFrame() {
  return `<section class='diary-frame'></section>`
};

function mealCard(meal) {
  return `<div class='meal-card' data-id='${meal.id}', id='meal-card${meal.id}'>
            <header class='meal-header'>${meal.name}</header>
            <table class='meal-table'>
              <thead class='header'>
                <tr>
                  <th class='name'>Name</th>
                  <th class='cals'>Calories</th>
                </tr>
              </thead>
              <tbody class='foods'>
              </tbody>
              <tfoot class='totals'>
                <tr class='total'>
                  <td class='name'>Total</td>
                  <td class='cals'></td>
                </tr>
                <tr class='remaining'>
                  <td class='name'>Remaining</td>
                  <td class='cals'></td>
                </tr>
              </tfoot>
            </table>
          </div>`
};

function foodRow(food) {
  return `<tr class='row' id='foodrow${food.id}' data-foodId='${food.id}'>
            <td class='name'>${food.name}</td>
            <td class='cals'>${food.calories}</td>
            <td class='rmv-btn'>X</td>
          </tr>`
};

function foodMenuContext() {
  return `<tbody class='food-dropdown-body'>
            <tr class='row food-menu-context'>
              <td class='food-input' colspan='3'>
                <input type='text' placeholder='Search for Food'></input>
              </td>
            </tr>
          </tbody>`
};

function foodDropDown() {
  return `<div class='food-dropdown'></div>`
}

function foodDropDownRow(food) {
  return `<div class='row' data-id=${food.id}>
            <span>${food.name}</span>
            <span>${food.calories}</span>
          </div>`
}

module.exports = { diaryFrame,
                   mealCard,
                   foodRow,
                   foodMenuContext,
                   foodDropDown,
                   foodDropDownRow}