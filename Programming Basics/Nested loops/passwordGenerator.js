function passwordGenerator(input) {
    let n = Number(input[0]);
    let l = Number(input[1]);
    let printLine = "";

    for (a = 1; a < n; a++) {
        for (b = 1; b < n; b++) {
            for (c = 97; c < 97 + l; c++) {
                for (d = 97; d < 97 + l; d++) {
                    for(e = 1; e <= n; e++){
                        if(e > Math.max(a,b)){
                            printLine += a + "" + b + String.fromCharCode(c) + String.fromCharCode(d) + e + " ";
                        }
                    }
                }
            }
        }
    }
    console.log(printLine);
}
passwordGenerator([2,4]);