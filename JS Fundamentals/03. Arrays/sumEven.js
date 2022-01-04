function sumEven(arr) {
    let result = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (Number(arr[i]) % 2 == 0){
    //         result += Number(arr[i]);
    //     }
    // }

    for (let number of arr) {
        if (number % 2 == 0) {
            result += Number(number);
        }
    }

    console.log(result);
}

sumEven(['1', '2', '3', '4', '5', '6']);