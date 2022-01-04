function modernTimes(input) {
    let words = input.split(' ');
    for (let word of words) {
        if (word.length > 1 && word[0] == '#') {
            word = word.substring(1);
            let isValid = true;
            for (let i = 0; i < word.length; i++) {
                let code = word.charCodeAt(i);
                if ((code < 97 || code > 122) && (code < 65 || code > 90)) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                console.log(word);
            }
        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');

/*
function modernTimes(input) {
    let words = input.split(' ');
    let filtered = words.filter(a => a[0] == '#' && a.length > 1);
    for (let word of filtered) {
        word = word.substring(1);
        let testWord = word.toLowerCase();
        let isValid = true;
        for (let i = 0; i < testWord.length; i++) {
            if ((testWord.charCodeAt(i) < 97) || testWord.charCodeAt(i) > 122) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            console.log(word);
        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
*/