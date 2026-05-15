// QUESTION 1

let character = prompt ("write any number alphabet");
let code = character.charCodeAt();

console.log (code);

// 50

if (code>=48 && code<=57){
    alert("this is a number")
} else if (code>=67 && code<=90){
    alert("this is a uppercase")
} else if (code>=97 && code<=122){
    alert("this is a lowercase")
} else {
    alert("invalid")
}

// QUESTION 2

let num1 = +prompt ("enter your number1");
let num2 = +prompt ("enter your number2");

// 1>2

console.log (num1 > num2);

if (num1 > num2) {
    alert (`${num1} is greater then ${num2}`);
} else{
    alert(`${num1} is less then ${num2}`);
}

// Question 3
let num = +prompt ("enter your  number");


console.log(num);

if(num> 0) {
    alert(`${num} this is positive`);
}
 else if(num<0){
    alert( `${num} this is negative`);
} 
else if (num<0){
    alert( `${num} this is zero`);
}

// Question 4

let vowel = prompt ("enter your alphabet");

if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u" || vowel === "A" || vowel === "E" || vowel === "I" || vowel === "O" || vowel === "U") {
    alert(`${vowel} this is a vowel`);
} else {
    alert(`${vowel} this is not a vowel`);
}

// Question 5

let password = "abc123";
let userPassword = prompt("Enter your password");

if (userPassword === password) {
    alert("Correct! You are logged in.");
} else {
    alert("Incorrect password. Please try again.");
}

// Question 6

let greeting;
let hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// Question 7

let time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM)");

if (time >= 0 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
} else {
    alert("Invalid time entered! Please enter a value between 0000 and 2359.");
}

