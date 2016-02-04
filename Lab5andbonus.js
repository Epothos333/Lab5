var tempF = Math.floor((Math.random()*200)+1);
var tempC = (tempF-32)*5/9;
var tempCC = Math.floor((Math.random()*200)+1);
var tempFF = (TempCC*9/5+32);
console.log("The temperature in Fahrenheit is"+ " " + tempF + "." + " " + "Therefore, the temperature in Celsius is:" + " " + tempC + ".");
console.log(" Show yor work: The conversion of Fahrenheit to Celsius is [(F-32) x 5/9]");
console.log("If the temperature in Celsius is"+ " " + tempCC + "," + " " + "Then the temperature in Fahrenheit is:" + " " + tempFF + ".");
console.log(" Show yor work: The conversion of Celsius to Fahrenheit is [(C*9/5 +32]");


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