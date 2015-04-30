var Currency = require('./currency'); //note require is a *function call* that assignes the exports object to the currency object
var canadianDollar = 0.91;

var currency = new Currency(canadianDollar);

console.log('50 Canadian dollars equals this amount of US dollars:');
console.log(currency.canadianToUS(50));  //note canadianToUS is a function which is a property of the currency object

console.log('30 US dollars equals this amount of Canadian dollars:');
console.log(currency.USToCanadian(30));
