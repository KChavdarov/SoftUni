function sumOfSeries(input) {
    let number = Number(input);
    let result = 0;
    for (i = 1; i <= number; i++){
        result += i * i;
    }
    console.log(result);
}