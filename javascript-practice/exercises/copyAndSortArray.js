function copySorted(arr) {
    let sorted = [arr[0]];
    for (let i=1; i<arr.length; i++) {
        for (let j=0; j<sorted.length; j++) {
            if (arr[i].charCodeAt(0) < sorted[j].charCodeAt(0)) {
                sorted.splice(j, 0, arr[i]);
                break;
            }
        }
        if (sorted.length-1 < i) {sorted.push(arr[i]);}
    }
    return sorted;
}

// alternative

function copyAndSortArray(arr) {
    return [...arr].sort(); // ... spread operator, returns a shallow copy of an array
}