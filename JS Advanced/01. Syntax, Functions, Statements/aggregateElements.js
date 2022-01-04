function aggregateElements(params) {
    console.log(reduce(params, 0, (a, b) => a + b));
    console.log(reduce(params, 0, (a, b) => a + 1 / b));
    console.log(reduce(params, "", (a, b) => a + b));

    function reduce(arr, initialValue, func) {
        let current = initialValue;
        for (let i = 0; i < arr.length; i++) {
            current = func(current, arr[i]);
        }
        return current;
    }
}

aggregateElements([1, 2, 3]);