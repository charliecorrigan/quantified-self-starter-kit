const html = require('./html')

class TotalsTable{

  constructor(){
    this.goalCalories = 2000
  }

  renderTotals(){
    $('.daily-total').append(html.totalsTable())
    // $('.diary').on('change', 'tr.total > td.cals', function(){
    // })
  }
  
  static updateTotals(){
    $('#goal-calories').text("Nice!")
    var content = $('.totals .total .cals')
    var sum = 0
    $.each(content, function(i, data){
      sum += parseInt(data.innerText);
    });
    // debugger;
    

  }
}

module.exports = TotalsTable