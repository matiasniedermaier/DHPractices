const movies = require('../data/movies.json');

let enCartelera = (req, res) => {
    // Título
    res.write('En Cartelera\n\n\n');
    // Total de películas
    res.write('Total de películas: ' + movies.total_movies + '\n\n\n');
    // Listado de películas
    res.write('Listado de Películas:\n\n');
    let moviesList = movies.movies;
    moviesList.forEach( (movie, index) => {
        res.write((index+1) + '. ' + movie.title + '\n');
        res.write(movie.overview + '\n\n');
    });
    return res.end();
};  

module.exports = enCartelera;