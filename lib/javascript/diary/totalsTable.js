const html = require('./html')

class TotalsTable{

  constructor(){}

  renderTotals(){
    return $('.daily-total').append(html.totalsTable())
  }
}

module.exports = TotalsTable