$ = require('jquery');
const TotalsTable = require('./totalsTable');


$(document).ready(function(){
  let totalsTable = new TotalsTable()
  totalsTable.renderTotals()
});