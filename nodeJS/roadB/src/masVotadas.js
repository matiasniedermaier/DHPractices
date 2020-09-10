const movies = require('../data/movies.json');
const CustomFunctions = require('../customFunctions');

let masVotadas = (req, res) => {
    // Título
    res.write('Más Votadas\n\n\n');
    // Total de películas
    let mostAverage = CustomFunctions.mostAverage();
    res.write('Total de películas: ' + mostAverage.length + '\n\n\n');
    // Rating promedio
    let average = CustomFunctions.average();
    res.write('Promedio de rating de estas películas: ' + average + '\n\n\n');
    // Listado de películas
    res.write('Listado de películas\n\n');
    mostAverage.forEach( (movie, index) => {
        res.write((index+1) + '. ' + movie.title + '\n');
        res.write('Rating: ' + movie.vote_average + '\n');
        res.write('Reseña: ' + movie.overview + '\n\n');
    });
    return res.end();
};

module.exports = masVotadas;