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
