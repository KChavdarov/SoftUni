function dictionary(input) {
    let dictionary = {};
    let definitions = input.shift().split(" | ");
    for (const term of definitions) {
        let [word, definition] = term.split(": ");
        if (!dictionary.hasOwnProperty(word)) {
            dictionary[word] = [];
        }
        dictionary[word].push(definition);
    }
    let terms = input.shift().split(" | ");
    for (const word of terms) {
        if (dictionary.hasOwnProperty(word)) {
            console.log(word);
            dictionary[word].sort((a, b) => b.length - a.length).forEach(a => {
                console.log(` -${a}`);
            });
        }
    }
    let command = input.shift();
    if (command == "List") {
        let sorted = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));
        console.log(sorted.join(" "));
    }
}
dictionary([
    'programmer: an animal, which turns coffee into code | developer: a magician',
    'Pesho | Gosho',
    'List'
]);
console.log("---");
dictionary([
    'tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | code | tackle',
    'End'
]);