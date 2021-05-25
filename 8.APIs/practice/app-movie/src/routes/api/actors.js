const express = require('express');
const router = express.Router();
const actorApiController = require('../../controllers/api/actorApiController');

router.get('/', actorApiController.list);

router.get('/:id', actorApiController.detail);

router.post('/create', actorApiController.create);

router.put('/update/:id', actorApiController.update);

router.delete('/delete/:id', actorApiController.delete);

module.exports = router;