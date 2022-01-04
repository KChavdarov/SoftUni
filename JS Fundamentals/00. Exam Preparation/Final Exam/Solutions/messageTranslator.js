function messageTranslator(input) {
    let count = Number(input.shift());
    for (const message of input) {
        let pattern = /!(?<cmd>[A-Z][a-z]{2,})!:\[(?<msg>[A-Za-z]{8,})\]/;
        let match = pattern.exec(message);
        if (match != null) {
            let cmd = match.groups.cmd;
            let msg = match.groups.msg;
            encypted = [];
            for (const char of msg) {
                encypted.push(char.charCodeAt());
            }
            console.log(`${cmd}: ${encypted.join(" ")}`);
        } else {
            console.log("The message is invalid");
        }
    }
}
messageTranslator([
    "2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready]"
]);
console.log("---");
messageTranslator([
    "3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"
]);