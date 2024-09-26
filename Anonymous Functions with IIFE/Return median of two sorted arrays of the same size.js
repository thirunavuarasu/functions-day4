(function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = merged.length / 2;
    const median = (merged[mid - 1] + merged[mid]) / 2;
    console.log(median);
})([1, 3], [2, 4]);
