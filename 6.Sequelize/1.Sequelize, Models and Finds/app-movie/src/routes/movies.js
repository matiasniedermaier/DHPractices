const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/detail/:id', movieController.detail);

router.get('/new', movieController.new);

router.get('/recommended', movieController.recommended);

router.get('/search', movieController.search);

router.get('/:page?', movieController.movies);

module.exports = router;