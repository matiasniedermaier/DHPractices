const functions = require ('../customFunctions');
const movies = functions.readJson('./data/movies.json');
let cinema = '';
let num = 1;
let data = [];

// Título en cartelera
cinema = 'En Cartelera\n\n';

// Total de películas
for( let i = 0; i < movies.length; i++){
    cinema = cinema.concat(num + '. ' + movies[i].title + '\n');
    num++;
}

// Listados de películas
cinema = cinema.concat('\n\nListados de Películas\n\n');
data = functions.alphabetical(movies);
data.forEach( titles => {
    movies.forEach( movie => {
        if(movie.title == titles) {
            title = 'Título: ' + movie.title;
            overview = 'Reseña: ' + movie.overview;
            cinema = cinema.concat(title + '\n\n' + overview + '\n\n\n');
        }
    });
});

module.exports = cinema;
