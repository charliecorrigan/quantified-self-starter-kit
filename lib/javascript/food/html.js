function foodRow(food){
  return `<tr><td class="food-name" id="food-name-${food.id}">${food.name}</td><td>${food.calories}</td><td><div class="delete-icon delete-${food.id}"></div></td><tr>`
}

module.exports = {foodRow};