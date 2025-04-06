const palindromes = function (string) {
    for(let i=0; i<(Math.floor(string.length)/2); i++) {
        if (string[i] !== string[string.length-1-i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
