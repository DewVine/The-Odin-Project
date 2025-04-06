const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  for(const num in array) {
    sum += array[num];
  }
  return sum;
};

const multiply = function(array) {
	let multiplication = 1;
  for(const num in array) {
    multiplication *= array[num];
  }
  return multiplication;
};

const power = function(num, exp) {
	return num ** exp;
};

const factorial = function(n) {
  if (n<=1) return 1;
  return n * factorial(n-1); 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
