function mirrorWords([input]) {
    let pattern = /([@#])(?<wordA>[A-Za-z]{3,})\1{2}(?<wordB>[A-Za-z]{3,})\1/g;
    let match = pattern.exec(input);
    let mirrorWords = [];
    let pairs = 0;

    while (match != null) {
        pairs++;
        let wordA = match.groups.wordA;
        let wordB = match.groups.wordB;
        let reversed = wordB.split("").reverse().join("");
        if (wordA == reversed) {
            mirrorWords.push(`${wordA} <=> ${wordB}`);
        }
        match = pattern.exec(input);
    }
    if (pairs == 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${pairs} word pairs found!`);
    }
    if (mirrorWords.length == 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(mirrorWords.join(", "));
    }
}
mirrorWords(['#lol#lol# @God@@doG@ #abC@@Cba# @Xyu@#uyX#']);
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);