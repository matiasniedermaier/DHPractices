const fs = require('fs');
const express = require('express');
const app = express();

// Datos de los heroes
const heroes = JSON.parse(fs.readFileSync(__dirname + '/heroes.json', 'utf-8'));

// Levantando el servidor
app.listen(3000, () => console.log('Server running in port 3000'));

// Route System
app.get('/', (req, res) => {
    return res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.');
});
// Envío el array de heroes
app.get('/heroes', (req, res) => {
    return res.send(heroes);
});
app.get('/heroes/detalle/:id', (req, res) => {
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
});
app.get('/heroes/bio/:id/:ok?', (req, res) => {
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
        return res.send(heroe.nombre + '\nLamento que no desees saber más de mí :(');
    // Si vino el parámetro ok y tengo al heroe
    } else {
        return res.send(heroe.nombre + '\nProfesión: ' + heroe.profesion + '\nPais: ' + heroe.pais + '\nReseña: ' + heroe.resenia);
    }
});
// Creditos
app.get('/creditos', (req, res) => {
    return res.send('Esto fue obra de un próximo heroe de esta página, Matias Niedermaier :)');
});
// Si la ruta que recibe no es valida
app.get('*', (req, res) => {
    return res.send('Error 404 not found');
});