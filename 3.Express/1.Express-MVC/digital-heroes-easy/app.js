const fs = require('fs');
const express = require('express');
const app = express();

// Heroes data
const heroes = JSON.parse(fs.readFileSync(__dirname + '/heroes.json', 'utf-8'));

// Server
app.listen(3000, () => console.log('Server running in port 3000'));

// Route System
app.get('/', (req, res) => {
    return res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.');
});
// Heroes
app.get('/heroes', (req, res) => {
    // Send array of heroes
    return res.send(heroes);
});
// Info heroe
app.get('/heroes/detalle/:id', (req, res) => {
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
});
// Detail heroe
app.get('/heroes/bio/:id/:ok?', (req, res) => {
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
        return res.send(heroe.nombre + '\nLamento que no desees saber más de mí :(');
    // If the parameter came ok and I have the hero
    } else {
        return res.send(heroe.nombre + '\nProfesión: ' + heroe.profesion + '\nPais: ' + heroe.pais + '\nReseña: ' + heroe.resenia);
    }
});
// Credit
app.get('/creditos', (req, res) => {
    return res.send('Esto fue obra de un próximo heroe de esta página, Matias Niedermaier :)');
});
// 404 not found
app.get('*', (req, res) => {
    return res.send('Error 404 not found');
});