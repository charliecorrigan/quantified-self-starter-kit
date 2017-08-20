function diaryFrame() {
  return `<section class='diary-frame'></section>`
};

function mealCard(meal) {
  return `<div class='meal-card' id='meal-card${meal.id}'>
            <header class='meal-header'>${meal.name}</header>
            <table class='meal-table'>
              <tr class='header${meal.id}'>
                <th class='name'>Name</th>
                <th class='cals'>Calories</th>
              </tr>
              <tr class='total'>
                <td class='name'>Total</td>
                <td class='cals'>${meal.total()}</td>
              </tr>
              <tr class='remaining'>
                <td class='name'>Remaining</td>
                <td class='cals'>${meal.remaining()}</td>
              </tr>
            </table>
          </div>`
};

function foodRow(food) {
  return `<tr class='row' id='foodrow${food.id}'>
            <td class='name'>${food.name}</td>
            <td class='cals'>${food.calories}</td>
          </tr>`
};

module.exports = { diaryFrame,
                   mealCard,
                   foodRow };