function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let iToString = i.toString();
        for (let j = 0; j < iToString.length; j++){
            sum += Number(iToString[j]);
        }
        if (sum == 5 || sum == 7 || sum == 11){
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNumbers (15);
