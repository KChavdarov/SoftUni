function neighborhoods(input) {
    let neighborhoods = {};
    for (const place of input.shift().split(', ')) {
        neighborhoods[place] = [];
    }

    for (const element of input) {
        let [neighborhood, name] = element.split(' - ');
        if (neighborhoods.hasOwnProperty(neighborhood)){
            neighborhoods[neighborhood].push(name);
        }
    }

    let sorted = Object.entries(neighborhoods).sort(([neighborhoodA,occupantsA],[neighborhoodB,occupantsB]) => occupantsB.length - occupantsA.length);

    for (const [neighborhood,occupants] of sorted) {
        console.log(`${neighborhood}: ${occupants.length}`);
        if(occupants.length > 0){
            console.log(`--${occupants.join('\n--')}`);
        }
    }
}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
]);