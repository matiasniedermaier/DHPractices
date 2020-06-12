const functions = require ('../customFunctions');
const movies = functions.readJson('./data/movies.json');
let home = '';
let data = [];

// Le asigno el titulo
home = 'Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.\n\n\n';

// Listado de películas alfabéticamente
home = home.concat('Listado de Películas\n\n')
data = functions.alphabetical(movies);
data.forEach( titles => {
    let title = titles + '\n';
    home = home.concat(title);
});

// Pié de pagina
home = home.concat('\n\nRecordá que podés visitar las secciones:\n\n');
home = home.concat('En Cartelera\n', 'Más Votadas\n', 'Sucursales\n', 'Contacto\n', 'Preguntas Frecuentes\n');

module.exports = home;