function equalSums(arr) {
    let arrSum = 0;
    let beforeSum = 0;
    let afterSum = 0;
    let isEqual = false;

    for (let item of arr) {
        arrSum += item;
    }

    if (arr.length === 1) {
        console.log(0);
        isEqual = true;
    } else {
        for (let i = 1; i < arr.length; i++) {
            beforeSum += arr[i - 1];
            afterSum = arrSum - beforeSum - arr[i];
            if (afterSum == beforeSum) {
                isEqual = true;
                console.log(i);
                break;
            }
        }
    }
    if (isEqual == false) {
        console.log('no');
    }
}

// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
equalSums([1]);