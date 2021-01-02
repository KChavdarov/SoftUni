function problem2(input) {
    let count = Number(input.shift());

    for (let i = 0; i < count; i++) {
        let message = input.shift();
        let pattern = /([*@])(?<tag>[A-Z][a-z]{2,})\1: \[(?<l1>[A-Za-z])\]\|\[(?<l2>[A-Za-z])\]\|\[(?<l3>[A-Za-z])\]\|$/;
        let matched = pattern.exec(message);
        if (matched) {
            let tag = matched.groups.tag;
            let l1 = matched.groups.l1;
            let l2 = matched.groups.l2;
            let l3 = matched.groups.l3;
            console.log(`${tag}: ${l1.charCodeAt()} ${l2.charCodeAt()} ${l3.charCodeAt()}`);
        } else {
            console.log("Valid message not found!");
        }
    }
}
problem2([
    '3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
]);
console.log("-----");
problem2([
    '3',
    '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid',
    '*tAGged*: [i][i][i]|',
    'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|'
]);