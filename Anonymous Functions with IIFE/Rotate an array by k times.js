(function(arr, k) {
    k = k % arr.length;
    const rotated = arr.slice(-k).concat(arr.slice(0, -k));
    console.log(rotated);
})([1, 2, 3, 4, 5], 2);
