// Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

const sumAll = function(num1, num2) {
    if ( (num1 >= 0 && num2 >=0) ) {
        if ( (Math.floor(num1) === num1) && (Math.floor(num2) === num2) ) {
            
            let sum = 0;
            
            if (num1>num2) {
                for (let i=num2;i<=(num1);i++) {
                    sum += i;
                }
            }   else {
                for (let i=num1;i<=(num2);i++) {
                    sum += i;
                }
            }

            return sum;
            
        }
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
