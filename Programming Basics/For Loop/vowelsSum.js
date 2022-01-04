function vowelsSum(input) {
    let text = input;
    let length = text.length;
    let result = 0;

    for (let i = 0; i < length; i++) {
        switch (text[i]) {
            case "a":
                result += 1;
                break;
            case "e":
                result += 2;
                break;
            case "i":
                result += 3;
                break;
            case "o":
                result += 4;
                break;
            case "u":
                result += 5;
                break;
        }
    }
    console.log(result);
}
vowelsSum("bamboo");