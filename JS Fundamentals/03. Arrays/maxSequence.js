function maxSequence(arr) {
    let sequence = [];
    for (let i = 0; i < arr.length; i++) {
        let currentSequence = [];
        currentSequence.push(arr[i]);
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                currentSequence.push(arr[j]);
            } else {
                break;
            }
        }
        if (sequence.length < currentSequence.length) {
            sequence = currentSequence;
        }
    }
    console.log(sequence.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequence([1, 1, 1, 2, 3, 1, 3, 3, 3]);
maxSequence([4, 4, 4, 4]);