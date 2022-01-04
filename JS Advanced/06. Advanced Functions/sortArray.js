function sortArray(arr, type) {
    let sorts = {
        asc(a, b) {
            return a - b;
        },
        desc(a, b) {
            return b - a;
        }
    };
    return arr.sort(sorts[type]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));