const fs = require('fs');

// Datos de los heroes
const heroes = require('../data/heroes.json');

module.exports = {
    // Heroes
    index: (req, res) => {
        // Send array of heroes
        return res.send(heroes);
    },
    // Info heroe
    detail: (req, res) => {
        // Get the id from the route
        let id = req.params.id;
        // I search hero according to his id
        let heroe = heroes.find( heroe => {
            return heroe.id == id;
        });
        // If he finds it, I send it to view
        if( heroe != undefined ) {
            return res.send('Hola, mi nombre es ' + heroe.nombre + ' y soy ' + heroe.profesion);  
        // If he can't finds it, I'll send it to view
        } else {
            return res.send('Lo siento no encontramos ese heroe :(');
        }
    },
    // Detail heroe
    heroe: (req, res) => {
        // Get the id from the route
        let id = req.params.id;
        // I search hero according to his id
        let heroe = heroes.find( heroe => {
            return heroe.id == id;
        });
        // If he can't finds it, I'll send it to view
        if( heroe == undefined ) {
            return res.send('No encontramos un héroe para mostrarte su biografía');
        // If he finds it but i don't have the parameter ok
        } else if( req.params.ok == undefined ) {
            return res.send(heroe.nombre + '<br>Lamento que no desees saber más de mí :(');
        // If the parameter came ok and I have the hero
        } else {
            return res.send(heroe.nombre + '<br>Profesión: ' + heroe.profesion + '<br>Pais: ' + heroe.pais + '<br>Reseña: ' + heroe.resenia);
        }
    }
};