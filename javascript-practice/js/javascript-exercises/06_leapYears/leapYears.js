const leapYears = function(year) {
    if ( Math.floor(year/4) === (year/4) ) {
        if ( (Math.floor(year/100) === (year/100)) && (Math.floor(year/400) === (year/400)) ) {
            return true;
        }
        if (!(Math.floor(year/100) === (year/100))) {
            return true;
        }
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
