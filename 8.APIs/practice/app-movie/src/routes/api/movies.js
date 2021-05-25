const express = require('express');
const router = express.Router();
const movieApiController = require('../../controllers/api/movieApiController');

router.get('/', movieApiController.list);

router.get('/:id', movieApiController.detail);

router.post('/create', movieApiController.create);

router.put('/update/:id', movieApiController.update);

router.delete('/delete/:id', movieApiController.delete);

module.exports = router;