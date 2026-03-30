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
