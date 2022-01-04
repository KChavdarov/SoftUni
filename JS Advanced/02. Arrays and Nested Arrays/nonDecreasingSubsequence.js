function increasingSubsequence(arr) {
    /*
    *** Solution using simple for loop***

    let num = Number.MIN_SAFE_INTEGER;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element>= num){
            num = element;
            result.push(element);
        }
    }
    return result;
    */
    let result = arr.reduce(reduceArray, []);

    function reduceArray(acc, c) {
        if (c >= acc[acc.length - 1] || acc.length === 0) {
            acc.push(c);
        }
        return acc;
    }
    return result;
}
console.log(increasingSubsequence([1, 1, 1]));