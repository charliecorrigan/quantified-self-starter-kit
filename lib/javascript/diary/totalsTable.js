const html = require('./html')

class TotalsTable{

  constructor(){
    this.goalCalories = 2000
  }

  renderTotals(){
    $('.daily-total').append(html.totalsTable(this.goalCalories))
    // $('.diary').on('change', 'tr.total > td.cals', function(){
    // })
  }
  
  static updateTotals(){
    var content = $('.totals .total .cals')
    var sum = 0
    $.each(content, function(i, data){
      sum += parseInt(data.innerText);
    });
    $('#calories-consumed').text(sum)
    var goal = $('#goal-calories').text()
    var remaining = goal - sum;
    $('#remaining-calories').text(remaining)
    if (remaining <= 0) {
      $('#remaining-calories').css('color', 'red');
    } else {
      $('#remaining-calories').css('color', 'green');
    }

  }
}

module.exports = TotalsTable