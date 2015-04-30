var canadianDollar = 0.91;

function roundTwoDecimals(amount) {
	return Math.round(amount * 100) / 100;
}

exports.canadianToUS = function(canadian) { //note: a function assigned to a property of the exports object
	return roundTwoDecimals(canadian * canadianDollar);
}

exports.USToCanadian = function(us) { //again, function is assinged to the exports object
	return roundTwoDecimals(us / canadianDollar);
}