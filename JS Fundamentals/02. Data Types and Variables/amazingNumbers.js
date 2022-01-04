function amazingNumbers(n) {
    let nAsString = n.toString();
    let sum = 0;
    for (i = 0; i < nAsString.length; i++) {
        sum += Number(nAsString[i]);
    }
    let sumAsString = sum.toString();
    let amazing = sumAsString.includes('9');
    console.log(`${n} Amazing? ${amazing}`);
}

amazingNumbers(1233);