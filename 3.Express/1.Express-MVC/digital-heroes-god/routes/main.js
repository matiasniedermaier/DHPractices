const express = require('express');
const router = express.Router();

// Controllers
const mainController = require('../controllers/mainController');

// Route System
router.get('/creditos', mainController.credit);
router.get('/', mainController.index);
router.get('*', mainController.default);

module.exports = router;