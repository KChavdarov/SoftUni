function wordOccurances(input) {
    let collection = {};

    for (const word of input) {
        if (!collection.hasOwnProperty(word)) {
            collection[word] = 0;
        }
        collection[word]++;
    }
    let sorted = Object.entries(collection).sort(([wordA,countA],[wordB,countB]) => countB - countA);

    for (const [word,count] of sorted) {
        console.log(`${word} -> ${count} times`);
    }
}
wordOccurances(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);