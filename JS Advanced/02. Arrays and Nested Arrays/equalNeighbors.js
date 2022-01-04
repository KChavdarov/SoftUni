function equalNeighbors(matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let l = 0; l < matrix[i].length; l++) {
            const element = matrix[i][l];
            const neighborA = matrix[i][l + 1];
            if (element === neighborA) {
                count++;
            }
            if (i < matrix.length - 1) {
                const neighborB = matrix[i + 1][l];
                if (element === neighborB) {
                    count++;
                }
            }
        }
    }
    return count;
}
console.log(equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));
console.log(equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));
console.log(equalNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]));