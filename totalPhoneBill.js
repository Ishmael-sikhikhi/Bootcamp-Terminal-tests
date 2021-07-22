module.exports = function (callsAndSms) {
	var bill = callsAndSms.split(", ");
	var total = 0;

	//looping bill string
	for (var i = 0; i < bill.length; i++) {
		if (bill[i] === 'call') {
			total += 2.75;
		}
		if (bill[i] === 'sms') {
			total += 0.65;
		}
	}
	return 'R' + total.toFixed(2);
}