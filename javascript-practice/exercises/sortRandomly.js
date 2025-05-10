function shuffle(arr) {
    arr.sort( () => Math.random() - Math.random())
}

let arr = [1, 2, 3];
console.log(arr)

shuffle(arr);
console.log(arr)
// arr = [3, 2, 1]

shuffle(arr);
console.log(arr)
// arr = [2, 1, 3]

shuffle(arr);
console.log(arr)
// arr = [3, 1, 2]