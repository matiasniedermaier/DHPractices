const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actorController');

router.get('/top', actorController.top);

router.get('/:page?', actorController.actors);

module.exports = router;