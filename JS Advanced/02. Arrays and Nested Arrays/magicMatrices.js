function magicMatrices(matrix) {
    let isMagic = true;
    let magicSum = matrix[0].reduce((a, b) => a + b);

    for (let i = 1; i < matrix.length; i++) {
        let sum = matrix[i].reduce((a, b) => a + b);
        if (sum != magicSum) {
            return false;
        }
    }
    for (let i = 0; i < matrix[0].length; i++) {
        let sum = 0;
        for (let l = 0; l < matrix.length; l++) {
            sum += matrix[i][l];
        }
        if (sum != magicSum) {
            return false;
        }
    }
    return true;
}
console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
console.log(magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ));