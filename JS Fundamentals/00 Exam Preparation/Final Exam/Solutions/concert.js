function concert(input) {
    let bands = {};
    let actions = {
        Add(bands, name, members) {
            if (!bands.hasOwnProperty(name)) {
                bands[name] = {
                    members: new Set(),
                    time: 0
                };
            }
            members = members.split(", ");
            members.forEach(member => {
                bands[name].members.add(member);
            });
        },
        Play(bands, name, time) {
            if (!bands.hasOwnProperty(name)) {
                bands[name] = {
                    members: new Set(),
                    time: 0
                };
            }
            bands[name].time += Number(time);
        }
    };
    while ((command = input.shift()) != 'start of concert') {
        let [action, name, data] = command.split("; ");
        actions[action](bands, name, data);
    }
    let totalTime = 0;
    Object.entries(bands).forEach(([band, data]) => {
        totalTime += data.time;
    });
    console.log(totalTime);
    let sorted = Object.entries(bands).sort((a, b) => bandSort(a, b));
    for (const [band, data] of sorted) {
        console.log(`${band} -> ${data.time}`);
    }
    let band = input.shift();
    console.log(band);
    for (const member of bands[band].members) {
        console.log(`=> ${member}`);
    }

    function bandSort([nameA, dataA], [nameB, dataB]) {
        return dataB.time - dataA.time || nameA.localeCompare(nameB);
    }
}
concert([
    'Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones'
]);
console.log("---");
concert([
    'Add; The Beatles; John Lennon, Paul McCartney',
    'Add; The Beatles; Paul McCartney, George Harrison',
    'Add; The Beatles; George Harrison, Ringo Starr',
    'Play; The Beatles; 3698',
    'Play; The Beatles; 3828',
    'start of concert',
    'The Beatles'
]);