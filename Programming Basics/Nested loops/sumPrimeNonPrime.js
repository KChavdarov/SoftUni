function sumPrimeNonPrime(input) {
    let index = 0;
    let number = input[index];
    index++;
    let sumPrimeNumbers = 0;
    let sumNonPrimeNumbers = 0;

    while (number != "stop") {
        number = Number(number);
        let isPrime = true;
        if (number < 0) {
            console.log("Number is negative.");
            number = input[index];
            index++;
            continue;
        } else if (number == 1) {
            isPrime = true;
        } else {
            let maxDivider = Math.sqrt(number);
            for (let i = 2; i <= maxDivider; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime){
            sumPrimeNumbers += Number(number);
        } else {
            sumNonPrimeNumbers += Number(number);
        }
        number = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumbers}`);
}
sumPrimeNonPrime([
    '3',    '9',
    '0',    '7',
    '19',   '4',
    'stop'
  ]);