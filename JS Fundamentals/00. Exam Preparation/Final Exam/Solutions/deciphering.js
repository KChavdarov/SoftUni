function deciphering(input) {
    let message = input.shift();
    let validator = /^[d-z\{\}\|#]+$/;
    if (message.match(validator) != null) {
        message = message.split("").map(a => String.fromCharCode(a.charCodeAt() - 3)).join("");
        let [key, replacement] = input.shift().split(" ");
        let pattern = new RegExp(`${key}`, "g");
        message = message.replace(pattern, replacement);
        console.log(message);
    } else {
        console.log("This is not the book you are looking for.");
    }
}
deciphering([
    'wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
    'ec an'
]);
console.log("---");
deciphering([
    'arx#vkdww#qrw#sdvv',
    't l'
]);