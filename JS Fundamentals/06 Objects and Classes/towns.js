function towns(input) {
    // class Town {
    //     constructor(name, latitude, longitude) {
    //         this.name = name;
    //         this.latitude = latitude;
    //         this.longitude = longitude;
    //     }
    // }

    // for (const element of input) {
    //     let [name, latitude, longitude] = element.split(' | ');
    //     const town = new Town(name, Number(latitude).toFixed(2), Number(longitude).toFixed(2));
    //     console.log(town);
    // }

    for (const element of input) {
        let [name, latitude, longitude] = element.split(' | ');
        let town = {};
        town.town = name;
        town.latitude = Number(latitude).toFixed(2);
        town.longitude = Number(longitude).toFixed(2);
        console.log(town);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);