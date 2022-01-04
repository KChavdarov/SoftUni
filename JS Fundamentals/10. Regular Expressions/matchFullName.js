function matchFullName(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let match = pattern.exec(input);
    let matches = [];
    while (match != null){
        matches.push(match);
        match = pattern.exec(input);
    }
    console.log(matches.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");