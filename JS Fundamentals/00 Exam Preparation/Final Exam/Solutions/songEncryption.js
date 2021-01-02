function songEncryption(input) {
    while ((track = input.shift()) != "end") {
        let pattern = /^(?<artist>[A-Z][a-z\s']+):(?<song>[A-Z\s]+)$/;
        let matched = pattern.exec(track);
        if (matched != null) {
            let artist = matched.groups.artist;
            let song = matched.groups.song;
            let key = artist.length;
            artist = encrypt(artist, key);
            song = encrypt(song, key);
            console.log(`Successful encryption: ${artist}@${song}`);
        } else {
            console.log("Invalid input!");
        }
    }

    function encrypt(str, key) {
        let encrypted = "";
        for (const char of str) {
            let charCode = char.charCodeAt();
            let newCharCode = charCode + key;
            if (charCode >= 65 && charCode <= 90) {
                if (newCharCode > 90) {
                    newCharCode = 64 + (newCharCode - 90);
                }
                encrypted += String.fromCharCode(newCharCode);
            } else if (charCode >= 97 && charCode <= 122) {
                if (newCharCode > 122) {
                    newCharCode = 96 + (newCharCode - 122);
                }
                encrypted += String.fromCharCode(newCharCode);
            } else {
                encrypted += char;
            }
        }
        return encrypted;
    }
}
songEncryption([
    'Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end'
]);
console.log("---");
songEncryption([
"Michael Jackson:ANOTHER PART OF ME",
"Adele:ONE AND ONLY",
"Guns n'roses:NOVEMBER RAIN",
"Christina Aguilera: HuRt",
"end"
]);