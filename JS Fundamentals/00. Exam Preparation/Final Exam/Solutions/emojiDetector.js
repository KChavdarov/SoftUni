function emojiDetector([input]) {
    let numberPattern = /\d/g;
    let numbers = input.match(numberPattern).map(Number);
    let coolThreshold = numbers.reduce((a, b) => a * b);
    let emojis = {};
    let pattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let match = pattern.exec(input);

    while (match != null) {
        let emoji = match.groups.emoji;
        let coolness = 0;
        for (const letter of emoji) {
            coolness += letter.charCodeAt();
        }
        emojis[match[0]] = coolness;
        match = pattern.exec(input);
    }

    let filtered = Object.entries(emojis).filter(a => a[1] > coolThreshold);
    let totalCount = Object.keys(emojis).length;

    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${totalCount} emojis found in the text. The cool ones are:`);
    if (filtered.length > 0){
        for (const [emoji,coolness] of filtered) {
            console.log(emoji);
        }
    }
}
emojiDetector([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
]);

emojiDetector([
    '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
  ]);

emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);