function sumFirstLast(arr) {
    arr = arr.map(Number);
    let result = arr[0] + arr[arr.length - 1];
    return result;
}