$ = require('jquery');

const Diary = require('./diary')
const MealCard = require('./mealCard')
const Meal = require('../meal')
const Food = require('../food')

$(document).ready(function(){
  let foods = [ new Food({name: 'Spam', calories: 1200, id: 1}),
                new Food({name: 'Yogurt', calories: 400, id: 2}),
                new Food({name: 'Crackers', calories: 100, id: 3}),
                new Food({name: 'Grilled Cheese', calories: 1000, id: 4}) ];

  let meals = [ new Meal({name: 'Breakfast', id: 1}),
                new Meal({name: 'Lunch', id: 2}),
                new Meal({name: 'Dinner', id: 3}),
                new Meal({name: 'Snacks', id: 4})]

  meals[0].addFood(foods[0]);
  meals[1].addFood(foods[1]);
  meals[2].addFood(foods[2]);
  meals[3].addFood(foods[3]);

  let diary = new Diary(meals);

  diary.buildMealCards();
  diary.update();
  diary.render('.diary');
});