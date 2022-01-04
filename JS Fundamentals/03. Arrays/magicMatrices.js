function magicMatrices(matrix) {
    // magic = matrix.length * (Math.pow(matrix.length, 2) + 1) / 2;
    let isMagic = true;
    let magic = matrix[0].reduce((a, b) => a + b);
    for (let i = 0; i < matrix.length; i++) {
        if (isMagic) {
            let row = matrix[i].reduce((a, b) => a + b);
            for (let j = 0; j < matrix[i].length; j++) {
                let column = 0;
                for (let l = 0; l < matrix.length; l++) {
                    column += matrix[l][j];
                }
                if (column !== magic) {
                    isMagic = false;
                    break;
                }
            }
            if (row !== magic) {
                isMagic = false;
                break;
            }
        } else {
            break;
        }
    }
    console.log(isMagic);
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);