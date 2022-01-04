function stringSubstring(word, text) {
    let matcher = " " + word.toLowerCase() + " ";
    let test = " " + text.toLowerCase() + " ";
    let index = test.indexOf(matcher);
    if (index === -1) {
        console.log(`${word} not found!`);
    } else {
        console.log(word);
    }
}
stringSubstring('javascript',
    'JavaScript is the best programming language'
);