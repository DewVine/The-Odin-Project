function filterRangeInPlace (arr, a, b) {
    let string = arr.join("");
    for (let i=arr.length-1; i>=0; i--) {
        if (!(arr[i] <= b && arr[i] >= a)) {
            arr.splice(i, 1);
        }
    }
}