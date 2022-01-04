function postOffice([input]) {
    let [partOne, partTwo, partThree] = input.split('|');
    let letterPattern = /([#$%*&])(?<letters>[A-Z]+)\1/;
    let letterMatch = letterPattern.exec(partOne);
    let capitalLetters = letterMatch.groups.letters;
    let words = partThree.split(/ +/g);
    for (const letter of capitalLetters) {
        let letterCode = letter.charCodeAt();
        let validPattern = new RegExp(`(?<code>${letterCode}):(?<count>\\d{2})`);
        let match = validPattern.exec(partTwo);
        let length = Number(match.groups.count);
        let wordPattern = new RegExp(`^${letter}[^ ]{${length}}$`, 'g');
        for (const keyword of words) {
            let word = wordPattern.exec(keyword);
            if (word) {
                console.log(word[0]);
            }
        }
    }
}
postOffice([
    'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'
]);
// postOffice([
//     'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'
// ]);