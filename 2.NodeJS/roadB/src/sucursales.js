const theaters = require('../data/theaters.json');

let sucursales = (req, res) => {
    // Título
    res.write('Nuestras salas\n\n\n');
    // Total de salas
    res.write('Total de salas: '+ theaters.total_theaters +'\n\n\n');
    // Listado de salas
    res.write('Listado de Salas:\n\n');
    let theatersList = theaters.theaters;
    theatersList.forEach( theater => {
        res.write('Nombre: ' + theater.name + '\n');
        res.write('Dirección: ' + theater.address + '\n');
        res.write('Descripción: ' + theater.description + '\n\n');
    });
    return res.end();
};

module.exports = sucursales;