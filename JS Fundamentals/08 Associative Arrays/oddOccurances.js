function oddOccurances(input) {
    let words = input.split(' ');
    words = words.map(a => a.toLowerCase());
    let collection = new Map();
    
    for (const word of words) {
        if (!collection.has(word)) {
            collection.set(word, 0);
        }
        let counter = collection.get(word);
        counter++;
        collection.set(word, counter);
    }
    let oddOccuranceWords = [];
    for (const [word, count] of collection) {
        if (count % 2 == 1) {
            oddOccuranceWords.push(word);
        }
    }
    console.log(oddOccuranceWords.join(' '));
}
oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

// function oddOccurances(input) {
//     let words = input.split(' ');
//     words = words.map(a => a.toLowerCase());
//     let collection = {};

//     for (const word of words) {
//         if (!collection.hasOwnProperty(word)) {
//             collection[word] = 0;
//         }
//         collection[word]++;
//     }

//     let oddOccuranceWords = [];

//     for (const [word, count] of Object.entries(collection)) {
//         if (count % 2 == 1) {
//             oddOccuranceWords.push(word);
//         }
//     }
//     console.log(oddOccuranceWords.join(' '));

// }
// oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');