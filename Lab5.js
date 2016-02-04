var tempF = Math.floor((Math.random()*200)+1);
var tempC = (tempF-32)*9/5;
console.log("The temperature in Fahrenheit is"+ " " + tempF + "." + " " + "Therefore, the temperature in Celsius is:" + " " + tempC + ".");
console.log(" Show yor work: The conversion of Fahrenheit to Celsius is [(F-32) x 5/9]");


for (var i= 1; i <= 100; i++) {
	if ((i % 3) ===0 && (i % 5) === 0) {
		console.log("FizzBuzz");
	}
	else if ((i%3) === 0) {
		console.log("Fizz");
	}
	else if ((i%5) ===0) {
		console.log("Buzz");
	}
	else {
		console.log(i);
	}
}