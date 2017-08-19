function mealCard() {
  return `<section class='diary-window'>
    <div class='meal-card'>
      <table class='meal-table'>
        <tr class='header'>
          <th>Name</th>
          <th>Calories</th>
        </tr>
        <tr class='total'>
          <td>Total</td>
          <td>1200</td>
        </tr>
        <tr class='remaining'>
          <td>Remaining</td>
          <td>1200</td>
        </tr>
      </table>
    </div>
  </section>`
};

function foodRow(food){
  return `<tr class='row' id='foodrow${food.id}'>
    <td>${food.name}</td>
    <td>${food.calories}</td>
  </tr>`
};

module.exports = { mealCard,
                   foodRow }