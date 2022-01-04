function negativePositive(arr) {
    let result = [];
    arr.forEach(element => {
        (element < 0) ? (result.unshift(element)) : (result.push(element));
    });
    return result;
}
console.log(negativePositive([7, -2, 8, 9]));