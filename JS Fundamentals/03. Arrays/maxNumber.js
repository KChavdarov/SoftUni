function maxNumber(arr) {
    let topArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isMax = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                isMax = false;
                break;
            }
        }
        if (isMax == true) {
            topArr.push(arr[i]);
        }
    }
    console.log(topArr.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([41, 41, 34, 20]);
maxNumber([14, 24, 3, 19, 15, 17]);