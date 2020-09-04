const express = require('express');
const router = express.Router();

// Controllers
const heroesController = require('../controllers/heroesController');

// Route System
router.get('/', heroesController.index);
router.get('/detalle/:id', heroesController.detalle);
router.get('/bio/:id/:ok?', heroesController.heroe);

module.exports = router;