const palindromes = function (string) {
    let newString = string.toLowerCase().replace(/[^a-z0-9]/g, "");

    for(let i=0; i<(Math.floor(newString.length/2)); i++) {
        if (newString[i] !== newString[newString.length-1-i]) return false;
    }
    return true;
};

console.log(palindromes("Animal loots foliated detail of stool lamina"));

// Do not edit below this line
module.exports = palindromes;
