const removeFromArray = function(array, ...arguments) {
    let newArray = [];
    for (let i=(array.length-1); i<=0; i--) {
        if (!i===arguments) {
            newArray.push(array.pop);
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
