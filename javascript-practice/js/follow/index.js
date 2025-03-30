/**
  Be sure to uncomment the items under each step below the editable section. Be sure to comment out the entire last step. If your code fails to run, or you see a "ReferenceError" in the console, make sure you have completed all of the objectives 
  
  Don't forget you can put "console.log" anywhere to see what your values are at any time.

	---------------------------------------------------------------
	
	Once you have your version of the code working let's go back over it and edit it to make it easier to read.  After each step, make sure to run the code to make sure the code still works!





	Step 3:
	Add 2 more variables: "fullName" and "age"

	Edit the greeting string to use fullName and age instead of doing the calculations in the string itself. (the greeting should look something like this: "Hello, my name is " + fullName)

	Do NOT simply type the full name and age into the new variables, but set them using the calculations that were originally being done in the greeting.
	
	===== NOTE ====
	In order to make the tests pass you will need to use these exact values for the years and names.  The wording needs to be exact.  If the tests fail, check spacing and punctuation:
	
	birthYear = 1948
	thisYear = 1965
	firstName = Carlos
	lastName = Stevenson

	The greeting should say "Hello! My name is Carlos Stevenson and I am 17 years old."
*/

// Edit below this line =============

/*
let birthYear = 1948;
let thisYear = 1965;
let firstName = 'Carlos';
let lastName = 'Stevenson';

let greeting = ("Hello! My name is " + firstName + ' ' + lastName + " and I am " + (thisYear-birthYear) + " years old.");

console.log(greeting);
*/

let birthYear = 1948;
let thisYear = 1965;
let age = (thisYear - birthYear);
let firstName = 'Carlos';
let lastName = 'Stevenson';
let fullName = (firstName + ' ' + lastName);

let greeting = ("Hello! My name is " + fullName + " and I am " + age + " years old.");

console.log(greeting);

// -----------------------------------------------------------

let errored = false;

console.log("\n---------------------------------\n\n")

/*
	if(birthYear !== 1948) {
		console.error(`birthYear is incorrect, it's currently: "${values.birthYear}"`);
		errored = true;
	}
	
	if(thisYear !== 1965) {
		console.error(`thisYear is incorrect, it's currently: "${values.thisYear}"`);
		errored = true;
	}
	
	if(firstName !== "Carlos") {
		console.error(`firstName is incorrect, it's currently: "${values.firstName}"`);
		errored = true;
	}
	
	if(lastName !== "Stevenson") {
		console.error(`lastName is incorrect, it's currently: "${values.lastName}"`);
		errored = true;
	}
	
	if(greeting !== "Hello! My name is Carlos Stevenson and I am 17 years old.") {
		console.error(`greeting is incorrect, it's currently: "${values.greeting}"`);
		errored = true;
	}
    */


	if(birthYear !== 1948) {
		console.error(`birthYear is incorrect, it's currently: "${values.birthYear}"`);
		errored = true;
	}
	
	if(thisYear !== 1965) {
		console.error(`thisYear is incorrect, it's currently: "${values.thisYear}"`);
		errored = true;
	}
	
	if(firstName !== "Carlos") {
		console.error(`firstName is incorrect, it's currently: "${values.firstName}"`);
		errored = true;
	}
	
	if(lastName !== "Stevenson") {
		console.error(`lastName is incorrect, it's currently: "${values.lastName}"`);
		errored = true;
	}

	if(age !== 17) {
		console.error(`age is incorrect, it's currently: "${values.age}"`);
		errored = true;
	}

	if(fullName !== "Carlos Stevenson") {
		console.error(`fullName is incorrect, it's currently: "${values.fullName}"`);
		errored = true;
	}
	
	if(greeting !== "Hello! My name is Carlos Stevenson and I am 17 years old.") {
		console.error(`greeting is incorrect, it's currently: "${values.greeting}"`);
		errored = true;
	}


if(!errored) {
	console.log("Congrats! Move onto the next step!");
} else if (errored) {
	console.log("Try again")
}


console.log("\n---------------------------------\n\n")