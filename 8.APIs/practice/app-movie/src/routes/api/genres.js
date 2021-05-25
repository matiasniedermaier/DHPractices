const express = require('express');
const router = express.Router();
const genreApiController = require('../../controllers/api/genreApiController');

router.get('/', genreApiController.list);

router.get('/:id', genreApiController.detail);

router.post('/create', genreApiController.create);

router.put('/update/:id', genreApiController.update);

router.delete('/delete/:id', genreApiController.delete);

module.exports = router;