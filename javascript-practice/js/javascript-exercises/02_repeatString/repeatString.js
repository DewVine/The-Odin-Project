const repeatString = function(string, num) {
    let output = "";
    for(let i=0;i<num;i++) {
        output += string;
    }
    if(num < 0) {
        return 'ERROR';
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
