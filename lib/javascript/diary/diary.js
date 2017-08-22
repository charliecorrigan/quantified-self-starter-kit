const html = require('./html');
const MealCard = require('./mealCard');
const Food = require('../food');
const Meal = require('../meal');
const Service = require('../service');

const mealUrl = 'https://quantify-this-api.herokuapp.com/api/v1/meals'

class Diary {

  constructor(meals = []) {
    this.meals = meals;
    this.mealCards = [];
  };

  initialize() {
    let service = new Service(mealUrl);
    service.get(this.build.bind(this));
  };

  build(result) {
    this.buildMeals(result);
    this.buildMealCards();
    this.updateMealCards();
    this.render('.diary');
  };

  buildMeals(result) {
    this.meals = result.map(function(meal){
      this.buildFoods(meal)

      return new Meal(meal)
    }.bind(this));
  }

  buildFoods(meal) {
    meal.foods = meal.foods.map(function(food){
      return new Food(food);
    })
  }

  buildMealCards() {
    this.mealCards = this.meals.map(function(meal){
      return new MealCard(meal);
    });
  };

  updateMealCards() {
    this.mealCards.forEach(function(mealCard){
      mealCard.build();
    });
  };

  html() {
    return html.diaryFrame();
  };

  render(element){
    $(element).append(this.html());

    this.mealCards.forEach(function(mealCard){
      mealCard.render('.diary-frame')
    });
  };
};

module.exports = Diary;