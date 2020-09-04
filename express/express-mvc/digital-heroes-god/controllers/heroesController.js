const fs = require('fs');

// Datos de los heroes
const heroes = require('../data/heroes.json');
let heroesController = {
    index: (req, res) => {
        // Envío array de heroes
        return res.send(heroes);
    },
    detalle: (req, res) => {
        // Saco el id desde la ruta
        let id = req.params.id;
        // Busco el heroe segun su id
        let heroe = heroes.find( heroe => {
            return heroe.id == id;
        });
        // Si lo encuentra lo envío a la vista
        if( heroe != undefined ) {
            return res.send('Hola, mi nombre es ' + heroe.nombre + ' y soy ' + heroe.profesion);  
        // Si no lo encuentra retorna esto 
        } else {
            return res.send('Lo siento no encontramos ese heroe :(');
        }
    },
    heroe: (req, res) => {
        // Saco el id desde la ruta
        let id = req.params.id;
        // Busco el heroe segun su id
        let heroe = heroes.find( heroe => {
            return heroe.id == id;
        });
        // Si no encuentro al heroe
        if( heroe == undefined ) {
            return res.send('No encontramos un héroe para mostrarte su biografía');
        // Si encuentro al heroe pero no tengo el parametro ok
        } else if( req.params.ok == undefined ) {
            return res.send(heroe.nombre + '<br>Lamento que no desees saber más de mí :(');
        // Si vino el parámetro ok y tengo al heroe
        } else {
            return res.send(heroe.nombre + '<br>Profesión: ' + heroe.profesion + '<br>Pais: ' + heroe.pais + '<br>Reseña: ' + heroe.resenia);
        }
    }
};

module.exports = heroesController;