function sorting(arr) {
    let result = [];
    while (arr.length > 0) {
        if (result.length % 2 == 1) {
            arr.sort((a, b) => a - b);
            let element = arr.shift();
            result.push(element);
        } else {
            arr.sort((a, b) => b - a);
            let element = arr.shift();
            result.push(element);
        }
    }
    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);