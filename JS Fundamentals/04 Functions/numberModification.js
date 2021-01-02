function numberModification(number) {
    while (digitAverage(number)<=5){
        number = appendNine(number);
    }

    return number;

    function digitAverage(number) {
        numberToString = ''+ number;
        n = numberToString.length;
        let digitSum = 0;
        for (const digit of numberToString) {
            digitSum += Number(digit);
        }
        return digitSum / n;
    }

    function appendNine(number) {
        return Number('' + number + 9);        
    }
}

console.log(numberModification(5835));