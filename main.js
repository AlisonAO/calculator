var calculator = prompt("Welcome to console calculator. Please select which operator you wish to use", "(a)ddition, (s)ubtraction, (d)ivision, (m)ultiplication, (sq)uare, (p)ower");

if (calculator === "a") {
	var num1 = prompt("Please enter your first number.");
	var num2 = prompt("Please enter your second number.");
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	console.log(num1 + num2);

}

else if (calculator === "s") {
	var num1 = prompt("Please enter your first number.");
	var num2 = prompt("Please enter your second number.");
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	console.log(num1 - num2);
}

else if (calculator === "d") {
	var num1 = prompt("Please enter your first number.");
	var num2 = prompt("Please enter your second number.");
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	console.log(num1 / num2);
}

else if (calculator === "m") {
	var num1 = prompt("Please enter your first number.");
	var num2 = prompt("Please enter your second number.");
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	console.log(num1 * num2);
}

