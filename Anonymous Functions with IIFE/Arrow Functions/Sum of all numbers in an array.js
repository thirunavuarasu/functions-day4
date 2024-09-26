const sumOfNumbers = arr => {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    console.log(sum);
};
sumOfNumbers([1, 2, 3, 4, 5]);
