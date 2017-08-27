const html = require('./html');

class TotalsTable{

  constructor(){
    this.goalCalories = 2000;
  }

  renderTotals(){
    $('.daily-total').append(html.totalsTable(this.goalCalories));
  }

  static updateTotals(){
    let sum = this.calculateCaloriesConsumed();
    this.displayCaloriesConsumed(sum);
    let remaining = this.calculateCaloriesRemaining();
    this.displayCaloriesRemaining(remaining);
  }

  static calculateCaloriesConsumed(){
    let content = $('.totals .total .cals');
    let sum = 0;
    $.each(content, function(i, data){
      sum += parseInt(data.innerText);
    });
    return sum;
  }

  static displayCaloriesConsumed(sum){
    $('#calories-consumed').text(sum);
  }

  static calculateCaloriesRemaining(){
    let goal = $('#goal-calories').text();
    let sum = $('#calories-consumed').text();
    let remaining = goal - sum;
    return remaining;
  }

  static displayCaloriesRemaining(remaining){
    $('#remaining-calories').text(remaining);
    if (remaining <= 0) {
      $('#remaining-calories').css('color', 'red');
    } else {
      $('#remaining-calories').css('color', 'green');
    }
  }
}

module.exports = TotalsTable