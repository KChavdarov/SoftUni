function evenPowersOf2(number) {
    let n = Number(number);
    for (let i = 0; i <= n; i += 2) {
        console.log(2 ** i);
    }
}
evenPowersOf2(4);