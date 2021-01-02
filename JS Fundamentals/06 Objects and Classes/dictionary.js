function dictionary(input) {
    class Term {
        constructor(name, definition) {
            this.name = name;
            this.definition = definition;
        }
        interpret() {
            console.log(`Term: ${this.name} => Definition: ${this.definition}`);
        }
    }

    let dictionary = [];

    for (const item of input) {
        let entry = JSON.parse(item);
        let [name, definition] = Object.entries(entry)[0];
        const term = new Term(name, definition);
        // CHECK IF THE TERM IS PRESENT IN THE DICTIONARY
        let terms = [];
        for (const term of dictionary) {
            terms.push(term.name);
        }
        if (terms.includes(term.name)) {
            dictionary[terms.indexOf(term.name)].definition = term.definition;
        } else {
            dictionary.push(term);
        }
    }
    dictionary = dictionary.sort((a, b) => a.name.localeCompare(b.name));
    dictionary.forEach(term => term.interpret());
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Bus":"sadfgacngkdjfgcjdfgbdskjgnbkscdg."}',
]);