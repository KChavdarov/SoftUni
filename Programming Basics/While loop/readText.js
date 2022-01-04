function readText(input) {
    let index = 0;
    let text = input[index];
    index++;
    let wordCount = 0;
    while (text != "Stop") {
        wordCount++;
        text = input[index];
        index++;
    }
    console.log(wordCount);
}