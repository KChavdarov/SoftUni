function revealWords(words, templates) {
    words = words.split(', ');
    for (let word of words) {
        let key = '*'.repeat(word.length);
        templates = templates.replace(key, word);
    }
    console.log(templates);
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);