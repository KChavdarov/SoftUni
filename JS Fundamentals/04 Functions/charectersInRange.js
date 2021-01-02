function charectersInRange(char1, char2) {
    let start = defineStartNum(char1, char2);
    let stop = defineStopNum(char1, char2);
    console.log(listCharecters(start, stop));

    function defineStartNum(char1, char2) {
        let num1 = char1.charCodeAt();
        let num2 = char2.charCodeAt();
        return Math.min(num1, num2);
    }

    function defineStopNum(char1, char2) {
        let num1 = char1.charCodeAt();
        let num2 = char2.charCodeAt();
        return Math.max(num1, num2);
    }

    function listCharecters(num1, num2) {
        let charecterArr = [];
        for (let i = num1 + 1; i < num2; i++) {
            charecterArr.push(String.fromCharCode(i));
        }
        return charecterArr.join(' ');
    }
}

charectersInRange('#', ':');