function numbers(input) {
    let sequence = input.split(' ');
    sequence = sequence.map(Number);
    let sum = sequence.reduce((acc, e) => acc + e);
    let average = sum / sequence.length;
    sequence = sequence.filter(a => a > average);
    sequence = sequence.sort((a, b) => b - a);
    let result = [];
    if (sequence.length == 0) {
        console.log('No');
    } else {
        result = sequence.slice(0, 5);
    }
    console.log(result.join(' '));
}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');