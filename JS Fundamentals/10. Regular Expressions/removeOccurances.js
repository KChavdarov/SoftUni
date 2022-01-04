function removeOccurances(word, text) {
    let oldStr = '';
    while (text != oldStr) {
        oldStr = text;
        text = text.replace(word, '');
    }
    console.log(text);
}
removeOccurances('ice',
    'kicegiciceeb'
);
