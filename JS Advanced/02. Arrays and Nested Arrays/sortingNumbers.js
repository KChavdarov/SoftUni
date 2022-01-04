function sortingNumbers(arr) {
    let result = [];
    let count = 0;
    while (arr.length > 0) {
        if (count % 2 == 0) {
            arr.sort((a, b) => a - b);
        } else {
            arr.sort((a, b) => b - a);
        }
        count++;
        result.push(arr.shift());
    }
    return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));