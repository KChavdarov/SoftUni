function diagonalAttack(arr) {
    let matrix = arr.map(e => e.split(" "));
    matrix = matrix.map(r => r.map(Number));
    let mainDiagonal = [];
    let secondaryDiagonal = [];
    for (let i = 0; i < matrix.length; i++) {
        mainDiagonal.push(matrix[i][i]);
        secondaryDiagonal.push(matrix[i][matrix.length - i - 1]);
    }
    let sumMain = mainDiagonal.reduce((a, b) => a + b);
    let sumSecondary = secondaryDiagonal.reduce((a, b) => a + b);
    if (sumMain == sumSecondary) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i].fill(sumMain);
            matrix[i][i] = mainDiagonal.shift();
            matrix[i][matrix.length - i - 1] = secondaryDiagonal.shift();
        }
    }
    let output = [];
    for (const row of matrix) {
        output.push(row.join(" "));
    }
    return output.join("\n");
}

console.log(diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]));