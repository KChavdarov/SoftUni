function starEnigma(input) {
    let messagesCount = Number(input.shift());
    let attacked = [];
    let destroyed = [];
    for (let i = 0; i < messagesCount; i++) {
        let message = input[i];
        let key = 0;
        if(/[star]/gi.test(message)){key += message.match(/[star]/gi).length;}
        let decrypted = '';
        for (const char of message) {
            let decryptedChar = String.fromCharCode(char.charCodeAt() - key);
            decrypted += decryptedChar;
        }
        let pattern = /(@(?<planet>[a-zA-Z]+))[^\@\-\!\!\:\>]*?(:(?<population>\d+))[^\@\-\!\!\:\>]*?(!(?<type>[AD])!)[^\@\-\!\!\:\>]*?(->(?<army>\d+))/gm;
        let match = pattern.exec(decrypted);
        if (match) {
            let planet = match.groups.planet;
            // let population = match.groups.population;
            let type = match.groups.type;
            // let army = match.groups.army;
            if (type == 'A') {
                attacked.push(planet);
            } else if (type == 'D') {
                destroyed.push(planet);
            }
        }
    }
    attacked.sort((a, b) => a.localeCompare(b));
    destroyed.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${attacked.length}`);
    attacked.forEach(planet => {
        console.log(`-> ${planet}`);
    });
    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed.forEach(planet => {
        console.log(`-> ${planet}`);
    });
}
starEnigma(['2', 'HYFDoghudd4=63333$D$0m53333', 'EHfsytsnhf?8555&I&2C9555SR']);