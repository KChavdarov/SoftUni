function matchPhone(input) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let matches = [];
    let match = pattern.exec(input);
    while (match != null) {
        matches.push(match[0]);
        match = pattern.exec(input);
    }
    console.log(matches.join(', '));
}
matchPhone("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");