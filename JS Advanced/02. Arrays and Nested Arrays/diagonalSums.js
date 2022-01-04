function diagonalSums(matrix) {
    let diagonalA = 0;
    let diagonalB = 0;

    for (let i = 0; i < matrix.length; i++) {
        diagonalA += matrix[i][i];
        diagonalB += matrix[i][matrix.length - 1 - i];
    }
    return `${diagonalA} ${diagonalB}`;
}
console.log(diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]));