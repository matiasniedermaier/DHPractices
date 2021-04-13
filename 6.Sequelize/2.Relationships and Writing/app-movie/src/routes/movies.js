const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const validationsMiddleware = require('../middlewares/validationsMiddleware');

router.get('/detail/:id', movieController.detail);

router.get('/new', movieController.new);

router.get('/recommended', movieController.recommended);

router.get('/search', movieController.search);

router.get('/create', movieController.create);

router.post('/create', validationsMiddleware.movie(), movieController.saveCreate);

router.get('/edit/:id', movieController.edit);

router.put('/edit/:id', validationsMiddleware.movie(), movieController.saveEdit);

router.delete('/delete/:id', movieController.delete);

router.get('/genres', movieController.genres);

router.get('/genres/:id', movieController.genresDetail);

router.get('/:page?', movieController.movies);

module.exports = router;