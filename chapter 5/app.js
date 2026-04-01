// QUESTION 1

// let num1 = 3;
// let num2 = 5;

// // addition
// let sum = num1 + num2;

// document.write ("Sum of " + num1 + " and " + num2 + " is " + sum);

// QUESTION 2

// let num1 = 3;
// let num2 = 5;

// // Subscription 
// let difference = num1 - num2;

// document.write ("Subscription of " + num1 + " and " + num2 + " is " + difference + "<br>");

// // Multiplication

// let multiplication = num1 * num2;

// document.write ("multiplication of " + num1 + " and " + num2 + " is " + multiplication + "<br>");

// // Division

// let division = num1 / num2;

// document.write ("division of " + num1 + " and " + num2 + " is " + division + "<br>");

// // modulus

// let modulus = num1 % num2;

// document.write ("modulus of " + num1 + " and " + num2 + " is " + modulus  + "<br>");

// QUESTION 3

// a. Declare a variable
// let myNum;

// // b. Show the value after declaration
// document.write("Value after variable declaration is: " + myNum + "<br>");

// // c. Initialize the variable with some number
// myNum = 5;

// // d. Show the initial value
// document.write("Initial value: " + myNum + "<br>");

// // e. Increment the variable
// myNum++;

// // f. Show the value after increment
// document.write("Value after increment is: " + myNum + "<br>");

// // g. Add 7 to the variable
// myNum = myNum + 7;

// // h. Show the value after addition
// document.write("Value after addition is: " + myNum + "<br>");

// // i. Decrement the variable
// myNum--;

// // j. Show the value after decrement
// document.write("Value after decrement is: " + myNum + "<br>");

// // k. Show the remainder after dividing by 3
// let remainder = myNum % 3;

// // l. Output the remainder
// document.write("The remainder is: " + remainder);

// QUESTION 4

// let num1 = 600;
// let num2 = 5;

// let multiplication = num1 * num2;

// document.write ("Total cost to buy " + num2 + " tickets to a movie is " + multiplication + "PKR");

// QUESTION 5

// let num = 4;

// document.write("<h1>Table of " + num + "</h1>");

// document.write(num + "x1=" + (num * 1) + "<br>");
// document.write(num + "x2=" + (num * 2) + "<br>");
// document.write(num + "x3=" + (num * 3) + "<br>");
// document.write(num + "x4=" + (num * 4) + "<br>");
// document.write(num + "x5=" + (num * 5) + "<br>");
// document.write(num + "x6=" + (num * 6) + "<br>");
// document.write(num + "x7=" + (num * 7) + "<br>");
// document.write(num + "x8=" + (num * 8) + "<br>");
// document.write(num + "x9=" + (num * 9) + "<br>");
// document.write(num + "x10=" + (num * 10) + "<br>");

// QUESTION 6

// Temperature Converter (Celsius to Fahrenheit)

// let cTemp = 25;
// let fConverted = (cTemp  * 9 / 5) + 32;
// document.write(cTemp + "°C is " + fConverted + "°F" + "<br>");

// // Temperature Converter (Fahrenheit to Celsius)

// let fTemp = 70;
// let cConverted = (fTemp - 32) * 5 / 9;
// document.write(fTemp + "°F is " + cConverted + "°C");

// QUESTION 7 

let priceItem1 = 650;
let qtyItem1 = 3;
let priceItem2 = 100;
let qtyItem2 = 7;
let shippingCharges = 100;
let totalCost = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2) + shippingCharges;

document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + qtyItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + qtyItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost);