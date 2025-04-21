function filterRange (arr, a, b) {
    const filtered = []
    for (let j=0; j<arr.length; j++)
        for (let i=a; i<=b; i++) {
            if (arr[j]===i) filtered.push(i);
        }
    return filtered;
}