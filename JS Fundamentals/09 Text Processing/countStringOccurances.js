function countStringOccurances(text, word) {
    let words = text.split(' ');
    let count = words.filter(a => a == word).length;
    console.log(count);
}
countStringOccurances("This is a word and it also is a sentence",
    "is"
);