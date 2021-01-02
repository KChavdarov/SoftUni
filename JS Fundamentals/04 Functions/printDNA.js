function printDNA(number) {
    let string = 'ATCGTTAGGG'.repeat(number);
    let DNA = string.split('');
    let lines = number;
    let index = 0;

    while (lines > 0) {
        console.log(printFirstLine(DNA[index], DNA[index + 1]));
        index += 2;
        lines--;
        if (lines > 0) {
            console.log(printSecondLine(DNA[index], DNA[index + 1]));
            index += 2;
            lines--;
        }
        if (lines > 0) {
            console.log(printThirdLine(DNA[index], DNA[index + 1]));
            index += 2;
            lines--;
        }
        if (lines > 0) {
            console.log(printSecondLine(DNA[index], DNA[index + 1]));
            index += 2;
            lines--;
        }
    }

    function printFirstLine(g1, g2) {
        return `**${g1}${g2}**`;
    }

    function printSecondLine(g1, g2) {
        return `*${g1}--${g2}*`;
    }

    function printThirdLine(g1, g2) {
        return `${g1}----${g2}`;
    }

    function printFourthLine(g1, g2) {
        return `*${g1}--${g2}*`;
    }
}
printDNA(10);