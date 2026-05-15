Question 1

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");

Question 2

let favoritePhone = prompt("Enter your favorite phone model:");
let lengthOfString = favoritePhone.length;
document.write("My favorite phone is: " + favoritePhone + "<br>");
document.write("Length of string: " + lengthOfString);

Question 3
let word = "Pakistani";
let indexOfN = word.indexOf("n");
document.write("String: " + word + "<br>");
document.write("Index of 'n': " + indexOfN);

Question 4
let word = "Hello World";
let lastIndexOfL = word.lastIndexOf("l");
document.write("String: " + word + "<br>");
document.write("Last index of 'l': " + lastIndexOfL);

Question 5
let word = "Pakistani";
let charAtIndex3 = word.charAt(3);
document.write("String: " + word + "<br>");
document.write("Character at index 3: " + charAtIndex3);

Question 6
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName + "!");

Question 7
let city = "Hyderabad";
let newCity = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity);

Question 8
let message = "Ali and Sami are best friends. They play cricket and football together.";
let newMessage = message.replace(/and/g, "&");
document.write("Message: " + message + "<br>");
document.write("After replacement: " + newMessage);

Question 9
let value = "472";
let numberValue = Number(value);

document.write("Value: " + value + "<br>");
document.write("Type: " + typeof value + "<br>");
document.write("Value after conversion: " + numberValue + "<br>");
document.write("Type after conversion: " + typeof numberValue);

Question 10
let userInput = prompt("Enter a string:");
let upperCaseInput = userInput.toUpperCase();
document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + upperCaseInput);

Question 11
let userInput = prompt("Enter a string:");
let titleCaseInput = userInput.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
document.write("User input: " + userInput + "<br>");
document.write("Title case: " + titleCaseInput);

Question 12
let num = 35.36;
let numString = num.toString().replace(".", "");
document.write("Number: " + num + "<br>");
document.write("Result: " + numString);

Question 13
let username = prompt("Enter a username:");

if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
    alert("Please enter a valid username without special characters (@, ., ,, !).");
}

Question 14
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();
if (A.includes(userInput)) {
    alert(userInput + " is available at index " + A.indexOf(userInput) + " in our bakery.");
} else {
    alert("We are sorry. " + userInput + " is not available in our bakery.");
}

Question 15
let password = prompt("Enter a password:");
let isValid = true;
if (password.length < 6) {
    isValid = false;
}
if (!/[A-Za-z]/.test(password)) {
    isValid = false;
}
if (!/[0-9]/.test(password)) {
    isValid = false;
}
if (isValid) {
    alert("Password is valid.");
} else {
    alert("Password is invalid. It must be at least 6 characters long and contain both letters and numbers.");
}

Question 16
let university = "University of Karachi";
let characters = university.split("");
document.write("University: " + university + "<br>");
document.write("Characters: " + characters.join(", "));

Question 17
let userInput = prompt("Enter a string:");
let lastCharacter = userInput.charAt(userInput.length - 1);
document.write("User input: " + userInput + "<br>");
document.write("Last character: " + lastCharacter);

Question 18
let text = "The quick brown fox jumps over the lazy dog";
let count = (text.match(/the/gi) || []).length;
document.write("Text: " + text + "<br>");
document.write("There are " + count + " occurrences of the word 'the'.");


