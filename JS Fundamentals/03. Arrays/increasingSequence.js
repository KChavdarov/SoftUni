function increasingSequence(arr) {
    let newArr = [arr[0]];
    for (let i = 1; i<arr.length; i++){
        if (newArr[newArr.length-1] <= arr[i]){
            newArr.push(arr[i]);
        }
    }
    console.log((newArr.join(' ')));
}
increasingSequence([ 1, 3, 8, 4, 10, 12, 12, 3, 2, 24]);