function letterChangeNumbers(input) {
    let sequences = input.split(' ').filter(a => a.length > 0);
    let total = 0;
    for (const sequence of sequences) {
        let firstLetter = sequence.substring(0, 1);
        let lastLetter = sequence.slice(-1);
        let number = Number(sequence.substring(1, sequence.length - 1));
        let firstPosition = firstLetter.toLowerCase().charCodeAt() - 96;
        let lastPosition = lastLetter.toLowerCase().charCodeAt() - 96;

        if (firstLetter.charCodeAt() < 97) {
            number /= firstPosition;
        } else {
            number *= firstPosition;
        }
        if (lastLetter.charCodeAt() < 97) {
            number -= lastPosition;
        } else {
            number += lastPosition;
        }
        total += number;
    }
    console.log(total.toFixed(2));
}
letterChangeNumbers('A12b s17G');
letterChangeNumbers('P34562Z q2576f   H456z');
letterChangeNumbers('a1A');