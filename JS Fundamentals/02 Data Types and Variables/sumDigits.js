function sumDigits(n){
    let nAsString = n.toString();
    let sum = 0;
    for (let i = 0; i < nAsString.length; i++){
        sum += Number(nAsString[i]);
    }
    console.log(sum);
}