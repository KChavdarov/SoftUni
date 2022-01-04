function wordTracker(input) {
    let words = {};
    input.shift().split(' ').forEach(word => {
        words[word] = 0;
    });
    for (const word of input) {
        if (words.hasOwnProperty(word)) {
            words[word]++;
        }
    }
    let sorted = Object.entries(words).sort(([wordA, countA], [wordB, countB]) => countB - countA);
    for (const [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }
}
wordTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);