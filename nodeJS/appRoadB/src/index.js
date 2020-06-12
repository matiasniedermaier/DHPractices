const contact = require ('./contacto');
const cinema = require ('./enCartelera');
const home = require ('./homePage');
const mostAverage = require ('./masVotadas');
const faqs = require ('./preguntasFrecuentes');
const theaters = require ('./sucursales');

// Variable para exponer contenido
const index = {
    contact: contact,
    cinema: cinema,
    home: home,
    mostAverage: mostAverage,
    faqs: faqs,
    theaters: theaters
};

module.exports = index;