function meetings(input) {
    let agenda = {};
    for (const item of input) {
        let [day, person] = item.split(' ');
        if (!agenda.hasOwnProperty(day)) {
            agenda[day] = person;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }
    for (const [day, person] of Object.entries(agenda)) {
        console.log(`${day} -> ${person}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);