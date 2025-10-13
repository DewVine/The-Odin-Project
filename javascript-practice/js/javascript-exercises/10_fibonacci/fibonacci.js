const fibonacci = function(num) {
    if (num<0) return "OOPS";
    let fib = [1, 1];
    for (let i=0; i<num; i++) {if (i>1) fib[i] = fib[i-1] + fib[i-2];}
    if (num===0 || (Number(num)===0)) return 0;
    else if ((typeof fib[num-1]) === "number") return (fib[num-1]);
    return num;
};

// Do not edit below this line
module.exports = fibonacci;
