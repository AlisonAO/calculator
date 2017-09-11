var calculator = prompt("Welcome to Alert Calculator. Please select which operator you wish to use", "(a)ddition, (s)ubtraction, (d)ivision, (m)ultiplication, (sq)uare root, (p)ower");

if (calculator === "a") {
	var num1 = prompt("Please enter your first number.");
	var num2 = prompt("Please enter your second number.");
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	alert(num1 + num2);

}

else if (calculator === "s") {
	var num1 = prompt("Please enter your first number.");
	var num2 = prompt("Please enter your second number.");
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	alert(num1 - num2);
}

else if (calculator === "d") {
	var num1 = prompt("Please enter your first number.");
	var num2 = prompt("Please enter your second number.");
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	alert(num1 / num2);
}

else if (calculator === "m") {
	var num1 = prompt("Please enter your first number.");
	var num2 = prompt("Please enter your second number.");
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	alert(num1 * num2);
}

else if (calculator === "p") {
	var num1 = prompt("Please enter your first number.");
	var num2 = prompt("Please enter your second number.");
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	alert(Math.pow(num1, num2)); 
}

else if (calculator === "sq") {
	var num1 = prompt("Please enter your number.");
	alert(Math.sqrt(num1));
}

else {
	alert("Sorry, you can't be helped.")
}


