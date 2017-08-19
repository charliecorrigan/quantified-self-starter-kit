function diaryFrame() {
  return `<section class='diary-frame'>
          </section>`
};

function mealCard(meal) {
  return `<div class='meal-card' id='meal-card${meal.id}'>
            <header class='meal-header'>${meal.name}</header>
            <table class='meal-table'>
              <tr class='header'>
                <th>Name</th>
                <th>Calories</th>
              </tr>
              <tr class='total'>
                <td>Total</td>
                <td>${meal.total()}</td>
              </tr>
              <tr class='remaining'>
                <td>Remaining</td>
                <td>${meal.remaining()}</td>
              </tr>
            </table>
          </div>`
};

function foodRow(food) {
  return `<tr class='row' id='foodrow${food.id}'>
            <td>${food.name}</td>
            <td>${food.calories}</td>
          </tr>`
};

module.exports = { mealCard,
                   foodRow };