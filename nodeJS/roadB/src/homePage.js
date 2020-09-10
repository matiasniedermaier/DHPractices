const movies = require('../data/movies.json');
const CustomFunctions = require('../customFunctions');

let homePage = (req, res) => {
    // Título
    res.write('Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.\n\n\n');
    // Total de películas
    res.write('Total de películas: ' + movies.total_movies + '\n\n\n');
    // Listado de películas
    res.write('Listado de Películas:\n\n');
    let moviesList = CustomFunctions.moviesList();
    moviesList.forEach( (movie, index) => {
        res.write((index+1) + '. ' + movie + '\n');
    });
    // Pié de página
    res.write('\n\nRecordá que podés visitar las secciones:\nEn Cartelera\nMás Votadas\nSucursales\nContacto\nPreguntas Frecuentes');
    return res.end();
};

module.exports = homePage;