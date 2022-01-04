function biggestElement(matrix) {
    let arr = matrix.reduce(matrixToArray, []);
    return Math.max(...arr);

    function matrixToArray(a, c) {
        return a.concat(c);
    }
}
console.log(biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]));