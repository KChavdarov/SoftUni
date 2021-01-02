function messageEncrypter(input) {
    let count = Number(input.shift());

    for (let i = 0; i < count; i++) {
        let message = input.shift();
        let pattern = /([@*])(?<tag>[A-Z][a-z]{2,})\1: \[(?<letter1>[A-Za-z])\]\|\[(?<letter2>[A-Za-z])\]\|\[(?<letter3>[A-Za-z])\]\|$/;
        let matched = pattern.exec(message);
        if (matched != null) {
            let [match, delimiter, tag, ...letters] = matched;
            numbers = letters.map(a => a.charCodeAt());
            console.log(`${tag}: ${numbers.join(" ")}`);
        } else {
            console.log("Valid message not found!");
        }
    }
}
messageEncrypter([
    '3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
]);
console.log("---");
messageEncrypter([
    '3',
    '@Taggy @: [i] | [n] | [v] | [a] | [l] | [i] | [d] | this shouldn’ t be valid *',
    'tAGged *: [i][i][i] |',
    'Should be invalid @Taggy @: [v] | [a] | [l] | [l] | [l] |'
]);