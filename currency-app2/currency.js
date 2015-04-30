var Currency = function(canadianDollar) {
	this.canadianDollar = canadianDollar;
}

Currency.prototype.roundTwoDecimals(amount) {
	return Math.round(amount * 100) / 100;
}

Currency.prototype.canadianToUS = function(canadian) {
	return roundTwoDecimals(canadian * this.canadianDollar);
}

Currency.prototype.USToCanadian = function(us) {
	return roundTwoDecimals(us / this.canadianDollar);
}

/*
exports = Currency; //WRONG!! :
require() actually returns an object called module.exports.
The exports object is a global reference to module.exports which allows us to use convenient shorthand.
When you assign any object to exports, the reference to module.exports is broken!
Therefore, whenever returing a single *variable, function, or object* to your application, use 
	module.exports = [obj, func, val, var];
otherwise,
	module.exports.foo = bar();
or the equivalent
	exports.foo = bar();

Another alternative is to manually re-establish the relationship between exports and module.exports:
	module.exports = exports = MyObj();
*/
module.exports = Currency;