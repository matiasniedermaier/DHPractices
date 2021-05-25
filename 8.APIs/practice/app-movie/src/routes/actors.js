const express = require('express');
const { validationResult } = require('express-validator');
const router = express.Router();
const actorController = require('../controllers/actorController');
const validationsMiddleware = require('../middlewares/validationsMiddleware');

router.get('/top', actorController.top);

router.get('/detail/:id', actorController.detail);

router.get('/addActor', actorController.addActor);

router.post('/addActor', validationsMiddleware.actor(), actorController.addActorSave);

router.get('/:page?', actorController.actors);

module.exports = router;