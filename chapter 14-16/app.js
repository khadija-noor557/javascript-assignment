// QUESTION 1

let studentNamesLiteral = [];

// QUESTION 2

let studentNamesObject = new Array();

// QUESTION 3

let stringArray = ["Apple", "Mango", "Banana"];

// QUESTION 4

let numberArray = [1, 2, 3, 4, 5];

// QUESTION 5

let booleanArray = [true, false, true];

// QUESTION 6

let mixedArray = ["Hello", 42, true, "World", 3.14];

// QUESTION 7

let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Qualifications:</h1>");
document.write("<ol>");
for (let i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ol>");

// QUESTION 8
let studentNames = ["Michael", "John", "Tony"];
let studentScores = [320, 230, 480];
let totalMarks = 500;
for (let i = 0; i < studentNames.length; i++) {
    let percentage = (studentScores[i] / totalMarks) * 100;
    document.write("<p>" + studentNames[i] + " scored " + studentScores[i] + " marks. Percentage: " + percentage.toFixed(2) + "%</p>");
}

// QUESTION 9

let colorNames = ["Red", "Green", "Blue"];
document.write("<h1>Colors:</h1>");
document.write("<ul>");
for (let i = 0; i < colorNames.length; i++) {
    document.write("<li>" + colorNames[i] + "</li>");
}
document.write("</ul>");

// QUESTION 10
let userColor = prompt("Enter a color to add to the beginning of the array:");
colorNames.unshift(userColor);
document.write("<h1>Colors after adding to the beginning:</h1>");
document.write("<ul>");
for (let i = 0; i < colorNames.length; i++) {
    document.write("<li>" + colorNames[i] + "</li>");
}
document.write("</ul>");

userColor = prompt("Enter a color to add to the end of the array:");
colorNames.push(userColor);
document.write("<h1>Colors after adding to the end:</h1>");
document.write("<ul>");
for (let i = 0; i < colorNames.length; i++) {
    document.write("<li>" + colorNames[i] + "</li>");
}
document.write("</ul>");

userColor = prompt("Enter a color to add to the beginning of the array:");
colorNames.unshift(userColor);
colorNames.unshift("Yellow");
document.write("<h1>Colors after adding two colors to the beginning:</h1>");
document.write("<ul>");
for (let i = 0; i < colorNames.length; i++) {
    document.write("<li>" + colorNames[i] + "</li>");
}
document.write("</ul>");

colorNames.shift();
document.write("<h1>Colors after removing the first color:</h1>");
document.write("<ul>");
for (let i = 0; i < colorNames.length; i++) {
    document.write("<li>" + colorNames[i] + "</li>");
}
document.write("</ul>");

colorNames.pop();
document.write("<h1>Colors after removing the last color:</h1>");
document.write("<ul>");
for (let i = 0; i < colorNames.length; i++) {
    document.write("<li>" + colorNames[i] + "</li>");
}
document.write("</ul>");

let indexToAdd = parseInt(prompt("Enter the index to add a color:"));
let colorToAdd = prompt("Enter the color to add:");
colorNames.splice(indexToAdd, 0, colorToAdd);
document.write("<h1>Colors after adding a color at index " + indexToAdd + ":</h1>");
document.write("<ul>");
for (let i = 0; i < colorNames.length; i++) {
    document.write("<li>" + colorNames[i] + "</li>");
}
document.write("</ul>");

let indexToRemove = parseInt(prompt("Enter the index to remove colors:"));
colorNames.splice(indexToRemove, 1);
document.write("<h1>Colors after removing color at index " + indexToRemove + ":</h1>");
document.write("<ul>");
for (let i = 0; i < colorNames.length; i++) {
    document.write("<li>" + colorNames[i] + "</li>");
}
document.write("</ul>");

// QUESTION 11

let studentScores2 = [320, 230, 480, 120];
document.write("<h1>Student Scores:</h1>");
document.write("<ul>");
for (let i = 0; i < studentScores2.length; i++) {
    document.write("<li>" + studentScores2[i] + "</li>");
}
document.write("</ul>");
studentScores2.sort(function(a, b) { return a - b; });

document.write("<h1>Student Scores in Ascending Order:</h1>");
document.write("<ul>");

for (let i = 0; i < studentScores2.length; i++) {
    document.write("<li>" + studentScores2[i] + "</li>");
}

document.write("</ul>");

// QUESTION 12

let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(2, 4);
document.write("<h1>Cities List:</h1>");
document.write("<ul>");
for (let i = 0; i < cities.length; i++) {
    document.write("<li>" + cities[i] + "</li>");
}
document.write("</ul>");

document.write("<h1>Selected Cities List:</h1>");
document.write("<ul>");
for (let i = 0; i < selectedCities.length; i++) {
    document.write("<li>" + selectedCities[i] + "</li>");
}
document.write("</ul>");

// QUESTION 13

let arr = ["This", "is", "my", "cat"];
let sentence = arr.join(" ");
document.write("<h1>Array:</h1>");
document.write("<ul>");
for (let i = 0; i < arr.length; i++) {
    document.write("<li>" + arr[i] + "</li>");
}
document.write("</ul>");

document.write("<h1>String:</h1>");
document.write("<p>" + sentence + "</p>");

// QUESTION 14

let devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("<h1>Devices:</h1>");
document.write("<ul>");
for (let i = 0; i < devices.length; i++) {
    document.write("<li>" + devices[i] + "</li>");
}
document.write("</ul>");

document.write("<h1>Out:</h1>");
for (let i = 0; i < devices.length; i++) {
    document.write("<p>" + devices[i] + "</p>");
}


