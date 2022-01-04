function pieceOfPie(arr, targetStart, targetEnd) {
    let start = arr.indexOf(targetStart);
    let end = arr.indexOf(targetEnd) + 1;
    return arr.slice(start, end);
}
console.log(pieceOfPie(
    ['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));