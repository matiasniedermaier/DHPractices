const functions = require ('../customFunctions');
const movies = functions.readJson('./data/movies.json');
let mostAverage = '';
let num = 1;
let mostRated = [];
let average = 0;
let title = '';
let rating = '';
let overview = '';

// Título más votadas
mostAverage = 'Más Votadas\n\n';

// Total de películas
mostRated = functions.mostRated(movies);
mostRated.forEach( movie => {
    mostAverage = mostAverage.concat(num + '. ' + movie.title + '\n');
    num++;
});

// Raiting promedio
average = functions.average(mostRated);
mostAverage = mostAverage.concat('\n\nRating promedio ' + average + '\n\n\n');

// Listado de películas
num = 1;
mostAverage = mostAverage.concat('Listado de Películas\n\n')
movies.forEach( movie => {
    title = 'Título: ' + movie.title;
    rating = 'Rating: ' + movie.vote_average;
    overview = 'Reseña: ' + movie.overview;
    mostAverage = mostAverage.concat(title + '\n' + rating + '\n' + overview + '\n\n');
    num++;
})

module.exports = mostAverage;