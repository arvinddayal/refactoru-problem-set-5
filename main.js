var alphabetSoup = function(str) {
	var x = [];
	x.push(str.split("").sort());
	console.log(x);
};


var vowelCount = function(str) {
	var x = str.toLowerCase().split("");
	var y = [];
	var vowels = ["a", "e", "i", "o", "u"];
	for (var i = 0; i < x.length; i++) {
		for (var j = 0; j < vowels.length; j++) {
			if (x[i] == vowels[j]) {
				y.push(x[i]);
			}
		}
	}
	console.log(y.length);
};