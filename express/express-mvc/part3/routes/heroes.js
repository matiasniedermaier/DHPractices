const express = require('express');
const router = express.Router();

// Requiere controladores
const heroes = require('../controllers/heroesController');

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
router.get('/', heroes.mainHeroes);

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
router.get('/detalle/:id', heroes.detalle);

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
router.get('/bio/:id/:ok?', heroes.bio);

module.exports = router;