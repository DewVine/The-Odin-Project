function removeFromArray(array, ...args) {
    for (const argument in args) {
        while (array.includes(args[argument])) {
            let index = array.indexOf(args[argument]);
            array.splice(index, 1);
        }
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
