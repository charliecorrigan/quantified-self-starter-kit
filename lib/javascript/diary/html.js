function diaryFrame() {
  return `<section class='diary-frame'></section>`
};

function mealCard(meal) {
  return `<div class='meal-card' data-id='${meal.id}', id='meal-card${meal.id}'>
            <header class='meal-header'>${meal.name}</header>
            <table class='meal-table'>
              <thead id='header${meal.id}' class='header'>
                <tr>
                  <th class='name'>Name</th>
                  <th class='cals'>Calories</th>
                </tr>
              </thead>
              <tbody class='foods'>
              </tbody>
              <tfoot id='totals${meal.id}' class='totals'>
                <tr class='total'>
                  <td class='name'>Total</td>
                  <td class='cals'>${meal.total()}</td>
                </tr>
                <tr class='remaining'>
                  <td class='name'>Remaining</td>
                  <td class='cals'>${meal.remaining()}</td>
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

module.exports = { diaryFrame,
                   mealCard,
                   foodRow }