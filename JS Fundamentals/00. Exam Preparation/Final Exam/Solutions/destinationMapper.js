function destinationMapper(input) {
    let pattern = /([/=])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let points = 0;
    let destinations = [];
    let matched = pattern.exec(input);
    while (matched != null) {
        let destination = matched.groups.destination;
        points += destination.length;
        destinations.push(destination);
        matched = pattern.exec(input);
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");