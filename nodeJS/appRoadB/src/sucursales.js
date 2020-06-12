const functions = require ('../customFunctions');
const theaters = functions.readJson('./data/theaters.json');
let theater = '';
let name = '';
let address = '';
let description = '';

// Titulo nuestras salas
theater = 'Nuestras Salas\n\n\n';

// Total de salas
theater = theater.concat('Total de salas ' + theaters.length + '\n\n\n');

// Listado de salas
theater = theater.concat('Listado de Salas\n\n');
theaters.forEach( cinema => {
    name = 'Nombre: ' + cinema.name;
    address = 'Dirección: ' + cinema.address;
    description = 'Reseña: ' + cinema.description;
    theater = theater.concat(name + '\n' + address + '\n' + description + '\n\n');
});

module.exports = theater;