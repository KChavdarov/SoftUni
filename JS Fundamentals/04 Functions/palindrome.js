function palindrome(array) {
    for (const integer of array) {
        console.log(palindromeTest(numberToArray(integer)));
    }

    function numberToArray(number) {
        let numberAsString = number.toString();
        let numberAsArray = numberAsString.split('');
        return numberAsArray;
    }

    function palindromeTest(numberAsArray) {
        let maxIndex = numberAsArray.length - 1;
        let isPalindrome = true;
        for (let index = 0; index < numberAsArray.length / 2; index++) {
            if (numberAsArray[maxIndex - index] != numberAsArray[index]) {
                isPalindrome = false;
                break;
            }
        }
        return isPalindrome;
    }
}

palindrome([32, 2, 232, 1010]);