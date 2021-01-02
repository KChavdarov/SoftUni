function rageQuit(input) {
    let uniqueChars = new Set();
    let line = '';

    let matcher = /(?<message>\D{1,20})(?<repetitions>\d{1,2})/gm;
    let match = matcher.exec(input);
    while (match) {
        message = (match.groups.message).toUpperCase();
        repetitions = Number(match.groups.repetitions);
        //add spam to line
        if (repetitions > 0) {
            line += message.repeat(repetitions);
            //add every charecter of message to uniques Set
            for (const char of message) {
                uniqueChars.add(char);
            }
        }
        match = matcher.exec(input);
    }
    console.log(`Unique symbols used: ${uniqueChars.size}`);
    console.log(line);
}
rageQuit([
    'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15'
]);