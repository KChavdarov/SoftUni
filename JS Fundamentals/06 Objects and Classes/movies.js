function movies(input) {
    let movieCatalogue = [];
    for (const element of input) {
        if (element.includes('addMovie ')) {
            let movie = {};
            movie.name = element.split('addMovie ')[1];
            movieCatalogue.push(movie);
        } else if (element.includes(' directedBy ')) {
            let name = element.split(' directedBy ')[0];
            let director = element.split(' directedBy ')[1];
            for (let movie of movieCatalogue) {
                if (movie.name === name) {
                    movie.director = director;
                }
            }
        } else if (element.includes(' onDate ')) {
            let name = element.split(' onDate ')[0];
            let date = element.split(' onDate ')[1];
            for (let movie of movieCatalogue) {
                if (movie.name === name) {
                    movie.date = date;
                }
            }
        }
    }
    for (const movie of movieCatalogue) {
        let keys = Object.keys(movie);
        if (keys.length > 2) {
            console.log(JSON.stringify(movie));
        }
    }
}


movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);