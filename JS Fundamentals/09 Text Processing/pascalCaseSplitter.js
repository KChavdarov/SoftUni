function pascalcase(input) {
    let words = [];
    let capitalIndex = 0;
    for (let i = 1; i < input.length; i++) {
        if (input[i].charCodeAt() <= 90) {
            let word = input.substring(capitalIndex, i);
            capitalIndex = i;
            words.push(word);
        }
    }
    let word = input.substring(capitalIndex);
    words.push(word);
    console.log(words.join(', '));
}
pascalcase('SplitMeIfYouCanHaHaYouCantOrYouCan');
/*
function pascalcase(input) {
    let words = [];
    let word = input[0];
    for (let i = 1; i <= input.length; i++) {
        let char = input[i];
        if (char == undefined || char.charCodeAt() < 97) {
            words.push(word);
            word = char;
        } else {
            word += char;
        }
    }
    console.log(words.join(', '));
}
pascalcase('SplitMeIfYouCanHaHaYouCantOrYouCan');
*/