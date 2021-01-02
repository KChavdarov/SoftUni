function ProcessOddNumbers(arr) {
    console.log(arr.filter((v, i) => i % 2 == 1)
        .map(a => a * 2)
        .reverse()
        .join(' ')
    );
}
ProcessOddNumbers([10, 15, 20, 25]);