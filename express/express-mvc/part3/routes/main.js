const express = require('express');
const router = express.Router();

// Requiere controladores
const main = require('../controllers/mainController');

// Ruta Raíz / ➝ Home
router.get('/', main.main);

// Ruta Créditos
router.get('/creditos', main.credits);

module.exports = router;