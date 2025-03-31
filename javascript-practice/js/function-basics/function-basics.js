function add7(num1) {
    return num1 + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(string1) {
    return string1.toLocaleUpperCase();
}

function lastLetter(string1) {
    return string1.slice(-1);
}

// FizzBuzz Problem

/* 

Write a program that takes a user’s input 
prints the numbers from one to the number the user entered.

However, 
For multiples of three print Fizz instead of the number 
For the multiples of five print Buzz
For numbers which are multiples of both three and five print FizzBuzz.

*/

// program that takes a user’s input 
function FizzBuzz(num1) {

    // prints the numbers from one to the number the user entered
    for(let i=0; i<=num1; i++) {
        // However
        // For numbers which are multiples of both three and five print FizzBuzz.
        if (Number.isInteger(i/3) && Number.isInteger(i/5)) {
            console.log("FizzBuzz");
        } 
        // For multiples of three print Fizz instead of the number 
        else if (Number.isInteger(i/3)) {
            console.log("Fizz");
        }
        // For the multiples of five print Buzz
        else if (Number.isInteger(i/5)) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

// take a user's input
console.log('FizzBuzz Program'); 
let input = parseInt(prompt("Input a number"));
FizzBuzz(input);