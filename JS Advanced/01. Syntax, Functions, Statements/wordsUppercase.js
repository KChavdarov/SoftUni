function wordsUppercase(str) {
    str = str.toUpperCase();
    let words = str.match(/\w+/g);
    console.log(words.join(", "));
}
wordsUppercase('Hi, how are you?');