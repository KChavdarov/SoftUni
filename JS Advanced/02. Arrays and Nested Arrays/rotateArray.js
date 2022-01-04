function rotateArray(arr, n) {
    n %= arr.length;
    for (let i = 0; i < n; i++) {
        arr.unshift(arr.pop());
    }
    return arr.join(" ");
}
console.log(rotateArray(['1',
        '2',
        '3',
        '4'
    ],
    2
));