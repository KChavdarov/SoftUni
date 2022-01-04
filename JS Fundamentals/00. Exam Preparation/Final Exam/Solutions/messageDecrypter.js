function messageDecrypter(input) {
    let count = input.shift();
    for (let i = 0; i < count; i++) {
        let pattern = /^([$%])(?<tag>[A-Z][a-z]{2,})\1: \[(?<number1>\d+)\]\|\[(?<number2>\d+)\]\|\[(?<number3>\d+)\]\|$/;
        let message = input.shift();
        let matched = pattern.exec(message);
        let decrypted = '';
        if (matched != null) {
            let [match, delimiter, tag, ...codes] = matched;
            codes = codes.map(Number).map(a => String.fromCharCode(a));
            decrypted = codes.reduce((a,b) => a+b);
            console.log(`${tag}: ${decrypted}`);
        } else {
            console.log("Valid message not found!");
        }
    }
}
messageDecrypter([
    4,
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
]);

console.log("---");

messageDecrypter([3,
    'This shouldnt be valid%Taggy%: [118]|[97]|[108]|',
    '$tAGged$: [97][97][97]|',
    '$Request$: [73]|[115]|[105]|true'
    ]);