const homePage = require('../src/homePage');
const enCartelera = require('../src/enCartelera');
const masVotadas = require('../src/masVotadas');
const sucursales = require('../src/sucursales');
const contacto = require('../src/contacto');
const preguntasFrecuentes = require('../src/preguntasFrecuentes');

// Index Controller
let IndexController = {
    homePage: homePage,
    enCartelera: enCartelera,
    masVotadas: masVotadas,
    sucursales: sucursales,
    contacto: contacto,
    preguntasFrecuentes: preguntasFrecuentes
};

module.exports = IndexController;